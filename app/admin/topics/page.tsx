'use client';

import { useState, useEffect } from 'react';

interface Topic {
  id: string;
  slug: string;
  date: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  thumbnail?: string;
}

export default function TopicsAdminPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'お知らせ',
    tags: '',
    thumbnail: ''
  });

  useEffect(() => {
    loadTopics();
  }, []);

  const loadTopics = async () => {
    const res = await fetch('/api/topics');
    const data = await res.json();
    setTopics(data.topics || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newTopic = {
      id: Date.now().toString(),
      slug: formData.title.toLowerCase().replace(/\s+/g, '-'),
      date: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
      title: formData.title,
      content: formData.content,
      category: formData.category,
      tags: formData.tags.split(',').map(t => t.trim()),
      thumbnail: formData.thumbnail,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // ここでAPIを呼び出してJSONファイルを更新
    alert('新しい記事を作成しました（実装が必要）');
    console.log(newTopic);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '100px auto', padding: '2rem' }}>
      <h1>Topics管理画面</h1>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '3rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>タイトル</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>内容</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
            rows={10}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>カテゴリ</label>
          <input
            type="text"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label>タグ（カンマ区切り）</label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({...formData, tags: e.target.value})}
            style={{ width: '100%', padding: '0.5rem' }}
          />
        </div>
        
        <button type="submit" style={{ padding: '0.75rem 2rem', background: '#003705', color: 'white', border: 'none', cursor: 'pointer' }}>
          作成
        </button>
      </form>

      <h2>記事一覧</h2>
      <div>
        {topics.map(topic => (
          <div key={topic.id} style={{ padding: '1rem', border: '1px solid #ddd', marginBottom: '1rem' }}>
            <h3>{topic.title}</h3>
            <p>{topic.date} | {topic.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}