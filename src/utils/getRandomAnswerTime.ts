export const getRandomAnswerTime = (
  min: number = 10000,
  max: number = 121000
): number => {
  return Math.round(Math.random() * (max - min) + min);
};
