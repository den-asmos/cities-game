import { CITIES } from '../constants/cities';
import { capitalize } from './capitalize';
import { getLastLetter } from './getLastLetter';

type response = {
  isValid: boolean;
  error: string | null;
};

export const validateCity = (
  city: string,
  mentionedCities: string[]
): response => {
  const capitalizedCity = capitalize(city);

  if (!mentionedCities.length) {
    if (CITIES.includes(capitalizedCity)) {
      return { isValid: true, error: null };
    } else {
      return { isValid: false, error: 'Такого города нет' };
    }
  }

  const lastLetter = getLastLetter(mentionedCities);

  if (!CITIES.includes(capitalizedCity)) {
    return { isValid: false, error: 'Такого города нет' };
  } else if (capitalizedCity[0] !== lastLetter) {
    return {
      isValid: false,
      error: `Название города должно начинаться на букву "${lastLetter}"`,
    };
  } else if (mentionedCities.includes(capitalizedCity)) {
    return { isValid: false, error: 'Этот город уже назван' };
  }

  return { isValid: true, error: null };
};
