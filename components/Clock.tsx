import React from 'react';
import { useKST } from '../hooks/useKST';
import { TimeUnit } from './TimeUnit';

export const Clock: React.FC = () => {
  const { year, dangiYear, month, day, hour, minute, second, weekday } = useKST();

  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 py-12 transition-all duration-700 ease-in-out bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
      
      {/* Header: Location & Date */}
      <div className="flex flex-col items-center mb-10 md:mb-16 space-y-3">
        <h1 className="text-sm md:text-lg font-bold tracking-[0.3em] text-blue-400 uppercase">
          Korea Standard Time
        </h1>
        
        {/* Date Row */}
        <div className="flex flex-wrap items-end justify-center gap-2 md:gap-3 text-lg md:text-2xl font-light text-slate-200">
          <span className="font-normal">{year}년</span>
          <span>{month}월</span>
          <span>{day}일</span>
          <span className="font-bold text-white px-2 py-0.5 bg-white/10 rounded-md ml-1">
            {weekday}
          </span>
        </div>

        {/* Dangi Year Row */}
        <div className="text-sm md:text-base text-slate-500 font-medium tracking-widest">
          단기 {dangiYear}년
        </div>
      </div>

      {/* Main Time Display */}
      <div className="flex flex-col items-center">
        {/* Hour : Minute */}
        <div className="flex items-end justify-center mb-6 md:mb-8">
          <TimeUnit value={hour} label="시" isHighlight={true} />
          <div className="text-4xl md:text-8xl font-thin text-slate-500 pb-8 md:pb-12 animate-pulse">:</div>
          <TimeUnit value={minute} label="분" isHighlight={true} />
        </div>
        
        {/* Seconds */}
        <div className="flex items-center justify-center mt-4">
          <div className="px-6 py-3 bg-black/20 rounded-full border border-white/5 flex items-center gap-2">
            <span className="tabular-nums text-2xl md:text-4xl font-bold text-blue-300 w-[2ch] text-center">
              {second.replace(/[^0-9]/g, '')}
            </span>
            <span className="text-sm md:text-base text-slate-400 pt-1">초</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-12 text-center">
        <p className="text-xs text-slate-500 tracking-wider">
          UTC+09:00 • SEOUL, SOUTH KOREA
        </p>
      </div>
      
    </div>
  );
};