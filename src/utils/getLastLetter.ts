export const getLastLetter = (values: string[]): string => {
  const lastValue = values[values.length - 1];
  return lastValue[lastValue.length - 1].toUpperCase();
};
