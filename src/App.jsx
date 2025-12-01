import React, { useState, useEffect, useRef } from 'react';
import { Heart, Cloud, Wind, Sparkles, Flame, ArrowLeft, Zap, Trophy, Palette, Shirt, Cake, Sword, Droplets, Hand, Skull, BookOpen, Feather, Quote } from 'lucide-react';

/**
 * Arshi's Safe Space v11 - "The Novel Quotes Update"
 * New Feature: 'Quote Gallery' uses 11 quotes from the user's novel.
 */

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activeTab]);

  if (loading) return <LoadingScreen />;

  return (
    <div className={`relative min-h-screen ${activeTab === 'beat' ? 'bg-slate-900 text-slate-100' : 'bg-[#FDF6F6] text-[#2a2a2a]'} overflow-x-hidden font-sans cursor-none transition-colors duration-500`}>
      
      {/* --- Global Noise Texture --- */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.06] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- Custom Cursor (Desktop) --- */}
      <div 
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border-[1.5px] pointer-events-none z-[100] transition-transform duration-300 ease-out hidden md:flex items-center justify-center mix-blend-difference ${activeTab === 'beat' ? 'border-red-500' : 'border-pink-600'}`}
        style={{ 
          transform: `translate(${cursorPos.x - 16}px, ${cursorPos.y - 16}px) scale(${isHovering ? 3 : 1})`,
          backgroundColor: isHovering ? 'white' : 'transparent',
          borderColor: isHovering ? 'transparent' : (activeTab === 'beat' ? '#ef4444' : '#db2777')
        }}
      >
        <div className={`w-1 h-1 rounded-full transition-all duration-300 ${isHovering ? 'opacity-0' : 'opacity-100'} ${activeTab === 'beat' ? 'bg-red-500' : 'bg-pink-600'}`} />
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
      
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full -rotate-[15deg] opacity-5 pointer-events-none select-none">
        <div className="whitespace-nowrap animate-marquee font-serif text-[15vw] leading-none text-pink-900">
          ARSHI • PEACE • LOVE • CALM • BREATHE • SMILE • 
        </div>
        <div className="whitespace-nowrap animate-marquee-reverse font-serif text-[15vw] leading-none text-pink-900">
           NO WORRIES • JUST LOVE • KUSHAL • ARSHI • FOREVER •
        </div>
      </div>

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

      <div className="flex-1 relative w-full max-w-7xl mx-auto mt-8 md:mt-0 p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 h-full items-center">
          
          <div className="lg:col-span-5 flex justify-center md:justify-start">
             <MenuItem title="Breathe" subtitle="Deep Focus" icon={<Wind size={36} />} color="bg-[#E0F2FE]" rotate="-rotate-3" onClick={() => setActiveTab('breathe')} setHover={setHover} />
          </div>

          <div className="lg:col-span-3 flex justify-center md:pt-24">
             <MenuItem title="Tame Anger" subtitle="Calm the Fire" icon={<Flame size={36} />} color="bg-[#FFEDD5]" rotate="rotate-6" onClick={() => setActiveTab('volcano')} setHover={setHover} />
          </div>

          <div className="lg:col-span-4 flex justify-center md:justify-end">
             <MenuItem title="Let Go" subtitle="Release Thoughts" icon={<Cloud size={36} />} color="bg-[#F3E8FF]" rotate="-rotate-2" onClick={() => setActiveTab('vent')} setHover={setHover} />
          </div>

          <div className="lg:col-span-6 flex justify-center md:justify-end md:pr-12">
             <MenuItem title="Aesthetic Studio" subtitle="Cake • Style • Makeup" icon={<Palette size={36} />} color="bg-[#FDF2F8]" rotate="rotate-3" onClick={() => setActiveTab('studio')} setHover={setHover} />
          </div>

          <div className="lg:col-span-6 flex justify-center md:justify-start md:pl-12">
             <MenuItem title="Love Catcher" subtitle="Arcade Mode" icon={<Heart size={36} />} color="bg-[#FFE4E6]" rotate="-rotate-6" onClick={() => setActiveTab('game')} setHover={setHover} />
          </div>
          
           <div className="lg:col-span-4 flex justify-center pt-8">
             <MenuItem title="Bubble Pop" subtitle="Stress Relief" icon={<Zap size={36} />} color="bg-[#DCFCE7]" rotate="rotate-1" onClick={() => setActiveTab('popper')} setHover={setHover} />
          </div>

          {/* New Novel Item */}
          <div className="lg:col-span-4 flex justify-center pt-8">
             <MenuItem title="Our Story" subtitle="Read The Novel" icon={<BookOpen size={36} />} color="bg-[#F3F4F6]" rotate="rotate-2" onClick={() => setActiveTab('novel')} setHover={setHover} />
          </div>

          {/* Quote Gallery Item */}
          <div className="lg:col-span-4 flex justify-center pt-8">
             <MenuItem title="Vibes" subtitle="Quote Gallery" icon={<Quote size={36} />} color="bg-[#FFF1F2]" rotate="-rotate-3" onClick={() => setActiveTab('quotes')} setHover={setHover} />
          </div>

          {/* Beat Kushal Item (Full Width at bottom) */}
          <div className="lg:col-span-12 flex justify-center pt-8">
             <MenuItem 
                title="The Dark Room" 
                subtitle="Beat Kushal" 
                icon={<Skull size={36} className="text-white" />} 
                color="bg-slate-800 text-white" 
                rotate="-rotate-1"
                onClick={() => setActiveTab('beat')}
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
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-white/30 backdrop-blur-[2px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] rotate-[-2deg] z-20 border-l border-r border-white/20"></div>
    <div className={`absolute inset-0 ${color} rounded-sm shadow-[0_10px_30px_-10px_rgba(0,0,0,0.2)] p-4 flex flex-col justify-between border-[12px] border-white transition-colors duration-300`}>
      <div className={`w-full h-3/5 rounded-sm flex items-center justify-center transition-colors border border-white/50 ${color.includes('slate-800') ? 'bg-slate-700' : 'bg-white/40 text-slate-800/60 group-hover:text-slate-800'}`}>
        <div className="transform transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
          {icon}
        </div>
      </div>
      <div className="text-left pt-3">
        <h3 className={`font-serif text-2xl md:text-3xl leading-[0.9] mb-2 ${color.includes('slate-800') ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`font-mono text-[10px] uppercase tracking-widest border-t pt-2 ${color.includes('slate-800') ? 'text-slate-400 border-slate-600' : 'text-slate-500 border-slate-300/50'}`}>{subtitle}</p>
      </div>
    </div>
  </button>
);

const FeatureView = ({ activeTab, setActiveTab, setHover }) => {
  return (
    <div className={`fixed inset-0 z-40 flex flex-col animate-fade-in-up overflow-auto ${activeTab === 'beat' ? 'bg-slate-900' : 'bg-[#FDF6F6]'}`}>
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50 pointer-events-none">
        <button 
          onClick={() => setActiveTab('home')}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`pointer-events-auto flex items-center gap-3 px-6 py-3 backdrop-blur-xl border rounded-full shadow-xl hover:scale-105 transition-all group ${activeTab === 'beat' ? 'bg-slate-800/90 border-slate-700 text-white' : 'bg-white/90 border-slate-200 text-slate-800'}`}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-serif font-bold">Home</span>
        </button>
      </div>

      <div className="flex-1 w-full min-h-screen">
        {activeTab === 'breathe' && <BreathingExercise />}
        {activeTab === 'vent' && <WorryVent />}
        {activeTab === 'volcano' && <VolcanoTamer />}
        {activeTab === 'popper' && <ThoughtPopper />}
        {activeTab === 'game' && <AdvancedLoveCatcher />}
        {activeTab === 'studio' && <CreativeStudio />}
        {activeTab === 'beat' && <BeatKushal />}
        {activeTab === 'novel' && <NovelReader />}
        {activeTab === 'quotes' && <QuoteGallery />}
      </div>
    </div>
  );
};

// --- QUOTE GALLERY (UPDATED WITH NOVEL QUOTES) ---

const QuoteGallery = () => {
  const quotes = [
    { text: "For my gusse wali buddhu, who holds my heart!", desc: "Dedication" },
    { text: "My favorite person, but also the only one I desire.", desc: "Truth" },
    { text: "I will love you until my hair turns grey.", desc: "Promise" },
    { text: "Not just Arshi... my Gandhi Bachii.", desc: "Nicknames" },
    { text: "Like a storm that is both terrifying and beautiful.", desc: "The Shaitaan" },
    { text: "You are stronger than your overthinking.", desc: "Reminder" },
    { text: "More beautiful than you know.", desc: "Fact" },
    { text: "Like a river flows, sometimes quiet, sometimes overwhelming.", desc: "Her" },
    { text: "Her warm laughter, her gentle spirit.", desc: "Essence" },
    { text: "Where gestures speak louder than words.", desc: "Us" },
    { text: "I am so obsessed.", desc: "Kushal" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-12 flex flex-col items-center">
      <h2 className="font-serif text-5xl text-slate-800 mb-2 text-center">Echoes of Us</h2>
      <p className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-16 text-center">
        WORDS FROM THE HEART
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {quotes.map((q, i) => (
          <div 
            key={i}
            className="group relative aspect-[3/4] bg-white rounded-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 flex flex-col justify-between p-8 border-[12px] border-white overflow-hidden"
          >
            {/* Background Texture */}
            <div className={`absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/paper.png')]`}></div>
            
            {/* Color Flash on Hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

            <div className="relative z-10 flex justify-end">
              <span className="font-mono text-xs text-slate-300">0{i + 1}</span>
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-3xl md:text-4xl text-slate-800 leading-tight">
                "{q.text}"
              </h3>
            </div>

            <div className="relative z-10 border-t border-slate-100 pt-4 flex justify-between items-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-pink-500 transition-colors">
                {q.desc}
              </span>
              <Heart size={16} className="text-slate-200 group-hover:text-pink-400 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- NOVEL READER ---

const NovelReader = () => {
  const [chapter, setChapter] = useState(0);
  
  const chapters = [
    {
      title: "Dedication",
      content: [
        "This Book is for my beloved Wife or Owner. My Girlfriend, Life, world, emotions, mood, happiness, and everything.",
        "I just want to state that you are not just my favorite person but also the only one I desire in life.",
        "For my gusse wali buddhu, who holds my heart!",
        "I LOVE YOUU!! <3"
      ]
    },
    {
      title: "Prologue",
      content: [
        "I really adore her a lot. I care for her and want to spend my life with her, loving her until my hair turns grey, until death separates us.",
        "I want to live my life by loving her every single moment, every single day.",
        "God knows I can write a whole song like those heavy metal guys for my made gf, I am so obsessed.",
        "She is the best and the BESTESTTT."
      ]
    },
    {
      title: "The Shaitaan",
      content: [
        "When she gets angry... No No she is not Arshi... She is Gandhi Bachii, who is not mine.",
        "Tell her to be bigdii huiii... and my shaitaan.",
        "But even in her anger, she holds a kind of untamed grace. Like a storm that is both terrifying and beautiful.",
        "You are stronger than your overthinking, and more beautiful than you know."
      ]
    },
    {
      title: "Her Description",
      content: [
        "To define her is difficult. She does not stay in one place. She is like a river flows, sometimes quiet, sometimes an overwhelming force.",
        "It is the grace of her outward appearance and the depth of her soul. Her warm laughter, her gentle spirit.",
        "To speak of her is to step into a beautiful garden where gestures speak louder than words."
      ]
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4 bg-[#FDF6F6]">
      <div className="w-full max-w-3xl bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 min-h-[600px] flex flex-col relative">
        {/* Book Spine Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-slate-100 to-white border-r border-slate-200 z-10"></div>
        
        {/* Header */}
        <div className="p-10 border-b border-slate-50 flex justify-between items-center bg-[#FAFAFA]">
           <div>
             <h2 className="font-serif text-3xl text-slate-800">For Arshi</h2>
             <p className="font-mono text-xs text-slate-400 mt-1 uppercase tracking-widest">BY KUSHAL RATHORE</p>
           </div>
           <Feather className="text-slate-300" />
        </div>

        {/* Content */}
        <div className="flex-1 p-12 md:p-16 relative">
           <div className="max-w-xl mx-auto">
             <h3 className="font-serif text-2xl text-pink-600 mb-8 italic text-center">
               {chapters[chapter].title}
             </h3>
             <div className="space-y-6 font-serif text-lg text-slate-600 leading-loose">
               {chapters[chapter].content.map((p, i) => (
                 <p key={i}>{p}</p>
               ))}
             </div>
           </div>
           
           {/* Page Number */}
           <div className="absolute bottom-6 right-10 font-mono text-xs text-slate-300">
             PAGE {chapter + 1} OF {chapters.length}
           </div>
        </div>

        {/* Controls */}
        <div className="p-6 bg-[#FAFAFA] border-t border-slate-50 flex justify-between items-center">
           <button 
             onClick={() => setChapter(Math.max(0, chapter - 1))}
             disabled={chapter === 0}
             className="px-6 py-2 rounded-full border border-slate-200 text-slate-500 hover:bg-white disabled:opacity-30 transition-all font-mono text-xs"
           >
             PREVIOUS
           </button>
           
           <div className="flex gap-2">
             {chapters.map((_, i) => (
               <div key={i} className={`w-2 h-2 rounded-full ${i === chapter ? 'bg-pink-400' : 'bg-slate-200'}`} />
             ))}
           </div>

           <button 
             onClick={() => setChapter(Math.min(chapters.length - 1, chapter + 1))}
             disabled={chapter === chapters.length - 1}
             className="px-6 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-30 transition-all font-mono text-xs"
           >
             NEXT PAGE
           </button>
        </div>
      </div>
    </div>
  );
};

// --- THE DARK ROOM: BEAT KUSHAL ---

const BeatKushal = () => {
  const canvasRef = useRef(null);
  const [tool, setTool] = useState('hand'); // hand, sword, fire, water
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Physics State
    let kushal = { x: width/2, y: height/2, vx: 0, vy: 0, r: 40, angle: 0, va: 0 };
    let waterLevel = height + 100;
    let particles = []; // For fire, blood, water
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let frame = 0;

    const gravity = 0.5;
    const friction = 0.98;
    const bounce = 0.7;

    // Events
    const handleDown = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      const dist = Math.hypot(x - kushal.x, y - kushal.y);
      
      if (dist < kushal.r + 20) {
        if (tool === 'hand') {
          isDragging = true;
          lastX = x; lastY = y;
        } else if (tool === 'sword') {
          // Cut Effect
          kushal.vx += (Math.random() - 0.5) * 20;
          kushal.vy -= 10;
          kushal.va += (Math.random() - 0.5);
          for(let i=0; i<15; i++) {
            particles.push({
              x: x, y: y,
              vx: (Math.random() - 0.5) * 10,
              vy: (Math.random() - 0.5) * 10,
              life: 1, type: 'blood', color: '#ef4444'
            });
          }
        }
      } else if (tool === 'water') {
        waterLevel = Math.max(height * 0.3, waterLevel - 50);
      }
    };

    const handleMove = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      
      if (isDragging && tool === 'hand') {
        kushal.vx = (x - lastX) * 1.5;
        kushal.vy = (y - lastY) * 1.5;
        kushal.x = x;
        kushal.y = y;
        lastX = x; lastY = y;
      }

      // Fire Interaction
      if (tool === 'fire') {
        const dist = Math.hypot(x - kushal.x, y - kushal.y);
        // Spawn fire
        if (frame % 5 === 0) {
           particles.push({
             x: x + (Math.random()-0.5)*20, y: y,
             vx: (Math.random()-0.5)*2, vy: -Math.random()*5 - 2,
             life: 1, type: 'fire', color: '#f97316'
           });
        }
        // Burn Kushal
        if (dist < 100) {
          kushal.vx += (kushal.x - x) * 0.05; // Run away
          kushal.vy -= 1; // Jump
          kushal.va += (Math.random() - 0.5) * 0.5;
        }
      }
    };

    const handleUp = () => isDragging = false;

    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('touchstart', handleDown);
    window.addEventListener('touchmove', handleMove);
    window.addEventListener('touchend', handleUp);

    const loop = () => {
      ctx.fillStyle = '#0f172a'; // Slate 900
      ctx.fillRect(0, 0, width, height);

      // Water Logic
      if (tool === 'water' && waterLevel > height * 0.3) waterLevel -= 0.5; // Rise slowly
      if (tool !== 'water' && waterLevel < height + 100) waterLevel += 2; // Drain
      
      // Draw Water
      ctx.fillStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.beginPath();
      ctx.rect(0, waterLevel, width, height - waterLevel);
      ctx.fill();

      // Physics
      if (!isDragging) {
        kushal.vy += gravity;
        kushal.vx *= friction;
        kushal.vy *= friction;
        kushal.x += kushal.vx;
        kushal.y += kushal.vy;
        kushal.angle += kushal.va;
        kushal.va *= 0.95;

        // Water buoyancy
        if (kushal.y > waterLevel) {
          kushal.vy -= 0.8; // Float up
          kushal.vx *= 0.9; // Water resistance
          kushal.vy *= 0.9;
        }

        // Walls
        if (kushal.x < kushal.r) { kushal.x = kushal.r; kushal.vx *= -bounce; }
        if (kushal.x > width - kushal.r) { kushal.x = width - kushal.r; kushal.vx *= -bounce; }
        if (kushal.y < kushal.r) { kushal.y = kushal.r; kushal.vy *= -bounce; }
        if (kushal.y > height - kushal.r) { 
          kushal.y = height - kushal.r; 
          kushal.vy *= -bounce; 
          // Stop rolling forever
          if(Math.abs(kushal.vy) < 1) kushal.vy = 0;
          kushal.vx *= 0.9; // Floor friction
        }
      }

      // Draw Kushal
      ctx.save();
      ctx.translate(kushal.x, kushal.y);
      ctx.rotate(kushal.angle);
      
      // Body
      ctx.font = '60px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      // Change face based on state
      let face = '🤵';
      if (tool === 'fire' && Math.random() > 0.5) face = '🔥';
      if (tool === 'sword' && Math.random() > 0.8) face = '😵';
      if (kushal.y > waterLevel + 50) face = '🫧';
      ctx.fillText(face, 0, 0);
      
      // Name Tag
      ctx.fillStyle = 'white';
      ctx.font = '12px sans-serif';
      ctx.fillText('KUSHAL', 0, -40);
      ctx.restore();

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        
        if (p.life > 0) {
            ctx.globalAlpha = p.life;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            const radius = p.type === 'blood' ? 3 : Math.max(0, 6 * p.life);
            ctx.arc(p.x, p.y, radius, 0, Math.PI*2);
            ctx.fill();
            ctx.globalAlpha = 1;
        } else {
            particles.splice(i, 1);
        }
      }

      frame++;
      requestAnimationFrame(loop);
    };
    
    const anim = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('touchstart', handleDown);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleUp);
      cancelAnimationFrame(anim);
    };
  }, [tool]);

  return (
    <div className="w-full h-full relative cursor-crosshair">
      <canvas ref={canvasRef} className="block w-full h-full touch-none" />
      
      {/* Tool Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 bg-slate-800/80 backdrop-blur-md p-4 rounded-full border border-slate-700">
        <ToolBtn icon={<Hand />} label="Throw" active={tool === 'hand'} onClick={() => setTool('hand')} />
        <ToolBtn icon={<Sword />} label="Cut" active={tool === 'sword'} onClick={() => setTool('sword')} />
        <ToolBtn icon={<Flame />} label="Burn" active={tool === 'fire'} onClick={() => setTool('fire')} />
        <ToolBtn icon={<Droplets />} label="Drown" active={tool === 'water'} onClick={() => setTool('water')} />
      </div>

      <div className="absolute top-20 left-0 w-full text-center pointer-events-none">
        <h2 className="font-serif text-3xl text-slate-700 opacity-20">THE DARK ROOM</h2>
      </div>
    </div>
  );
};

const ToolBtn = ({ icon, label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-full transition-all ${active ? 'bg-red-500 text-white scale-110 shadow-[0_0_20px_rgba(239,68,68,0.5)]' : 'bg-slate-700 text-slate-400 hover:bg-slate-600'}`}
    title={label}
  >
    {icon}
  </button>
);

// --- PREVIOUS GAMES ---

const AdvancedLoveCatcher = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState('start'); 
  const [combo, setCombo] = useState(0);

  useEffect(() => {
    if (gameState !== 'playing') return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let animationFrameId;
    let player = { x: width / 2, y: height - 100, width: 60, height: 60, targetX: width / 2 };
    let items = [];
    let particles = [];
    let texts = [];
    let frame = 0;
    let gameScore = 0;
    let gameCombo = 0;
    let difficulty = 1;

    const handleMove = (x) => { player.targetX = Math.max(player.width/2, Math.min(width - player.width/2, x)); };
    const mouseMove = (e) => handleMove(e.clientX);
    const touchMove = (e) => handleMove(e.touches[0].clientX);
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('touchmove', touchMove);
    
    const loop = () => {
      ctx.fillStyle = '#FDF6F6';
      ctx.fillRect(0, 0, width, height);
      player.x += (player.targetX - player.x) * 0.15;
      ctx.font = '50px serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🧸', player.x, player.y);
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.beginPath();
      ctx.ellipse(player.x, player.y + 35, 25, 8, 0, 0, Math.PI * 2);
      ctx.fill();

      if (frame % Math.max(20, 60 - difficulty * 2) === 0) {
        items.push({ x: Math.random() * (width - 40) + 20, y: -50, type: Math.random() > 0.2 ? 'heart' : 'storm', speed: Math.random() * 3 + 2 + difficulty, angle: Math.random() * Math.PI * 2, rotationSpeed: (Math.random() - 0.5) * 0.1 });
      }
      if (frame % 600 === 0) difficulty += 0.5;

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
        const dist = Math.hypot(player.x - item.x, player.y - item.y);
        if (dist < 50) {
           if (item.type === 'heart') {
             gameScore += 10 + (gameCombo * 2); gameCombo++; setScore(gameScore); setCombo(gameCombo);
             for(let p=0; p<8; p++) particles.push({ x: item.x, y: item.y, vx: (Math.random() - 0.5) * 10, vy: (Math.random() - 0.5) * 10, life: 1, color: `hsl(${330 + Math.random()*30}, 100%, 70%)` });
             if (gameCombo % 5 === 0) texts.push({ x: player.x, y: player.y - 50, text: ['Amazing!', 'Perfect!', 'Wow!', 'Love!'][Math.floor(Math.random()*4)], life: 1, yOffset: 0 });
           } else { setGameState('gameover'); cancelAnimationFrame(animationFrameId); return; }
           items.splice(i, 1);
        } else if (item.y > height + 50) { items.splice(i, 1); if (item.type === 'heart') { gameCombo = 0; setCombo(0); } }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]; p.x += p.vx; p.y += p.vy; p.life -= 0.02; p.vy += 0.2;
        if (p.life > 0) { ctx.fillStyle = p.color; ctx.globalAlpha = p.life; ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(0, 4 * p.life), 0, Math.PI*2); ctx.fill(); ctx.globalAlpha = 1; } else { particles.splice(i, 1); }
      }
      
      for (let i = texts.length - 1; i >= 0; i--) {
        const t = texts[i]; t.yOffset += 2; t.life -= 0.02;
        if (t.life > 0) { ctx.font = 'bold 24px sans-serif'; ctx.fillStyle = `rgba(219, 39, 119, ${t.life})`; ctx.fillText(t.text, t.x, t.y - t.yOffset); } else { texts.splice(i, 1); }
      }
      frame++; animationFrameId = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener('mousemove', mouseMove); window.removeEventListener('touchmove', touchMove); cancelAnimationFrame(animationFrameId); };
  }, [gameState]);

  return (
    <div className="w-full h-full relative bg-[#FDF6F6]">
       {gameState === 'start' && (
         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white/50 backdrop-blur-sm animate-fade-in">
            <h2 className="font-serif text-6xl text-slate-800 mb-4 tracking-tighter">Love Catcher</h2>
            <p className="font-mono text-slate-500 mb-8 tracking-widest uppercase">Collect Hearts • Avoid Clouds • Build Combos</p>
            <button onClick={() => { setGameState('playing'); setScore(0); setCombo(0); }} className="px-12 py-4 bg-pink-500 text-white rounded-full font-bold text-xl hover:bg-pink-600 transition-all shadow-lg hover:scale-105">Start Game</button>
         </div>
       )}
       {gameState === 'gameover' && (
         <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-white/80 backdrop-blur-md animate-fade-in-up">
            <Trophy className="w-16 h-16 text-yellow-500 mb-4 animate-bounce" />
            <h2 className="font-serif text-5xl text-slate-800 mb-2">Game Over!</h2>
            <p className="text-2xl text-pink-600 font-bold mb-8">Score: {score}</p>
            <p className="font-mono text-slate-400 mb-8 max-w-md text-center">"Even if storm clouds come, Kushal's love collects in the background."</p>
            <button onClick={() => { setGameState('playing'); setScore(0); setCombo(0); }} className="px-8 py-3 bg-slate-800 text-white rounded-full font-bold hover:bg-slate-700 transition-all">Try Again</button>
         </div>
       )}
       {gameState === 'playing' && (
         <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20 pointer-events-none text-center">
            <div className="font-serif text-5xl text-slate-200 font-bold drop-shadow-sm">{score}</div>
            {combo > 2 && <div className="text-pink-500 font-bold animate-pulse mt-2">COMBO x{combo}</div>}
         </div>
       )}
       <canvas ref={canvasRef} className="block w-full h-full touch-none" />
    </div>
  );
};

const CreativeStudio = () => {
  const [mode, setMode] = useState('menu');
  if (mode === 'menu') {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
        <h2 className="font-serif text-5xl text-slate-800 mb-12">The Aesthetic Studio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
           <button onClick={() => setMode('cake')} className="group bg-[#FFF5F5] p-8 rounded-3xl border-2 border-white shadow-xl hover:scale-105 transition-all text-left">
             <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform"><Cake size={32} className="text-pink-600" /></div>
             <h3 className="font-serif text-3xl text-slate-800 mb-2">The Patisserie</h3>
             <p className="font-mono text-xs text-slate-400 uppercase tracking-widest">Design Dream Cakes</p>
           </button>
           <button onClick={() => setMode('style')} className="group bg-[#F0FDF4] p-8 rounded-3xl border-2 border-white shadow-xl hover:scale-105 transition-all text-left">
             <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform"><Shirt size={32} className="text-green-600" /></div>
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
         <h2 className="font-serif text-3xl text-slate-800">{mode === 'cake' ? 'The Patisserie' : 'The Atelier'}</h2>
         <button onClick={() => setMode('menu')} className="text-sm font-mono underline text-slate-400 hover:text-slate-800">EXIT STUDIO</button>
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
  const colors = [ { name: 'Vanilla', val: 'bg-[#FFFBEB]' }, { name: 'Strawberry', val: 'bg-[#FBCFE8]' }, { name: 'Matcha', val: 'bg-[#D1FAE5]' }, { name: 'Lavender', val: 'bg-[#E9D5FF]' }, { name: 'Chocolate', val: 'bg-[#78350F]' }, { name: 'Blueberry', val: 'bg-[#BFDBFE]' } ];
  const decorations = ['🍓', '🍫', '🌸', '🍒', '🍪', '✨', '🍋', '🫐', '🎀'];
  const addTopping = (emoji) => { setToppings([...toppings, { id: Date.now(), emoji, left: Math.random() * 80 + 10, top: Math.random() * 80 + 10, rotation: Math.random() * 360 }]); };
  
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
       <div className="bg-white rounded-3xl p-12 shadow-2xl border-4 border-pink-50 min-h-[500px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <div className="flex flex-col items-center justify-end relative z-10">
             <div className="w-64 h-4 bg-slate-200 rounded-full mt-2 shadow-lg relative top-[100%]"></div>
             <div className="w-24 h-12 bg-slate-300 rounded-b-lg mb-2"></div>
             <div className={`w-64 h-24 ${tier1Color} rounded-xl shadow-inner border-2 border-white/20 relative transition-colors duration-500`}>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 0).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>{t.emoji}</div>
                   ))}
                </div>
             </div>
             <div className={`w-48 h-24 ${tier2Color} rounded-xl shadow-md border-2 border-white/20 relative -mb-2 z-20 transition-colors duration-500`}>
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 1).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>{t.emoji}</div>
                   ))}
                </div>
             </div>
             <div className={`w-32 h-24 ${tier3Color} rounded-xl shadow-lg border-2 border-white/20 relative -mb-2 z-30 transition-colors duration-500`}>
                 <div className="absolute inset-0 overflow-hidden rounded-xl">
                   {toppings.filter((_, i) => i % 3 === 2).map(t => (
                      <div key={t.id} className="absolute text-2xl drop-shadow-sm cursor-pointer hover:scale-125 transition-transform" style={{ left: `${t.left}%`, top: `${t.top}%`, transform: `rotate(${t.rotation}deg)` }}>{t.emoji}</div>
                   ))}
                </div>
             </div>
             <div className="mb-2 z-40 animate-bounce-slow"><span className="text-4xl">👑</span></div>
          </div>
       </div>
       <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl text-slate-800">Frosting Palette</h3>
            <div className="flex gap-2 flex-wrap">
               {colors.map(c => ( <button key={c.name} onClick={() => { setTier3Color(c.val); setTimeout(() => setTier2Color(c.val), 100); setTimeout(() => setTier1Color(c.val), 200); }} className={`w-10 h-10 rounded-full ${c.val} border-2 border-slate-200 shadow-sm hover:scale-110 transition-transform`} title={c.name} /> ))}
               <button onClick={() => { setTier1Color('bg-pink-200'); setTier2Color('bg-white'); setTier3Color('bg-pink-300'); }} className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-300 to-blue-200 border-2 border-slate-200 shadow-sm hover:scale-110" title="Ombre" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center"><h3 className="font-serif text-xl text-slate-800">Decorations</h3><button onClick={() => setToppings([])} className="text-xs text-red-400 font-mono underline">CLEAR ALL</button></div>
            <div className="grid grid-cols-5 gap-4">
               {decorations.map(d => ( <button key={d} onClick={() => addTopping(d)} className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center text-2xl hover:scale-110 active:scale-95 transition-all">{d}</button> ))}
            </div>
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
      <div className="bg-[#FFFBFB] rounded-3xl p-8 shadow-2xl border-4 border-pink-50 min-h-[600px] flex items-center justify-center relative">
         <div className="relative w-64 h-[500px] flex flex-col items-center">
            <div className="w-24 h-28 bg-[#FFE4C4] rounded-[3rem] relative z-20 shadow-sm flex flex-col items-center justify-center">
               <div className="flex gap-4 mb-2">
                 <div className={`w-3 h-1.5 bg-slate-800 rounded-full relative`}><div className={`absolute -top-3 left-0 w-full h-3 rounded-t-full opacity-50 ${eyeShadow}`}></div></div>
                 <div className={`w-3 h-1.5 bg-slate-800 rounded-full relative`}><div className={`absolute -top-3 left-0 w-full h-3 rounded-t-full opacity-50 ${eyeShadow}`}></div></div>
               </div>
               <div className="flex gap-8 absolute top-14 w-full justify-center px-1">
                 <div className={`w-4 h-2 rounded-full blur-sm opacity-60 ${blush}`}></div><div className={`w-4 h-2 rounded-full blur-sm opacity-60 ${blush}`}></div>
               </div>
               <div className={`w-6 h-3 rounded-full mt-2 ${lipstick} shadow-sm transition-colors`}></div>
            </div>
            <div className="w-8 h-8 bg-[#FFE4C4] -mt-2 z-10"></div>
            <div className={`transition-all duration-500 relative z-10 ${dressStyle === 'A-Line' ? `w-32 h-64 rounded-t-3xl rounded-b-[4rem] ${dressColor}` : ''} ${dressStyle === 'Ballgown' ? `w-48 h-64 rounded-t-2xl rounded-b-full ${dressColor}` : ''} ${dressStyle === 'Mermaid' ? `w-24 h-64 rounded-t-3xl rounded-b-lg ${dressColor}` : ''}`}>
                <div className="absolute top-0 w-full h-full opacity-20 bg-[radial-gradient(circle,_rgba(255,255,255,0.8)_2px,_transparent_3px)] bg-[length:20px_20px]"></div>
                <div className={`absolute -left-8 top-0 w-8 h-20 rounded-full ${dressColor} rotate-12 origin-top-right`}></div>
                <div className={`absolute -right-8 top-0 w-8 h-20 rounded-full ${dressColor} -rotate-12 origin-top-left`}></div>
            </div>
            <div className="flex gap-4 -mt-4"><div className="w-4 h-24 bg-[#FFE4C4]"></div><div className="w-4 h-24 bg-[#FFE4C4]"></div></div>
            <div className="flex gap-8 -mt-2"><div className="w-8 h-4 bg-slate-800 rounded-full"></div><div className="w-8 h-4 bg-slate-800 rounded-full"></div></div>
         </div>
      </div>
      <div className="space-y-10">
         <div>
           <h3 className="font-serif text-xl text-slate-800 mb-4">Silhouette</h3>
           <div className="flex gap-4">{['A-Line', 'Ballgown', 'Mermaid'].map(s => ( <button key={s} onClick={() => setDressStyle(s)} className={`px-4 py-2 border rounded-full font-mono text-xs uppercase ${dressStyle === s ? 'bg-slate-800 text-white' : 'bg-white text-slate-500'}`}>{s}</button> ))}</div>
         </div>
         <div>
           <h3 className="font-serif text-xl text-slate-800 mb-4">Fabric Color</h3>
           <div className="flex gap-3 flex-wrap">{dressColors.map(c => ( <button key={c} onClick={() => setDressColor(c)} className={`w-8 h-8 rounded-full shadow-sm ${c} border-2 ${dressColor === c ? 'border-slate-800 scale-110' : 'border-transparent'}`} /> ))}</div>
         </div>
         <div className="p-6 bg-white rounded-3xl border border-slate-100">
            <h3 className="font-serif text-xl text-slate-800 mb-6 flex items-center gap-2"><Sparkles size={18} className="text-pink-400" /> Makeup Studio</h3>
            <div className="space-y-4">
               <div className="flex items-center gap-4"><span className="font-mono text-xs w-16 text-slate-400">LIPS</span><div className="flex gap-2">{lipstickShades.map(c => ( <button key={c} onClick={() => setLipstick(c)} className={`w-6 h-6 rounded-full ${c} border border-slate-100`} /> ))}</div></div>
               <div className="flex items-center gap-4"><span className="font-mono text-xs w-16 text-slate-400">BLUSH</span><button onClick={() => setBlush('bg-pink-200')} className="w-6 h-6 rounded-full bg-pink-200 border border-slate-100" /><button onClick={() => setBlush('bg-rose-300')} className="w-6 h-6 rounded-full bg-rose-300 border border-slate-100" /><button onClick={() => setBlush('bg-orange-200')} className="w-6 h-6 rounded-full bg-orange-200 border border-slate-100" /></div>
               <div className="flex items-center gap-4"><span className="font-mono text-xs w-16 text-slate-400">EYES</span><button onClick={() => setEyeShadow('bg-blue-300')} className="w-6 h-6 rounded-full bg-blue-300 border border-slate-100" /><button onClick={() => setEyeShadow('bg-purple-300')} className="w-6 h-6 rounded-full bg-purple-300 border border-slate-100" /><button onClick={() => setEyeShadow('bg-transparent')} className="w-auto px-2 h-6 rounded-full bg-slate-100 text-[10px] flex items-center">NONE</button></div>
            </div>
         </div>
      </div>
    </div>
  );
};

const ThoughtPopper = () => {
  const [bubbles, setBubbles] = useState([]);
  useEffect(() => { setBubbles(Array.from({ length: 20 }).map((_, i) => ({ id: i, text: ['Overthinking', 'Stress', 'Anger', 'Worry', 'Doubts'][Math.floor(Math.random() * 5)], affirmation: ['I am loved', 'I am enough', 'Breathe', 'Peace', 'Joy', 'Kushal ❤️'][Math.floor(Math.random() * 6)], popped: false }))); }, []);
  const popBubble = (id) => { setBubbles(prev => prev.map(b => b.id === id ? { ...b, popped: true } : b)); if (navigator.vibrate) navigator.vibrate(50); };
  const reset = () => { setBubbles(bubbles.map(b => ({...b, popped: false, id: Math.random()}))); };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-20 px-4">
      <div className="text-center mb-10"><h2 className="font-serif text-5xl text-slate-800 mb-2">Thought Popper</h2><p className="font-mono text-slate-400 uppercase tracking-widest">POP THE NEGATIVITY. FIND THE LOVE.</p></div>
      <div className="grid grid-cols-4 md:grid-cols-5 gap-4 max-w-2xl">
        {bubbles.map((b) => ( <button key={b.id} onClick={() => popBubble(b.id)} disabled={b.popped} className={`relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300 ${b.popped ? 'scale-90 bg-transparent' : 'scale-100 bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner hover:scale-105 active:scale-95 cursor-pointer'}`}>
            {!b.popped && (<div className="absolute inset-0 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center p-2 text-center"><span className="text-[10px] md:text-xs text-slate-400 font-mono uppercase leading-tight select-none">{b.text}</span><div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full blur-[2px]" /></div>)}
            {b.popped && (<div className="animate-pop-in text-pink-500 font-bold text-xs md:text-sm text-center font-serif leading-tight">{b.affirmation}</div>)}
          </button> ))}
      </div>
      <button onClick={reset} className="mt-12 px-8 py-3 border border-slate-300 rounded-full text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-all font-mono uppercase tracking-widest text-xs">Reset Bubbles</button>
      <style>{`@keyframes popIn { 0% { opacity: 0; transform: scale(0.5); } 50% { transform: scale(1.2); } 100% { opacity: 1; transform: scale(1); } } .animate-pop-in { animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }`}</style>
    </div>
  );
};

const BreathingExercise = () => {
  const [phase, setPhase] = useState('Inhale');
  useEffect(() => { const cycle = async () => { setPhase('Inhale'); await new Promise(r => setTimeout(r, 4000)); setPhase('Hold'); await new Promise(r => setTimeout(r, 4000)); setPhase('Exhale'); await new Promise(r => setTimeout(r, 4000)); }; const interval = setInterval(cycle, 12000); cycle(); return () => clearInterval(interval); }, []);
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[60vh]">
      <div className="relative w-80 h-80 flex items-center justify-center">
        {[0, 1, 2].map(i => ( <div key={i} className={`absolute border border-slate-800/10 rounded-full transition-all duration-[4000ms] ease-in-out`} style={{ width: phase === 'Inhale' ? `${100 + i*40}%` : phase === 'Hold' ? `${100 + i*40}%` : '50%', height: phase === 'Inhale' ? `${100 + i*40}%` : phase === 'Hold' ? `${100 + i*40}%` : '50%', opacity: phase === 'Inhale' ? 1 - i*0.3 : 0 }} /> ))}
        <div className={`relative z-10 w-48 h-48 rounded-full bg-gradient-to-b from-blue-50 to-white shadow-xl flex items-center justify-center transition-all duration-[4000ms] ease-in-out ${phase === 'Inhale' ? 'scale-110' : phase === 'Hold' ? 'scale-110' : 'scale-90'}`}><span className="font-serif text-3xl text-slate-800 tracking-widest">{phase}</span></div>
      </div>
    </div>
  );
};

const VolcanoTamer = () => {
  const [anger, setAnger] = useState(100);
  const [isCooled, setIsCooled] = useState(false);
  const tap = () => { if (anger > 0) setAnger(p => p - 8); else setIsCooled(true); };
  return (
    <div className="flex flex-col items-center justify-center h-full py-10">
       <h2 className="font-serif text-4xl mb-2">The Volcano</h2>
       <p className="font-mono text-xs text-slate-400 mb-8 uppercase tracking-widest">Tap the fire to cool it down</p>
       <button onClick={tap} className={`relative w-64 h-64 rounded-full flex items-center justify-center text-8xl shadow-2xl transition-all duration-200 ${isCooled ? 'bg-white border-4 border-emerald-200' : 'bg-gradient-to-t from-red-500 to-orange-400 active:scale-95'}`}>{isCooled ? '🏔️' : '🌋'}{!isCooled && (<div className="absolute inset-0 rounded-full animate-ping bg-red-400 opacity-20 pointer-events-none" />)}</button>
       <div className="w-64 h-1 bg-slate-100 mt-12 rounded-full overflow-hidden"><div className="h-full bg-slate-800 transition-all duration-300" style={{ width: `${anger}%` }} /></div>
       {isCooled && (<button onClick={() => { setAnger(100); setIsCooled(false); }} className="mt-8 text-sm underline text-slate-400">Restart Volcano</button>)}
    </div>
  );
};

const WorryVent = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);
  const send = (e) => { e.preventDefault(); if(!text) return; const id = Date.now(); setItems(p => [...p, { id, text }]); setText(''); setTimeout(() => setItems(p => p.filter(i => i.id !== id)), 5000); };
  return (
    <div className="flex flex-col items-center h-full pt-20 relative overflow-hidden">
      <h2 className="font-serif text-4xl mb-8">Let It Go</h2>
      <form onSubmit={send} className="w-full max-w-md relative z-20">
        <input value={text} onChange={e => setText(e.target.value)} placeholder="Type a worry..." className="w-full bg-transparent border-b border-slate-300 py-4 text-center font-serif text-2xl outline-none focus:border-pink-400 transition-colors placeholder:text-slate-200" />
        <button className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-300 hover:text-pink-400"><Wind /></button>
      </form>
      <div className="absolute inset-0 pointer-events-none z-10">{items.map(i => ( <div key={i.id} className="absolute bottom-0 bg-white shadow-lg px-6 py-3 rounded-full text-slate-500 font-serif italic text-sm animate-[floatUp_5s_ease-in_forwards]" style={{ left: `${Math.random()*80 + 10}%` }}>{i.text}</div> ))}</div>
    </div>
  );
};

export default App;