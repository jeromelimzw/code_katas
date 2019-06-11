const uniquePair = require("./solution");
describe("return unique pairs which add up to target value", () => {
  it("returns (3,1) when given  and k=4", () => {
    expect(uniquePair([1, 3, 4, 5, 6, 7, 8], 4)).toBe([1, 3]);
  });
});
