export const getRandomCity = (availableCities: string[]): string => {
  const randomIndex = Math.floor(Math.random() * availableCities.length);
  return availableCities[randomIndex];
};
