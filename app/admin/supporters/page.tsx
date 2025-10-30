// app/admin/supporters/page.tsx
'use client';

import { useState, useEffect } from 'react';
import React from 'react';

export default function AdminSupportersPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [sheetUrl, setSheetUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('supporter_admin_session');
    if (session) {
      try {
        const data = JSON.parse(session);
        const expiryTime = new Date(data.expiry).getTime();
        if (Date.now() < expiryTime) {
          setIsAuthenticated(true);
          setSheetUrl(data.sheetUrl);
        } else {
          sessionStorage.removeItem('supporter_admin_session');
        }
      } catch (e) {
        sessionStorage.removeItem('supporter_admin_session');
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const response = await fetch('/api/admin/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setIsAuthenticated(true);
        setSheetUrl(data.sheetUrl);
        
        const expiry = new Date(Date.now() + 60 * 60 * 1000);
        sessionStorage.setItem('supporter_admin_session', JSON.stringify({
          sheetUrl: data.sheetUrl,
          expiry: expiry.toISOString()
        }));
      } else {
        setError(data.error || 'パスワードが間違っています');
      }
    } catch (error) {
      setError('認証に失敗しました。もう一度お試しください。');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('supporter_admin_session');
    setIsAuthenticated(false);
    setSheetUrl('');
    setPassword('');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: '1rem'
      }}>
        <form onSubmit={handleLogin} style={{ 
          background: 'white', 
          padding: '2.5rem', 
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '420px'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              backgroundColor: '#003705', 
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              fontSize: '1.5rem'
            }}>
              🔒
            </div>
            <h1 style={{ marginBottom: '0.5rem', color: '#003705', fontSize: '1.5rem' }}>
              サポーター管理
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              パスワードを入力してください
            </p>
          </div>
          
          {error && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              backgroundColor: '#fee',
              color: '#c00',
              borderRadius: '8px',
              fontSize: '0.875rem',
              border: '1px solid #fcc'
            }}>
              ⚠️ {error}
            </div>
          )}
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '0.5rem', 
              fontSize: '0.875rem',
              fontWeight: 600,
              color: '#333'
            }}>
              パスワード
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワードを入力"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.875rem',
                border: '2px solid #ddd',
                borderRadius: '8px',
                fontSize: '1rem',
                outline: 'none'
              }}
              autoFocus
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !password}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: loading || !password ? '#ccc' : '#003705',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: loading || !password ? 'not-allowed' : 'pointer',
              fontWeight: 600,
              fontSize: '1rem'
            }}
          >
            {loading ? '認証中...' : 'ログイン'}
          </button>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '0.75rem',
            color: '#666',
            lineHeight: 1.6
          }}>
            <strong>📌 ご注意:</strong><br />
            このページは担当者専用です。パスワードは他の方と共有しないでください。
          </div>
        </form>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5', 
      padding: '2rem' 
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          padding: '1.5rem 2rem',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h1 style={{ color: '#003705', fontSize: '1.5rem', margin: 0 }}>
            📊 サポーター管理
          </h1>
          <button
            onClick={handleLogout}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#f5f5f5',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.875rem'
            }}
          >
            ログアウト
          </button>
        </div>

        <div style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <div style={{
            backgroundColor: '#e8f5e9',
            padding: '1.5rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '2px solid #4caf50'
          }}>
            <h2 style={{ fontSize: '1.125rem', marginBottom: '0.75rem', color: '#2e7d32' }}>
              ✅ 認証成功
            </h2>
            <p style={{ color: '#2e7d32', margin: 0, lineHeight: 1.6 }}>
              Google Sheetsでサポーター情報を編集できます
            </p>
          </div>

          
            href={sheetUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              padding: '1.25rem 2rem',
              backgroundColor: '#003705',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '1.125rem',
              textAlign: 'center'
            }}
          >
            📝 Google Sheetsを開く →
          </a>
        </div>

        <div style={{ 
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#003705' }}>
            📖 編集方法
          </h2>
          <ol style={{ paddingLeft: '1.5rem', lineHeight: 2, color: '#333' }}>
            <li>上のボタンからGoogle Sheetsを開く</li>
            <li>A列にサポーター名を入力</li>
            <li>B列にタイプを入力（frenz または partner）</li>
            <li>変更は自動保存され、5分以内にサイトに反映されます</li>
          </ol>
        </div>

        <div style={{ 
          padding: '1.5rem',
          backgroundColor: '#fff9e6',
          borderRadius: '12px',
          border: '2px solid #ffd700',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#8b6914' }}>
            🔐 セキュリティ注意事項
          </h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: 1.8, color: '#8b6914', margin: 0 }}>
            <li>1行目のヘッダーは削除・変更しないでください</li>
            <li>データは2行目以降に入力してください</li>
            <li>タイプはfrenzまたはpartnerのみ使用可能です</li>
            <li>このページのURLとパスワードは他人に共有しないでください</li>
          </ul>
        </div>

        <div style={{ 
          background: 'white',
          padding: '2rem',
          borderRadius: '12px',
          marginTop: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#003705' }}>
            💡 入力例
          </h3>
          <div style={{ 
            overflowX: 'auto',
            border: '1px solid #ddd',
            borderRadius: '8px'
          }}>
            <table style={{ 
              width: '100%', 
              borderCollapse: 'collapse',
              fontSize: '0.875rem'
            }}>
              <thead>
                <tr style={{ backgroundColor: '#f5f5f5' }}>
                  <th style={{ 
                    padding: '0.75rem', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #ddd',
                    fontWeight: 600
                  }}>A列: 名前</th>
                  <th style={{ 
                    padding: '0.75rem', 
                    textAlign: 'left', 
                    borderBottom: '2px solid #ddd',
                    fontWeight: 600
                  }}>B列: タイプ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>山田太郎</td>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>frenz</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>株式会社ABC</td>
                  <td style={{ padding: '0.75rem', borderBottom: '1px solid #eee' }}>partner</td>
                </tr>
                <tr>
                  <td style={{ padding: '0.75rem' }}>佐藤花子</td>
                  <td style={{ padding: '0.75rem' }}>frenz</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}