import { CITIES } from '../constants/cities';
import { getLastLetter } from './getLastLetter';

export const getRandomCity = (
  mentionedCities: string[],
  lastCity: string
): string | undefined => {
  const availableCities = CITIES.filter(
    (city) => !mentionedCities.includes(city)
  );

  const lastLetter = getLastLetter(lastCity);

  const city = availableCities.find((city) => city[0] === lastLetter);

  return city;
};
