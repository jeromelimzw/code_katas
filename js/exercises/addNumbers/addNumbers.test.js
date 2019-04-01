const addNumbers = require("./addNumbers");

describe("addNumbers", () => {
  it("adds 2 numbers together", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });
});
