// // app/effort/page.tsx
// import Header from '../components/Header';
// import ParallaxSection from './components/ParallaxSection1';
// import InformationMainSection from './components/InformationMainSection';
// import Minei1 from './components/Minei1';
// import Minei2 from './components/Minei2';
// import Minei3 from './components/Minei3';
// import Minei4 from './components/Minei4';
// import Minei5 from './components/Minei5';
// import Footer from '../components/Footer';

// export default function InformationPage() {
//   return (
//     <div className="pt-16">
//       <Header />
//       <ParallaxSection />
//       <InformationMainSection />
//       <Footer />
//     </div>
//   );
// }

// app/blog/page.tsx
import { client, Blog } from '@/lib/microcms';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 60; // 60秒ごとに再検証

async function getBlogs(tagId?: string) {
  const filters = tagId ? `tags[contains]${tagId}` : undefined;
  
  return await client.get({
    endpoint: 'blog',
    queries: {
      filters,
      orders: '-publishedAt',
      limit: 100,
    },
  });
}

async function getTags() {
  return await client.get({
    endpoint: 'tag',
    queries: {
      limit: 100,
    },
  });
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { tag?: string };
}) {
  const blogs = await getBlogs(searchParams.tag);
  const tags = await getTags();

  return (
    <>
      <style jsx>{`
        .blog-page {
          background-color: #E7EBE7;
          min-height: 100vh;
          padding: 140px 50px 100px 50px;
        }
        
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .blog-header {
          margin-bottom: 60px;
        }
        
        .blog-title {
          color: #003705;
          font-size: 40px;
          font-weight: 700;
          margin: 0 0 20px 0;
        }
        
        .blog-subtitle {
          color: #B4B4B4;
          font-size: 15px;
          font-weight: 700;
          margin: 0;
        }
        
        /* タグフィルター */
        .tag-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
        }
        
        .tag-button {
          background-color: #FFFFFF;
          border: 1px solid #003705;
          color: #003705;
          padding: 8px 20px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .tag-button:hover,
        .tag-button.active {
          background-color: #003705;
          color: #FFFFFF;
        }
        
        /* ブログリスト */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 60px;
        }
        
        .blog-card {
          background-color: #FFFFFF;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-decoration: none;
          display: block;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 55, 5, 0.1);
        }
        
        .blog-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        
        .blog-image-placeholder {
          width: 100%;
          height: 200px;
          background-color: #B4B4B4;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-size: 14px;
        }
        
        .blog-content {
          padding: 20px;
        }
        
        .blog-date {
          color: #B4B4B4;
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 10px 0;
        }
        
        .blog-card-title {
          color: #003705;
          font-size: 18px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0 0 15px 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .blog-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        
        .blog-tag {
          background-color: #E7EBE7;
          color: #003705;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 700;
        }
        
        /* 管理者リンク */
        .admin-link-section {
          text-align: center;
          padding: 60px 0;
          border-top: 1px solid #003705;
        }
        
        .admin-link-title {
          color: #003705;
          font-size: 20px;
          font-weight: 700;
          margin: 0 0 20px 0;
        }
        
        .admin-link-button {
          background-color: #003705;
          border: none;
          color: #FFFFFF;
          padding: 15px 40px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .admin-link-button:hover {
          background-color: #005507;
        }
        
        /* タブレット対応 */
        @media (min-width: 769px) and (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* モバイル対応 */
        @media (max-width: 768px) {
          .blog-page {
            padding: 100px 30px 60px 30px;
          }
          
          .blog-title {
            font-size: 28px;
          }
          
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .tag-filter {
            gap: 8px;
          }
          
          .tag-button {
            font-size: 12px;
            padding: 6px 15px;
          }
        }
        
        /* 小型モバイル対応 */
        @media (max-width: 480px) {
          .blog-page {
            padding: 90px 20px 60px 20px;
          }
          
          .blog-title {
            font-size: 24px;
          }
          
          .blog-card-title {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="blog-page">
        <div className="blog-container">
          <div className="blog-header">
            <h1 className="blog-title">ブログ</h1>
            <p className="blog-subtitle">Blog</p>
          </div>

          {/* タグフィルター */}
          <div className="tag-filter">
            <Link 
              href="/blog" 
              className={`tag-button ${!searchParams.tag ? 'active' : ''}`}
            >
              すべて
            </Link>
            {tags.contents.map((tag) => (
              <Link
                key={tag.id}
                href={`/blog?tag=${tag.id}`}
                className={`tag-button ${searchParams.tag === tag.id ? 'active' : ''}`}
              >
                {tag.name}
              </Link>
            ))}
          </div>

          {/* ブログ記事一覧 */}
          <div className="blog-grid">
            {blogs.contents.map((blog: Blog) => (
              <Link key={blog.id} href={`/blog/${blog.id}`} className="blog-card">
                {blog.eyecatch ? (
                  <Image
                    src={blog.eyecatch.url}
                    alt={blog.title}
                    width={blog.eyecatch.width}
                    height={blog.eyecatch.height}
                    className="blog-image"
                  />
                ) : (
                  <div className="blog-image-placeholder">
                    No Image
                  </div>
                )}
                <div className="blog-content">
                  <p className="blog-date">
                    {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                  </p>
                  <h2 className="blog-card-title">{blog.title}</h2>
                  {blog.tags && blog.tags.length > 0 && (
                    <div className="blog-tags">
                      {blog.tags.map((tag) => (
                        <span key={tag.id} className="blog-tag">
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {/* 管理者用リンク */}
          <div className="admin-link-section">
            <h3 className="admin-link-title">管理者の方へ</h3>
            
              href={`https://${process.env.MICROCMS_SERVICE_DOMAIN}.microcms.io/`}
              target="_blank"
              rel="noopener noreferrer"
              className="admin-link-button"
            >
              記事を作成・編集する
            </a>
          </div>
        </div>
      </div>
    </>
  );
}