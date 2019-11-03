export const generateRandonNumber = (min: number = 0, max: number): number => {
  const n = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log("n", n);
  return n;
};
