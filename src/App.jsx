import React from 'react';

export default function App() {
  return (
    <div className="bg-[#181310] text-[#eae5df] min-h-screen font-sans selection:bg-amber-900 selection:text-white">
      
      {/* Dynamic Floating Glass Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl bg-[#281e19]/60 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 flex items-center justify-between z-50 shadow-2xl">
        <div className="text-2xl font-black tracking-widest text-white">BRWW</div>
        
        <div className="hidden md:flex space-x-2 text-sm text-amber-100/70 font-medium">
          <a href="#" className="px-5 py-1.5 rounded-full bg-white/10 text-white font-semibold">Home</a>
          <a href="#menu" className="px-4 py-1.5 hover:text-white transition">Menu</a>
          <a href="#about" className="px-4 py-1.5 hover:text-white transition">About Us</a>
          <a href="#" className="px-4 py-1.5 hover:text-white transition">Reviews</a>
          <a href="#" className="px-4 py-1.5 hover:text-white transition">Promotions</a>
        </div>

        <div className="flex items-center space-x-3">
          {/* SVG User Icon */}
          <button className="p-2 text-amber-200/80 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
          {/* SVG Shopping Bag Icon */}
          <button className="p-2 text-amber-200/80 hover:text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button className="bg-[#f0e6d2] text-[#281e19] font-bold px-5 py-2 rounded-full text-xs hover:bg-white transition">
            Order Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-36 px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between overflow-hidden">
        <div className="max-w-md space-y-6 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Artisan Coffee Brewery • Est. 2010
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] text-amber-50">
            Discover the <br/>
            <span className="font-serif italic font-normal text-amber-200">Superior Taste</span> <br/>
            Every Sip!
          </h1>
          
          <p className="text-amber-200/60 text-xs leading-relaxed max-w-sm">
            For us, coffee is not just a drink — it's an art. We invite you on a unique culinary journey where every sip is a meeting with the perfect taste.
          </p>
          
          <button className="bg-[#5c3e2b] hover:bg-[#6e4b35] text-amber-100 text-xs font-semibold px-6 py-3 rounded-full transition shadow-lg">
            Explore Coffee
          </button>
        </div>

        {/* Hero Image Container */}
        <div className="relative mt-12 md:mt-0 flex items-center justify-center">
          <div className="w-80 h-[420px] bg-gradient-to-b from-amber-900/30 to-amber-950/80 rounded-3xl border border-white/10 p-4 flex flex-col justify-end relative shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80" 
              alt="Coffee Cup Splash" 
              className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80 mix-blend-luminosity"
            />
            <div className="relative z-10 bg-black/50 backdrop-blur-md p-4 rounded-2xl border border-white/10 text-center">
              <h3 className="font-black text-amber-100 text-2xl tracking-wider">BRWW</h3>
              <p className="text-[10px] uppercase text-amber-400 tracking-widest mt-1">Signature Double Brew</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="relative py-24 px-6 max-w-6xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
          <h2 className="text-[12rem] font-black text-amber-100 uppercase tracking-tighter">BRWW</h2>
        </div>

        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-amber-900/40 uppercase tracking-widest">
          Curated Coffee Selection
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {[
            { name: 'Cappuccino', rating: '4.9', price: '$4.50', desc: 'A timeless classic: 20% espresso, 40% velvety steamed milk, and 40% airy milk foam. Balanced and smooth.', img: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80' },
            { name: 'Latte', rating: '5.0', price: '$5.00', desc: 'Smooth and creamy: 30% espresso and 70% fresh, hot milk. Perfect for a creamy coffee treat.', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80' },
            { name: 'Mocha', rating: '4.7', price: '$5.00', desc: 'For the chocolate lover: 20% espresso, 50% hot milk, and 30% premium chocolate. Decadently sweet.', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80' }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#241c18]/80 border border-white/5 rounded-3xl p-5 flex flex-col justify-between hover:border-amber-500/30 transition duration-300 shadow-xl">
              <div className="h-52 rounded-2xl overflow-hidden relative mb-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-amber-300 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  {item.rating} ★
                </span>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-amber-50">{item.name}</h3>
                <p className="text-amber-200/50 text-xs mt-2 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex items-center justify-between mt-6">
                <span className="text-xl font-bold text-amber-100">{item.price}</span>
                <button className="w-9 h-9 rounded-full bg-[#5c3e2b] hover:bg-[#724d35] flex items-center justify-center text-white transition font-bold text-lg">
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold tracking-[0.3em] text-amber-200/80 uppercase mb-16">BRWW IS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <div className="space-y-10">
            <div>
              <h4 className="text-lg font-bold text-amber-100 flex items-center gap-3">
                <span className="text-amber-600 font-serif italic text-3xl">1</span> Premium Bean Quality
              </h4>
              <p className="text-xs text-amber-200/60 mt-2 leading-relaxed">Our passion for coffee begins with selecting the finest beans. We pay attention to every detail so that each cup delivers exceptional quality and pleasure.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-amber-100 flex items-center gap-3">
                <span className="text-amber-600 font-serif italic text-3xl">2</span> Atmosphere of Inspiration
              </h4>
              <p className="text-xs text-amber-200/60 mt-2 leading-relaxed">Our cozy space is filled with warmth and comfort. Here, surrounded by attentive service, you can relax, enjoy a cup of coffee, and be inspired.</p>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <h4 className="text-lg font-bold text-amber-100 flex items-center gap-3">
                <span className="text-amber-600 font-serif italic text-3xl">3</span> Personalised Approach to Every Guest
              </h4>
              <p className="text-xs text-amber-200/60 mt-2 leading-relaxed">We craft coffee that reflects your preferences, creating unique drinks especially for you. With us it's not just coffee — it's a personalised experience.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-amber-100 flex items-center gap-3">
                <span className="text-amber-600 font-serif italic text-3xl">4</span> Professional Barista Team
              </h4>
              <p className="text-xs text-amber-200/60 mt-2 leading-relaxed">Our baristas have extensive experience in brewing coffee and are ready to demonstrate all their exceptional talents in the art of coffee-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Banner */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-[#241c18] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-amber-50">Find out which coffee suits you best</h3>
            <p className="text-xs text-amber-200/50 mt-1">Take the short test to get tailored coffee recommendations.</p>
          </div>
          <button className="bg-[#f0e6d2] text-[#281e19] font-bold px-6 py-2.5 rounded-full text-xs hover:bg-white transition whitespace-nowrap">
            Take the test
          </button>
        </div>
      </section>

    </div>
  );
}