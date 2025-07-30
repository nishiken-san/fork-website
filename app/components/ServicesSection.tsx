// app/components/ServicesSection.tsx
'use client';

const ServicesSection = () => {
  const services = [
    {
      icon: "💼",
      title: "コンサルティング",
      description: "お客様のビジネス課題を分析し、最適な解決策を提案します。"
    },
    {
      icon: "💻",
      title: "システム開発",
      description: "最新技術を活用したシステムの設計・開発を行います。"
    },
    {
      icon: "🎨",
      title: "デザイン",
      description: "ユーザー体験を重視したデザインソリューションを提供します。"
    },
    {
      icon: "🛠️",
      title: "サポート",
      description: "継続的なサポートでお客様の成功をお手伝いします。"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          サービス
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          私たちは幅広いサービスを通じて、
          お客様のビジネスの成長と成功をサポートします。
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
            すべてのサービスを見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;