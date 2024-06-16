import { CITIES } from '../constants/cities';

export const getRandomCity = (
  mentionedCities: string[],
  lastCity: string
): string | undefined => {
  const availableCities = CITIES.filter(
    (city) => !mentionedCities.includes(city)
  );

  const lastLetter = lastCity[lastCity.length - 1].toUpperCase();

  const city = availableCities.find((city) => city[0] === lastLetter);

  return city;
};
