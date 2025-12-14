import React, { useEffect, useState } from 'react';
import { Clock } from './components/Clock';
import { isNightInKST } from './utils/timeUtils';

const App: React.FC = () => {
  const [isNight, setIsNight] = useState(false);

  // Check time of day to set theme roughly once on mount and every minute
  useEffect(() => {
    const checkTime = () => setIsNight(isNightInKST());
    checkTime();
    const timer = setInterval(checkTime, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden transition-colors duration-1000 ease-in-out ${isNight ? 'bg-slate-950' : 'bg-slate-900'}`}>
      
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-slow ${isNight ? 'bg-indigo-900' : 'bg-blue-600'}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-pulse-slow ${isNight ? 'bg-purple-900' : 'bg-cyan-600'}`} style={{ animationDelay: '2s' }}></div>
        <div className={`absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full mix-blend-multiply filter blur-[60px] opacity-30 animate-pulse-slow ${isNight ? 'bg-slate-800' : 'bg-blue-400'}`} style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grain Overlay for Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <Clock />
    </div>
  );
};

export default App;