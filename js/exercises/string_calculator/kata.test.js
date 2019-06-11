const sumString = require("./solution");

describe("Sum numbers in string", () => {
  it("returns sum of empty string", () => {
    expect(sumString("")).toBe(0);
  });
  it("returns sum of one number", () => {
    expect(sumString("9")).toBe(9);
  });
  it("returns sum of 1 and 2", () => {
    expect(sumString("1,2")).toBe(3);
  });
  it("returns sum of 3 and 4", () => {
    expect(sumString("3,4")).toBe(7);
  });
  it("returns sum of 3 and 4 and 5", () => {
    expect(sumString("3,4,5")).toBe(12);
  });
  it("returns sum of 3 and 4 and 5 separated by new lines", () => {
    expect(sumString("5\n4\n3,2\n3\n6")).toBe(23);
  });
});
