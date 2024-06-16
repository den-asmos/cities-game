import { CITIES } from '../constants/cities';

export const validateCity = (
  city: string,
  lastLetter: string,
  availableCities: string[]
): boolean => {
  const capitalizedCity = city[0].toUpperCase() + city.slice(1).toLowerCase();

  if (!CITIES.includes(capitalizedCity)) {
    return false;
  } else if (capitalizedCity[0] !== lastLetter) {
    return false;
  } else if (!availableCities.includes(capitalizedCity)) {
    return false;
  }

  return true;
};
