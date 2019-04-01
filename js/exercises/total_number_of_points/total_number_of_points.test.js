const {
  calculateAllMatch,
  calculateOneMatch
} = require("./total_number_of_points");

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

    it.todo("should ");
  });

  describe("for all matches", () => {
    it("returns points for all matches", () => {
      expect(calculateAllMatch(["4:1", "3:1", "5:1"])).toBe(9);
    });
  });
});
