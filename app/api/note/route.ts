// app/api/note/route.ts
import { NextResponse } from 'next/server';

interface NoteItem {
  id: string;
  url: string;
  date: string;
  title: string;
  image: string;
  category: string;
}

export async function GET() {
  try {
    const rssUrl = 'https://note.com/forktoyama/rss';
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS');
    }

    const xmlText = await response.text();
    
    const items: NoteItem[] = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemXml = match[1];

      const title = extractTag(itemXml, 'title');
      const link = extractTag(itemXml, 'link');
      const pubDate = extractTag(itemXml, 'pubDate');

      // サムネイル画像を複数の方法で取得
      let image = '';
      
      // 1. media:thumbnail から取得
      const mediaThumbnailMatch = itemXml.match(/<media:thumbnail\s+url="([^"]+)"/);
      if (mediaThumbnailMatch) {
        image = mediaThumbnailMatch[1];
      }
      
      // 2. enclosure から取得
      if (!image) {
        const enclosureMatch = itemXml.match(/<enclosure[^>]+url="([^"]+)"/);
        if (enclosureMatch) {
          image = enclosureMatch[1];
        }
      }
      
      // 3. description内のimg srcから取得
      if (!image) {
        const description = extractTag(itemXml, 'description');
        const imgMatch = description.match(/<img[^>]+src=["']([^"']+)["']/);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }
      
      // 4. content:encoded内のimg srcから取得
      if (!image) {
        const contentEncoded = extractTag(itemXml, 'content:encoded');
        const imgMatch = contentEncoded.match(/<img[^>]+src=["']([^"']+)["']/);
        if (imgMatch) {
          image = imgMatch[1];
        }
      }

      // 5. note.comの画像URL形式で取得
      if (!image) {
        const noteImageMatch = itemXml.match(/https:\/\/assets\.st-note\.com\/[^"'\s<>]+\.(jpg|jpeg|png|gif|webp)/i);
        if (noteImageMatch) {
          image = noteImageMatch[0];
        }
      }

      // 日付をフォーマット
      const dateObj = new Date(pubDate);
      const formattedDate = `${dateObj.getFullYear()}.${String(dateObj.getMonth() + 1).padStart(2, '0')}.${String(dateObj.getDate()).padStart(2, '0')}`;

      // IDを抽出
      const idMatch = link.match(/\/n\/([a-zA-Z0-9]+)/);
      const id = idMatch ? idMatch[1] : String(items.length + 1);

      items.push({
        id,
        url: link,
        date: formattedDate,
        title: decodeHtmlEntities(title),
        image: image || '/images/note/default.png',
        category: 'fork toyama',
      });
    }

    // 新しい順にソート
    items.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB.getTime() - dateA.getTime();
    });

    return NextResponse.json(items);
  } catch (error) {
    console.error('Error fetching note RSS:', error);
    return NextResponse.json([], { status: 500 });
  }
}

function extractTag(xml: string, tagName: string): string {
  // CDATA形式
  const cdataRegex = new RegExp(`<${tagName}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tagName}>`, 'i');
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) {
    return cdataMatch[1];
  }
  
  // 通常形式
  const normalRegex = new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, 'i');
  const normalMatch = xml.match(normalRegex);
  if (normalMatch) {
    return normalMatch[1];
  }
  
  return '';
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(parseInt(dec, 10)));
}