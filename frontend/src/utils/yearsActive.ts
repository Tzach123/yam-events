const FOUNDED_YEAR = 1997;

export const getYearsActive = (): number =>
  new Date().getFullYear() - FOUNDED_YEAR;
