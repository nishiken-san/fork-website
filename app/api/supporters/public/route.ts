// app/api/supporters/public/route.ts
import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export const dynamic = 'force-dynamic';
export const revalidate = 300; // 5分ごとにキャッシュを更新

async function getGoogleSheetsData() {
  try {
    const credentials = JSON.parse(
      process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}'
    );
    
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });
    
    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    
    // A列とB列のデータを取得（2行目以降、1行目はタイトル）
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'サポーター!A2:B',
    });
    
    const rows = response.data.values || [];
    
    const supporters: Array<{ name: string; type: 'frenz' | 'partner' }> = [];
    
    // 各行を処理
    rows.forEach(row => {
      // A列（1列目）：みん盆フレンズ
      if (row[0] && row[0].trim()) {
        supporters.push({
          name: row[0].trim(),
          type: 'frenz'
        });
      }
      
      // B列（2列目）：みん盆パートナー
      if (row[1] && row[1].trim()) {
        supporters.push({
          name: row[1].trim(),
          type: 'partner'
        });
      }
    });
    
    return supporters;
  } catch (error) {
    console.error('Error fetching from Google Sheets:', error);
    return [];
  }
}

export async function GET() {
  try {
    const supporters = await getGoogleSheetsData();
    
    return NextResponse.json(
      { supporters },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
        },
      }
    );
  } catch (error) {
    console.error('Error in supporters API:', error);
    return NextResponse.json(
      { supporters: [] },
      { status: 200 }
    );
  }
}