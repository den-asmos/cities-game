export const getLastLetter = (value: string): string => {
  const lastLetter = value[value.length - 1].toUpperCase();

  if (lastLetter === 'Ь' || lastLetter === 'Ы') {
    return value[value.length - 2].toUpperCase();
  }

  return lastLetter;
};
