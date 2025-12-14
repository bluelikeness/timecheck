import React from 'react';

interface TimeUnitProps {
  value: string;
  label: string;
  isHighlight?: boolean;
}

export const TimeUnit: React.FC<TimeUnitProps> = ({ value, label, isHighlight = false }) => {
  // Restore larger font sizes for numeric digits
  const valueSize = isHighlight ? "text-6xl md:text-8xl lg:text-9xl" : "text-3xl md:text-4xl";
  const labelSize = isHighlight ? "text-xl md:text-2xl" : "text-lg md:text-xl";
  const textColor = isHighlight ? "text-white" : "text-slate-300";

  return (
    <div className="flex flex-col items-center justify-center mx-2 md:mx-4">
      <div className={`font-black tracking-tighter tabular-nums transition-all duration-300 ${valueSize} ${textColor} drop-shadow-2xl`}>
        {value.replace(/[^0-9]/g, '')}
      </div>
      <div className={`font-light mt-1 md:mt-4 ${labelSize} text-slate-400 uppercase tracking-widest`}>
        {label}
      </div>
    </div>
  );
};