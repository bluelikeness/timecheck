/**
 * Formats a given date object into specific parts (year, month, day, etc.)
 * relative to the 'Asia/Seoul' timezone.
 */
export const getKSTParts = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Seoul',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    weekday: 'long',
  };

  const formatter = new Intl.DateTimeFormat('ko-KR', options);
  const parts = formatter.formatToParts(date);

  const getPart = (type: Intl.DateTimeFormatPartTypes) => 
    parts.find(p => p.type === type)?.value || '';

  const yearStr = getPart('year');
  const yearNum = parseInt(yearStr.replace(/[^0-9]/g, ''), 10);
  const dangiYear = isNaN(yearNum) ? '' : (yearNum + 2333).toString();

  return {
    year: yearStr,
    dangiYear: dangiYear,
    month: getPart('month'),
    day: getPart('day'),
    hour: getPart('hour'),
    minute: getPart('minute'),
    second: getPart('second'),
    weekday: getPart('weekday'),
  };
};

/**
 * Returns the raw current Date object adjusted to KST roughly (for simple date calcs if needed),
 * but for display, relying on Intl.DateTimeFormat (above) is better.
 * This helper returns true if it's currently "night" in Korea (6PM - 6AM).
 */
export const isNightInKST = (): boolean => {
  const now = new Date();
  const kstString = now.toLocaleString("en-US", { timeZone: "Asia/Seoul", hour12: false });
  const kstHour = new Date(kstString).getHours();
  return kstHour >= 18 || kstHour < 6;
};