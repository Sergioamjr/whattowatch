import { generateRandonNumber } from "./";

describe("Util methods", () => {
  test("should return a randon number between a range", () => {
    const n = generateRandonNumber(0, 10);
    expect(n > 0 && n < 10).toBe(true);
  });
});
