// app/components/AboutSection.tsx
'use client';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-green-100 aspect-video rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <p className="text-green-700 font-medium">チーム写真</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              私たちについて
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              私たちは、革新的なソリューションを通じて、
              お客様のビジネスの成長を支援します。
              チームワークを重視し、常に新しい挑戦を続けています。
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              一人ひとりの個性を大切にし、
              多様な視点から最適な解決策を見つけ出します。
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-green-700 mb-2">創立</h3>
                <p className="text-gray-600">2020年</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-green-700 mb-2">メンバー</h3>
                <p className="text-gray-600">50名</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-green-700 mb-2">プロジェクト</h3>
                <p className="text-gray-600">100+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;