const stringEnd = require("./solution");

describe("Checks if ending is correct", () => {
  it("returns true if ending of string is correct", () => {
    expect(stringEnd("chicken", "ken")).toBe(true);
  });
});
