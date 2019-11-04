export const generateRandonNumber = (min: number = 0, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
