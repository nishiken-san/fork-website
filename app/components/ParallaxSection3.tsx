'use client';

const ParallaxSection3 = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* パララックス背景画像 */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/parallax/parallax-bg-3.jpg')`,
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

    </section>
  );
};

export default ParallaxSection3;