import React, { useState, useEffect, useRef } from 'react';
import { Heart, Cloud, Wind, Sparkles, Flame, ArrowLeft, Zap, Trophy, Palette, Shirt, Cake } from 'lucide-react';

/**
 * Arshi's Safe Space v6 - "The Creative Studio Edition"
 * New Feature: Creative Studio (Cake Design, Fashion & Makeup)
 * Theme: Soft Brutalism / Digital Scrapbook
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);

  // Custom Cursor Logic
  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timer);
    };
  }, []);

  // Smooth scroll reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  if (loading) return <LoadingScreen />;

  return (
    <div className="relative min-h-screen bg-[#FDF6F6] text-[#2a2a2a] overflow-x-hidden font-sans cursor-none selection:bg-pink-300 selection:text-white">
      
      {/* --- Global Noise Texture --- */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.06] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- Custom Cursor (Desktop) --- */}
      <div 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] border-pink-600 pointer-events-none z-[100] transition-transform duration-300 ease-out hidden md:flex items-center justify-center mix-blend-difference"
        style={{ 
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px) scale(${isHovering ? 3 : 1})`,
          backgroundColor: isHovering ? 'white' : 'transparent',
          borderColor: isHovering ? 'transparent' : '#db2777'
        }}
      >
        <div className={`w-1 h-1 bg-pink-600 rounded-full transition-all duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'}`} />
      </div>

      {/* --- Main Content --- */}
      <main className="relative z-10 min-h-screen flex flex-col">
        {activeTab === 'home' ? (
          <HomeView setActiveTab={setActiveTab} setHover={setIsHovering} />
        ) : (
          <FeatureView activeTab={activeTab} setActiveTab={setActiveTab} setHover={setIsHovering} />
        )}
      </main>
    </div>
  );
};

// --- Views ---

const LoadingScreen = () => (
  <div className="fixed inset-0 bg-[#FDF6F6] z-[200] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center opacity-10">
       <span className="font-serif text-[20vw] animate-pulse">ARSHI</span>
    </div>
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-24 h-24 border-t-4 border-r-4 border-pink-500 rounded-full animate-spin mb-8" />
      <h2 className="font-serif text-3xl md:text-4xl text-slate-800 tracking-tighter">
        Designing Peace...
      </h2>
      <p className="font-mono text-xs text-slate-400 mt-4 uppercase tracking-[0.2em] animate-pulse">
        For My Shaitaan
      </p>
    </div>
  </div>
);

const HomeView = ({ setActiveTab, setHover }) => {
  return (
    <div className="w-full min-h-screen flex flex-col relative overflow-hidden">
      
      {/* Background Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full -rotate-[15deg] opacity-5 pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee font-serif text-[15vw] leading-none text-pink-900">
          ARSHI • PEACE • LOVE • CALM • BREATHE • SMILE • 
        </div>
        <div className="whitespace-nowrap animate-marquee-reverse font-serif text-[15vw] leading-none text-pink-900">
           NO WORRIES • JUST LOVE • KUSHAL • ARSHI • FOREVER •
        </div>
      </div>

      {/* Header */}
      <header className="px-6 py-8 md:px-12 flex justify-between items-end relative z-20">
        <div>
          <p className="font-mono text-xs md:text-sm text-pink-600 tracking-widest uppercase mb-2">The Digital Sanctuary</p>
          <h1 className="font-serif text-5xl md:text-8xl text-slate-900 leading-[0.9] tracking-tight">
            For <span className="italic font-light text-pink-500 relative inline-block">
              Arshi
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-pink-300" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
        </div>
        <div className="hidden md:block text-right">
          <p className="font-mono text-xs text-slate-400">EST. 2024</p>
          <p className="font-mono text-xs text-slate-400">LOVING THE SHAITAAN</p>
        </div>
      </header>

      {/* Scattered Navigation */}
      <div className="flex-1 relative w-full max-w-7xl mx-auto mt-8 md:mt-0 p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 h-full items-center">
          
          {/* Item 1: Breathe (5 cols) */}
          <div className="lg:col-span-5 flex justify-center md:justify-start">
             <MenuItem 
                title="Breathe" 
                subtitle="Deep Focus" 
                icon={<Wind size={36} />} 
                color="bg-[#E0F2FE]" // Light Sky
                rotate="-rotate-3"
                onClick={() => setActiveTab('breathe')}
                setHover={setHover}
             />
          </div>

          {/* Item 2: Volcano (3 cols) */}
          <div className="lg:col-span-3 flex justify-center md:pt-24">
             <MenuItem 
                title="Tame Anger" 
                subtitle="Calm the Fire" 
                icon={<Flame size={36} />} 
                color="bg-[#FFEDD5]" // Light Orange
                rotate="rotate-6"
                onClick={() => setActiveTab('volcano')}
                setHover={setHover}
             />
          </div>

          {/* Item 3: Vent (4 cols) */}
          <div className="lg:col-span-4 flex justify-center md:justify-end">
             <MenuItem 
                title="Let Go" 
                subtitle="Release Thoughts" 
                icon={<Cloud size={36} />} 
                color="bg-[#F3E8FF]" // Light Purple
                rotate="-rotate-2"
                onClick={() => setActiveTab('vent')}
                setHover={setHover}
             />
          </div>

          {/* Item 4: Creative Studio (New - 6 cols) */}
          <div className="lg:col-span-6 flex justify-center md:justify-end md:pr-12">
             <MenuItem 
                title="Aesthetic Studio" 
                subtitle="Cake • Style • Makeup" 
                icon={<Palette size={36} />} 
                color="bg-[#FDF2F8]" // Light Pink
                rotate="rotate-3"
                onClick={() => setActiveTab('studio')}
                setHover={setHover}
             />
          </div>

          {/* Item 5: Love Catcher (6 cols) */}
          <div className="lg:col-span-6 flex justify-center md:justify-start md:pl-12">
             <MenuItem 
                title="Love Catcher" 
                subtitle="Arcade Mode" 
                icon={<Heart size={36} />} 
                color="bg-[#FFE4E6]" // Light Rose
                rotate="-rotate-6"
                onClick={() => setActiveTab('game')}
                setHover={setHover}
             />
          </div>
          
           {/* Item 6: Bubble Pop (12 cols - Centered) */}
           <div className="lg:col-span-12 flex justify-center pt-8">
             <MenuItem 
                title="Bubble Pop" 
                subtitle="Stress Relief" 
                icon={<Zap size={36} />} 
                color="bg-[#DCFCE7]" // Light Green
                rotate="rotate-1"
                onClick={() => setActiveTab('popper')}
                setHover={setHover}
             />
          </div>

        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ title, subtitle, icon, color, rotate, onClick, setHover }) => (
  <button 
    onClick={onClick}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    className={`group relative w-full max-w-[260px] aspect-[4/5] ${rotate} transition-all duration-500 hover:z-30 hover:scale-105 hover:rotate-0 focus:outline-none`}
  >
    {/* Realistic Tape */}
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/30 backdrop-blur-[2px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] rotate-[-2deg] z-20 border-l border-r border-white/20"></div>
    
    {/* Card Body */}
    <div className={`absolute inset-0 ${color} rounded-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] p-4 flex flex-col justify-between border-[12px] border-white transition-colors duration-300`}>
      <div className="w-full h-3/5 bg-white/40 rounded-sm flex items-center justify-center text-slate-800/60 group-hover:text-slate-800 transition-colors border border-white/50">
        <div className="transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <div className="text-left pt-3">
        <h3 className="font-serif text-2xl md:text-3xl text-slate-900 leading-[0.9] mb-2">{title}</h3>
        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 border-t border-slate-300/50 pt-2">{subtitle}</p>
      </div>
      
      {/* Action Button Visual */}
      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
        <ArrowLeft className="rotate-180 w-3 h-3" />
      </div>
    </div>
  </button>
);

const FeatureView = ({ activeTab, setActiveTab, setHover }) => {
  return (
    <div className="fixed inset-0 bg-[#FDF6F6] z-40 flex flex-col animate-fade-in-up overflow-auto">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <button 
          onClick={() => setActiveTab('home')}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="pointer-events-auto flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl border border-slate-200 rounded-full shadow-xl hover:scale-105 transition-all group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif font-bold text-slate-800">Home</span>
        </button>
      </div>

      <div className="flex-1 w-full min-h-screen">
        {activeTab === 'breathe' && <BreathingExercise />}
        {activeTab === 'vent' && <WorryVent />}
        {activeTab === 'volcano' && <VolcanoTamer />}
        {activeTab === 'popper' && <ThoughtPopper />}
        {activeTab === 'game' && <AdvancedLoveCatcher />}
        {activeTab === 'studio' && <CreativeStudio />}
      </div>
    </div>
  );
};

// --- CREATIVE STUDIO (NEW) ---

const CreativeStudio = () => {
  const [mode, setMode] = useState('menu'); // menu, cake, style

  if (mode === 'menu') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <h2 className="font-serif text-5xl text-slate-800 mb-12">The Aesthetic Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
           <button 
             onClick={() => setMode('cake')}
             className="group bg-[#FFF5F5] p-8 rounded-3xl border-2 border-white shadow-xl hover:scale-105 transition-all text-left"
           >
             <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
               <Cake size={32} className="text-pink-600" />
             </div>
             <h3 className="font-serif text-3xl text-slate-800 mb-2">The Patisserie</h3>
             <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Design Dream Cakes</p>
           </button>

           <button 
             onClick={() => setMode('style')}
             className="group bg-[#F0FDF4] p-8 rounded-3xl border-2 border-white shadow-xl hover:scale-105 transition-all text-left"
           >
             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
               <Shirt size={32} className="text-green-600" />
             </div>
             <h3 className="font-serif text-3xl text-slate-800 mb-2">The Atelier</h3>
             <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Fashion & Makeup</p>
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col pt-20 px-4 items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
         <h2 className="font-serif text-3xl text-slate-800">
           {mode === 'cake' ? 'The Patisserie' : 'The Atelier'}
         </h2>
         <button onClick={() => setMode('menu')} className="text-sm font-mono underline text-slate-400 hover:text-slate-800">
           EXIT STUDIO
         </button>
      </div>
      
      {mode === 'cake' ? <CakeDesigner /> : <StyleDesigner />}
    </div>
  );
};

const CakeDesigner = () => {
  const [tier1Color, setTier1Color] = useState('bg-pink-200');
  const [tier2Color, setTier2Color] = useState('bg-white');
  const [tier3Color, setTier3Color] = useState('bg-pink-300');
  const [toppings, setToppings] = useState([]);
  
  const colors = [
    { name: 'Vanilla', val: 'bg-[#FFFBEB]' },
    { name: 'Strawberry', val: 'bg-[#FBCFE8]' },
    { name: 'Matcha', val: 'bg-[#D1FAE5]' },
    { name: 'Lavender', val: 'bg-[#E9D5FF]' },
    { name: 'Chocolate', val: 'bg-[#78350F]' },
    { name: 'Blueberry', val: 'bg-[#BFDBFE]' },
  ];

  const decorations = ['🍓', '🍫', '🌸', '🍒', '🍪', '✨', '🍋', '🫐', '🎀'];

  const addTopping = (emoji) => {
    // Random position within a range slightly randomized
    const newItem = {
      id: Date.now(),
      emoji,
      left: Math.random() * 80 + 10, // 10% to 90%
      top: Math.random() * 80 + 10,
      rotation: Math.random() * 360
    };
    setToppings([...toppings, newItem]);
  };

  const clearToppings = () => setToppings([]);

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
       {/* Preview Area */}
       <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-pink-50 min-h-[500px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          
          <div className="flex flex-col items-center justify-end relative z-10">
             
             {/* Cake Stand */}
             <div className="w-64 h-4 bg-slate-200 rounded-full mt-2 shadow-lg relative top-[100%]"></div>
             <div className="w-24 h-12 bg-slate-300 rounded-b-lg mb-2"></div>

             {/* Tier 1 (Bottom) */}
             <div className={`w-64 h-24 ${tier1Color} rounded-xl shadow-inner border-2 border-white/20 relative transition-colors duration-500`}>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 0).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" 
                           style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>
                        {t.emoji}
                      </div>
                   ))}
                </div>
             </div>

             {/* Tier 2 (Middle) */}
             <div className={`w-48 h-24 ${tier2Color} rounded-xl shadow-md border-2 border-white/20 relative -mb-2 z-20 transition-colors duration-500`}>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 1).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" 
                           style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>
                        {t.emoji}
                      </div>
                   ))}
                </div>
             </div>

             {/* Tier 3 (Top) */}
             <div className={`w-32 h-24 ${tier3Color} rounded-xl shadow-lg border-2 border-white/20 relative -mb-2 z-30 transition-colors duration-500`}>
                 <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 2).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" 
                           style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>
                        {t.emoji}
                      </div>
                   ))}
                </div>
             </div>

             {/* Topper */}
             <div className="mb-2 z-40 animate-bounce-slow">
               <span className="text-4xl">👑</span>
             </div>
          </div>
       </div>

       {/* Controls */}
       <div className="space-y-8">
          
          {/* Colors */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-slate-800">Frosting Palette</h3>
            <div className="flex gap-2 flex-wrap">
               {colors.map(c => (
                 <button 
                   key={c.name}
                   onClick={() => { setTier3Color(c.val); setTimeout(() => setTier2Color(c.val), 100); setTimeout(() => setTier1Color(c.val), 200); }}
                   className={`w-10 h-10 rounded-full ${c.val} border-2 border-slate-200 shadow-sm hover:scale-110 transition-transform`}
                   title={c.name}
                 />
               ))}
               <button 
                  onClick={() => { setTier1Color('bg-pink-200'); setTier2Color('bg-white'); setTier3Color('bg-pink-300'); }} 
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-300 to-blue-200 border-2 border-slate-200 shadow-sm hover:scale-110"
                  title="Ombre"
               />
            </div>
            <div className="flex gap-2 mt-2">
               <p className="text-xs font-mono text-slate-400">TIP: CLICK PALETTE TO CHANGE ALL TIERS</p>
            </div>
          </div>

          {/* Toppings */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
               <h3 className="font-serif text-xl text-slate-800">Decorations</h3>
               <button onClick={clearToppings} className="text-xs text-red-400 font-mono underline">CLEAR ALL</button>
            </div>
            <div className="grid grid-cols-5 gap-4">
               {decorations.map(d => (
                 <button 
                   key={d}
                   onClick={() => addTopping(d)}
                   className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all"
                 >
                   {d}
                 </button>
               ))}
            </div>
             <p className="text-xs font-mono text-slate-400">TAP TO ADD TO LAYERS RANDOMLY</p>
          </div>
       </div>
    </div>
  );
};

const StyleDesigner = () => {
  const [dressColor, setDressColor] = useState('bg-pink-400');
  const [dressStyle, setDressStyle] = useState('A-Line');
  const [lipstick, setLipstick] = useState('bg-rose-400');
  const [blush, setBlush] = useState('bg-pink-200');
  const [eyeShadow, setEyeShadow] = useState('bg-transparent');

  const dressColors = ['bg-pink-400', 'bg-red-500', 'bg-blue-400', 'bg-purple-500', 'bg-black', 'bg-emerald-500', 'bg-white border border-slate-200'];
  const lipstickShades = ['bg-red-600', 'bg-pink-500', 'bg-rose-900', 'bg-orange-400', 'bg-purple-700'];
  
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      
      {/* Model Preview */}
      <div className="bg-[#FFFBFB] rounded-3xl p-8 shadow-2xl border-4 border-pink-50 min-h-[600px] flex items-center justify-center relative">
         
         {/* Simple SVG Avatar Base */}
         <div className="relative w-64 h-[500px] flex flex-col items-center">
            
            {/* Head */}
            <div className="w-24 h-28 bg-[#FFE4C4] rounded-[3rem] relative z-20 shadow-sm flex flex-col items-center justify-center">
               {/* Eyes */}
               <div className="flex gap-4 mb-2">
                 <div className={`w-3 h-1.5 bg-slate-800 rounded-full relative`}>
                    <div className={`absolute -top-3 left-0 w-full h-3 rounded-t-full opacity-50 ${eyeShadow}`}></div>
                 </div>
                 <div className={`w-3 h-1.5 bg-slate-800 rounded-full relative`}>
                    <div className={`absolute -top-3 left-0 w-full h-3 rounded-t-full opacity-50 ${eyeShadow}`}></div>
                 </div>
               </div>
               
               {/* Blush */}
               <div className="flex gap-8 absolute top-14 w-full justify-center px-1">
                 <div className={`w-4 h-2 rounded-full blur-sm opacity-60 ${blush}`}></div>
                 <div className={`w-4 h-2 rounded-full blur-sm opacity-60 ${blush}`}></div>
               </div>

               {/* Lips */}
               <div className={`w-6 h-3 rounded-full mt-2 ${lipstick} shadow-sm transition-colors`}></div>
            </div>

            {/* Neck */}
            <div className="w-8 h-8 bg-[#FFE4C4] -mt-2 z-10"></div>

            {/* Dress Body */}
            <div className={`
               transition-all duration-500 relative z-10
               ${dressStyle === 'A-Line' ? `w-32 h-64 rounded-t-3xl rounded-b-[4rem] ${dressColor}` : ''}
               ${dressStyle === 'Ballgown' ? `w-48 h-64 rounded-t-2xl rounded-b-full ${dressColor}` : ''}
               ${dressStyle === 'Mermaid' ? `w-24 h-64 rounded-t-3xl rounded-b-lg ${dressColor}` : ''}
            `}>
                {/* Decoration Details */}
                <div className="absolute top-0 w-full h-full opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_2px,_transparent_3px)] bg-[length:20px_20px]"></div>
                
                {/* Sleeves (Pseudo) */}
                <div className={`absolute -left-8 top-0 w-8 h-20 rounded-full ${dressColor} rotate-12 origin-top-right`}></div>
                <div className={`absolute -right-8 top-0 w-8 h-20 rounded-full ${dressColor} -rotate-12 origin-top-left`}></div>
            </div>

            {/* Legs/Shoes */}
            <div className="flex gap-4 -mt-4">
               <div className="w-4 h-24 bg-[#FFE4C4]"></div>
               <div className="w-4 h-24 bg-[#FFE4C4]"></div>
            </div>
            <div className="flex gap-8 -mt-2">
              <div className="w-8 h-4 bg-slate-800 rounded-full"></div>
              <div className="w-8 h-4 bg-slate-800 rounded-full"></div>
            </div>
         </div>
      </div>

      {/* Controls */}
      <div className="space-y-10">
         
         {/* Dress Style */}
         <div>
           <h3 className="font-serif text-xl text-slate-800 mb-4">Silhouette</h3>
           <div className="flex gap-4">
             {['A-Line', 'Ballgown', 'Mermaid'].map(s => (
               <button 
                 key={s}
                 onClick={() => setDressStyle(s)}
                 className={`px-4 py-2 border rounded-full font-mono text-xs uppercase ${dressStyle === s ? 'bg-slate-800 text-white' : 'bg-white text-slate-500'}`}
               >
                 {s}
               </button>
             ))}
           </div>
         </div>

         {/* Dress Color */}
         <div>
           <h3 className="font-serif text-xl text-slate-800 mb-4">Fabric Color</h3>
           <div className="flex gap-3 flex-wrap">
              {dressColors.map(c => (
                <button 
                  key={c}
                  onClick={() => setDressColor(c)}
                  className={`w-8 h-8 rounded-full shadow-sm ${c} border-2 ${dressColor === c ? 'border-slate-800 scale-110' : 'border-transparent'}`}
                />
              ))}
           </div>
         </div>

         {/* Makeup */}
         <div className="p-6 bg-white rounded-3xl border border-slate-100">
            <h3 className="font-serif text-xl text-slate-800 mb-6 flex items-center gap-2"><Sparkles size={18} className="text-pink-400" /> Makeup Studio</h3>
            
            <div className="space-y-4">
               {/* Lipstick */}
               <div className="flex items-center gap-4">
                 <span className="font-mono text-xs w-16 text-slate-400">LIPS</span>
                 <div className="flex gap-2">
                   {lipstickShades.map(c => (
                     <button key={c} onClick={() => setLipstick(c)} className={`w-6 h-6 rounded-full ${c} border border-slate-100`} />
                   ))}
                 </div>
               </div>

               {/* Blush */}
               <div className="flex items-center gap-4">
                 <span className="font-mono text-xs w-16 text-slate-400">BLUSH</span>
                 <button onClick={() => setBlush('bg-pink-200')} className="w-6 h-6 rounded-full bg-pink-200 border border-slate-100" />
                 <button onClick={() => setBlush('bg-rose-300')} className="w-6 h-6 rounded-full bg-rose-300 border border-slate-100" />
                 <button onClick={() => setBlush('bg-orange-200')} className="w-6 h-6 rounded-full bg-orange-200 border border-slate-100" />
               </div>

                {/* Eyes */}
               <div className="flex items-center gap-4">
                 <span className="font-mono text-xs w-16 text-slate-400">EYES</span>
                 <button onClick={() => setEyeShadow('bg-blue-300')} className="w-6 h-6 rounded-full bg-blue-300 border border-slate-100" />
                 <button onClick={() => setEyeShadow('bg-purple-300')} className="w-6 h-6 rounded-full bg-purple-300 border border-slate-100" />
                 <button onClick={() => setEyeShadow('bg-transparent')} className="w-auto px-2 h-6 rounded-full bg-slate-100 text-[10px] flex items-center">NONE</button>
               </div>
            </div>
         </div>

      </div>
    </div>
  );
};

// --- REDESIGNED GAMES ---

const AdvancedLoveCatcher = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start'); // start, playing, gameover
  const [combo, setCombo] = useState(0);

  useEffect(() => {
    if (gameState !== 'playing') return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    // Game Variables
    let player = { x: width / 2, y: height - 100, width: 60, height: 60, targetX: width / 2 };
    let items = [];
    let particles = [];
    let texts = [];
    let frame = 0;
    let gameScore = 0;
    let gameCombo = 0;
    let difficulty = 1;

    // Listeners
    const handleMove = (x) => {
      player.targetX = Math.max(player.width/2, Math.min(width - player.width/2, x));
    };
    
    const mouseMove = (e) => handleMove(e.clientX);
    const touchMove = (e) => handleMove(e.touches[0].clientX);
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('touchmove', touchMove);
    
    // Loop
    const loop = () => {
      if (gameState !== 'playing') return;
      ctx.fillStyle = '#FDF6F6';
      ctx.fillRect(0, 0, width, height);
      
      // Update Player (Lerp for smooth movement)
      player.x += (player.targetX - player.x) * 0.15;
      
      // Draw Player (Teddy Bear)
      ctx.font = '50px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🧸', player.x, player.y);
      
      // Player Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.beginPath();
      ctx.ellipse(player.x, player.y + 35, 25, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      // Spawn Items
      if (frame % Math.max(20, 60 - difficulty * 2) === 0) {
        items.push({
          x: Math.random() * (width - 40) + 20,
          y: -50,
          type: Math.random() > 0.2 ? 'heart' : 'storm',
          speed: Math.random() * 3 + 2 + difficulty,
          angle: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.1
        });
      }
      
      // Increase difficulty
      if (frame % 600 === 0) difficulty += 0.5;

      // Update Items
      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        item.y += item.speed;
        item.angle += item.rotationSpeed;
        
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.angle);
        ctx.font = '30px serif';
        ctx.fillText(item.type === 'heart' ? '💖' : '⛈️', 0, 0);
        ctx.restore();

        // Collision
        const dist = Math.hypot(player.x - item.x, player.y - item.y);
        if (dist < 50) {
           if (item.type === 'heart') {
             // Catch Heart
             gameScore += 10 + (gameCombo * 2);
             gameCombo++;
             setScore(gameScore);
             setCombo(gameCombo);
             
             // Spawn Particles
             for(let p=0; p<8; p++) {
               particles.push({
                 x: item.x, y: item.y,
                 vx: (Math.random() - 0.5) * 10,
                 vy: (Math.random() - 0.5) * 10,
                 life: 1,
                 color: `hsl(${330 + Math.random()*30}, 100%, 70%)`
               });
             }
             
             // Spawn Text
             if (gameCombo % 5 === 0) {
               texts.push({
                 x: player.x, y: player.y - 50,
                 text: ['Amazing!', 'Perfect!', 'Wow!', 'Love!'][Math.floor(Math.random()*4)],
                 life: 1,
                 yOffset: 0
               });
             }
             
           } else {
             // Hit Storm
             setGameState('gameover');
             return; // Stop loop
           }
           items.splice(i, 1);
        } else if (item.y > height + 50) {
           items.splice(i, 1);
           if (item.type === 'heart') {
             gameCombo = 0; // Break combo
             setCombo(0);
           }
        }
      }

      // Update Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        p.vy += 0.2; // Gravity
        
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.life;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4 * p.life, 0, Math.PI*2);
        ctx.fill();
        ctx.globalAlpha = 1;
        
        if (p.life <= 0) particles.splice(i, 1);
      }
      
      // Update Texts
      for (let i = texts.length - 1; i >= 0; i--) {
        const t = texts[i];
        t.yOffset += 2;
        t.life -= 0.02;
        
        ctx.font = 'bold 24px sans-serif';
        ctx.fillStyle = `rgba(219, 39, 119, ${t.life})`;
        ctx.fillText(t.text, t.x, t.y - t.yOffset);
        
        if (t.life <= 0) texts.splice(i, 1);
      }

      frame++;
      requestAnimationFrame(loop);
    };
    
    const anim = requestAnimationFrame(loop);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('touchmove', touchMove);
      cancelAnimationFrame(anim);
    };
  }, [gameState]);

  return (
    <div className="w-full h-full relative bg-[#FDF6F6]">
       {gameState === 'start' && (
         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white/50 backdrop-blur-sm animate-fade-in">
            <h2 className="font-serif text-6xl text-slate-800 mb-4 tracking-tighter">Love Catcher</h2>
            <p className="font-mono text-slate-500 mb-8 tracking-widest uppercase">Collect Hearts • Avoid Clouds • Build Combos</p>
            <button 
              onClick={() => { setGameState('playing'); setScore(0); setCombo(0); }}
              className="px-12 py-4 bg-pink-500 text-white rounded-full font-bold text-xl hover:bg-pink-600 transition-all shadow-lg hover:scale-105"
            >
              Start Game
            </button>
         </div>
       )}

       {gameState === 'gameover' && (
         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white/80 backdrop-blur-md animate-fade-in-up">
            <Trophy className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
            <h2 className="font-serif text-5xl text-slate-800 mb-2">Game Over!</h2>
            <p className="text-2xl text-pink-600 font-bold mb-8">Score: {score}</p>
            <p className="font-mono text-slate-400 mb-8 max-w-md text-center">
              "Even if storm clouds come, Kushal's love collects in the background."
            </p>
            <button 
              onClick={() => { setGameState('playing'); setScore(0); setCombo(0); }}
              className="px-8 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-all"
            >
              Try Again
            </button>
         </div>
       )}

       {gameState === 'playing' && (
         <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
            <div className="font-serif text-5xl text-slate-200 font-bold drop-shadow-sm">{score}</div>
            {combo > 2 && (
              <div className="text-pink-500 font-bold animate-pulse mt-2">
                COMBO x{combo}
              </div>
            )}
         </div>
       )}
       
       <canvas ref={canvasRef} className="block w-full h-full touch-none" />
    </div>
  );
};

const ThoughtPopper = () => {
  const [bubbles, setBubbles] = useState([]);
  
  useEffect(() => {
    // Generate bubbles
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      text: ['Overthinking', 'Stress', 'Anger', 'Worry', 'Doubts'][Math.floor(Math.random() * 5)],
      affirmation: ['I am loved', 'I am enough', 'Breathe', 'Peace', 'Joy', 'Kushal ❤️'][Math.floor(Math.random() * 6)],
      popped: false
    }));
    setBubbles(newBubbles);
  }, []);

  const popBubble = (id) => {
    setBubbles(prev => prev.map(b => b.id === id ? { ...b, popped: true } : b));
    
    // Add haptic vibration if supported
    if (navigator.vibrate) navigator.vibrate(50);
  };

  const reset = () => {
     const newBubbles = bubbles.map(b => ({...b, popped: false, id: Math.random()})); // Reset with new IDs to re-trigger anims
     setBubbles(newBubbles);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <div className="text-center mb-10">
        <h2 className="font-serif text-5xl text-slate-800 mb-2">Thought Popper</h2>
        <p className="font-mono text-slate-400 uppercase tracking-widest">
          POP THE NEGATIVITY. FIND THE LOVE.
        </p>
      </div>

      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 max-w-2xl">
        {bubbles.map((b) => (
          <button
            key={b.id}
            onClick={() => popBubble(b.id)}
            disabled={b.popped}
            className={`
              relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300
              ${b.popped ? 'scale-90 bg-transparent' : 'scale-100 bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner hover:scale-105 active:scale-95 cursor-pointer'}
            `}
          >
            {/* Unpopped State */}
            {!b.popped && (
              <div className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center p-2 text-center">
                 <span className="text-[10px] md:text-xs text-slate-400 font-mono uppercase leading-tight select-none">
                   {b.text}
                 </span>
                 {/* Shine */}
                 <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full blur-[2px]" />
              </div>
            )}

            {/* Popped State */}
            {b.popped && (
              <div className="animate-pop-in text-pink-500 font-bold text-xs md:text-sm text-center font-serif leading-tight">
                {b.affirmation}
              </div>
            )}
          </button>
        ))}
      </div>

      <button 
        onClick={reset} 
        className="mt-12 px-8 py-3 border border-slate-300 rounded-full text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-mono uppercase tracking-widest text-xs"
      >
        Reset Bubbles
      </button>

      <style>{`
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.5); }
          50% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-pop-in {
          animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>
    </div>
  );
};

// --- Standard Features (Refined) ---

const BreathingExercise = () => {
  const [phase, setPhase] = useState('Inhale');
  
  useEffect(() => {
    const cycle = async () => {
      setPhase('Inhale'); await new Promise(r => setTimeout(r, 4000));
      setPhase('Hold'); await new Promise(r => setTimeout(r, 4000));
      setPhase('Exhale'); await new Promise(r => setTimeout(r, 4000));
    };
    const interval = setInterval(cycle, 12000);
    cycle();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {[0, 1, 2].map(i => (
           <div 
             key={i}
             className={`absolute border border-slate-800/10 rounded-full transition-all duration-[4000ms] ease-in-out`}
             style={{
               width: phase === 'Inhale' ? `${100 + i*40}%` : phase === 'Hold' ? `${100 + i*40}%` : '50%',
               height: phase === 'Inhale' ? `${100 + i*40}%` : phase === 'Hold' ? `${100 + i*40}%` : '50%',
               opacity: phase === 'Inhale' ? 1 - i*0.3 : 0
             }}
           />
        ))}
        
        <div className={`
          relative z-10 w-48 h-48 rounded-full bg-gradient-to-b from-blue-50 to-white shadow-xl flex items-center justify-center
          transition-all duration-[4000ms] ease-in-out
          ${phase === 'Inhale' ? 'scale-110' : phase === 'Hold' ? 'scale-110' : 'scale-90'}
        `}>
           <span className="font-serif text-3xl text-slate-800 tracking-widest">{phase}</span>
        </div>
      </div>
    </div>
  );
};

const VolcanoTamer = () => {
  const [anger, setAnger] = useState(100);
  const [isCooled, setIsCooled] = useState(false);

  const tap = () => {
    if (anger > 0) setAnger(p => p - 8);
    else setIsCooled(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
       <h2 className="font-serif text-4xl mb-2">The Volcano</h2>
       <p className="font-mono text-xs text-slate-400 mb-8 uppercase tracking-widest">Tap the fire to cool it down</p>
       
       <button 
         onClick={tap}
         className={`
           relative w-64 h-64 rounded-full flex items-center justify-center text-8xl shadow-2xl transition-all duration-200
           ${isCooled ? 'bg-white border-4 border-emerald-200' : 'bg-gradient-to-t from-red-500 to-orange-400 active:scale-95'}
         `}
       >
         {isCooled ? '🏔️' : '🌋'}
         {!isCooled && (
           <div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20 pointer-events-none" />
         )}
       </button>
       
       <div className="w-64 h-1 bg-slate-100 mt-12 rounded-full overflow-hidden">
         <div className="h-full bg-slate-800 transition-all duration-300" style={{ width: `${anger}%` }} />
       </div>
       
       {isCooled && (
         <button onClick={() => { setAnger(100); setIsCooled(false); }} className="mt-8 text-sm underline text-slate-400">
           Restart Volcano
         </button>
       )}
    </div>
  );
};

const WorryVent = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const send = (e) => {
    e.preventDefault();
    if(!text) return;
    const id = Date.now();
    setItems(p => [...p, { id, text }]);
    setText('');
    setTimeout(() => setItems(p => p.filter(i => i.id !== id)), 5000);
  };

  return (
    <div className="flex flex-col items-center h-full pt-20 relative overflow-hidden">
      <h2 className="font-serif text-4xl mb-8">Let It Go</h2>
      
      <form onSubmit={send} className="w-full max-w-md relative z-20">
        <input 
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Type a worry..."
          className="w-full bg-transparent border-b border-slate-300 py-4 text-center font-serif text-2xl outline-none focus:border-pink-400 transition-colors placeholder:text-slate-200"
        />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 hover:text-pink-400">
          <Wind />
        </button>
      </form>

      <div className="absolute inset-0 pointer-events-none z-10">
        {items.map(i => (
          <div 
             key={i.id}
             className="absolute bottom-0 bg-white shadow-lg px-6 py-3 rounded-full text-slate-500 font-serif italic text-sm animate-[floatUp_5s_ease-in_forwards]"
             style={{ left: `${Math.random()*80 + 10}%` }}
          >
            {i.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;