// app/components/TeamSection.tsx
'use client';

const TeamSection = () => {
  return (
    <section id="team" className="py-20 bg-green-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-16">
          <svg className="w-full h-32 mx-auto mb-8" viewBox="0 0 800 200">
            <g stroke="white" strokeWidth="2" fill="none">
              {/* 人物のシルエット */}
              <circle cx="100" cy="120" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M85,135 Q100,150 115,135" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="200" cy="110" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M185,125 Q200,140 215,125" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="300" cy="100" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M285,115 Q300,130 315,115" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="400" cy="115" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M385,130 Q400,145 415,130" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="500" cy="105" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M485,120 Q500,135 515,120" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="600" cy="110" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M585,125 Q600,140 615,125" stroke="white" strokeWidth="2" fill="none" />
              
              <circle cx="700" cy="120" r="15" stroke="white" strokeWidth="2" fill="none" />
              <path d="M685,135 Q700,150 715,135" stroke="white" strokeWidth="2" fill="none" />
              
              {/* 連携を表す線 */}
              <path d="M115,135 Q150,120 185,125" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M215,125 Q250,110 285,115" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M315,115 Q350,125 385,130" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M415,130 Q450,115 485,120" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M515,120 Q550,115 585,125" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M615,125 Q650,130 685,135" stroke="white" strokeWidth="1" strokeDasharray="5,5" />
            </g>
          </svg>
        </div>
        
        <h2 className="text-4xl font-bold mb-8">チームワーク</h2>
        <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-12">
          多様なバックグラウンドを持つメンバーが協力し、
          革新的なアイデアを生み出しています。
          お互いを尊重し、共に成長することを大切にしています。
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-green-800 p-6 rounded-lg">
            <div className="text-3xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-3">協力</h3>
            <p className="text-green-100">
              チーム全体で協力し合い、
              共通の目標に向かって進んでいます。
            </p>
          </div>
          
          <div className="bg-green-800 p-6 rounded-lg">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold mb-3">革新</h3>
            <p className="text-green-100">
              新しいアイデアを歓迎し、
              創造的な解決策を見つけます。
            </p>
          </div>
          
          <div className="bg-green-800 p-6 rounded-lg">
            <div className="text-3xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold mb-3">成長</h3>
            <p className="text-green-100">
              個人とチームの成長を
              継続的に追求しています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;