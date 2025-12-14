import { useState, useEffect } from 'react';
import { getKSTParts } from '../utils/timeUtils';

export interface KSTTimeData {
  year: string;
  dangiYear: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  weekday: string;
}

export const useKST = () => {
  const [timeData, setTimeData] = useState<KSTTimeData>(() => getKSTParts(new Date()));

  useEffect(() => {
    // Update immediately to avoid delay
    setTimeData(getKSTParts(new Date()));

    const intervalId = setInterval(() => {
      setTimeData(getKSTParts(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return timeData;
};