// app/components/ContactSection.tsx
'use client';

import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォーム送信のロジックをここに実装
    console.log('Form submitted:', formData);
    // フォームリセット
    setFormData({ name: '', email: '', message: '' });
    alert('お問い合わせありがとうございます。後日ご連絡いたします。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">お問い合わせ</h2>
          <p className="text-xl">
            ご質問やご相談がございましたら、
            お気軽にお問い合わせください。
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">連絡先</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="font-medium">電話</p>
                  <p className="text-green-100">03-1234-5678</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="font-medium">メール</p>
                  <p className="text-green-100">info@fork-company.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="font-medium">住所</p>
                  <p className="text-green-100">〒100-0001<br />東京都千代田区千代田1-1-1</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">お名前</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border-none text-gray-800 focus:ring-2 focus:ring-green-400"
                  placeholder="山田太郎"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">メールアドレス</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded border-none text-gray-800 focus:ring-2 focus:ring-green-400"
                  placeholder="example@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">メッセージ</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded border-none text-gray-800 focus:ring-2 focus:ring-green-400"
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-white text-green-900 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
              >
                送信する
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;