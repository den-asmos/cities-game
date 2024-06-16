export const getRandomAnswerTime = (
  min: number = 10,
  max: number = 121
): number => {
  return Math.round(Math.random() * (max - min) + min);
};
