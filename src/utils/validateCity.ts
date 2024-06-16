import { CITIES } from '../constants/cities';
import { capitalize } from './capitalize';
import { getLastLetter } from './getLastLetter';

export const validateCity = (
  city: string,
  mentionedCities: string[]
): boolean => {
  const capitalizedCity = capitalize(city);

  if (!mentionedCities.length) {
    return CITIES.includes(capitalizedCity);
  }

  const lastLetter = getLastLetter(mentionedCities);

  if (!CITIES.includes(capitalizedCity)) {
    return false;
  } else if (capitalizedCity[0] !== lastLetter) {
    return false;
  } else if (mentionedCities.includes(capitalizedCity)) {
    return false;
  }

  return true;
};
