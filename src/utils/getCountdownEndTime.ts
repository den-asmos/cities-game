export const getCountdownEndTime = (duration: number = 120) => {
  const currentTime = Date.now();
  return currentTime + duration;
};
