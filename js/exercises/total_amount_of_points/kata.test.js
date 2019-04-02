const { calculateAllMatch, calculateOneMatch } = require("./solution");

describe("Total number of points", () => {
  describe("for 1 match", () => {
    it("returns 3 points if our team wins for 1 match", () => {
      expect(calculateOneMatch("5:2")).toBe(3);
    });
    it("returns 0 points if our team loses for 1 match", () => {
      expect(calculateOneMatch("1:2")).toBe(0);
    });
    it("returns 1 points if our team draws for 1 match", () => {
      expect(calculateOneMatch("2:2")).toBe(1);
    });
  });

  describe("for all matches", () => {
    it("returns points for all matches", () => {
      expect(calculateAllMatch(["4:1", "3:1", "5:1"])).toBe(9);
      expect(calculateAllMatch(["0:1", "0:1", "0:1"])).toBe(0);
      expect(calculateAllMatch(["0:1", "1:1", "0:1"])).toBe(1);
    });
  });
});
