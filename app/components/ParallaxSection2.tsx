'use client';

const ParallaxSection2 = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-gray-800">
      {/* パララックス背景画像 */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/about/parallax-bg-2.jpg')`,
            backgroundPosition: 'center center',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      
    </section>
  );
};

export default ParallaxSection2;