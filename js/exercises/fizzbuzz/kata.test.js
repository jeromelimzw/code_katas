const { fizzBuzzOne, fizzBuzz } = require("./solution");

describe("Returning appropriate response", () => {
  describe("for 1 number", () => {
    it("throws error if number is less than 1", () => {
      expect(fizzBuzzOne(-3)).toBe("stop feeding me garbage");
    });

    it("returns fizz if number is divisible by 3", () => {
      expect(fizzBuzzOne(3)).toBe("fizz");
    });
    it("returns buzz if number is divisible by 5", () => {
      expect(fizzBuzzOne(5)).toBe("buzz");
    });
    it("returns fizzbuzz if number is divisible by both 5 and 3", () => {
      expect(fizzBuzzOne(15)).toBe("fizzbuzz");
    });
    it("returns number if number is neither divisible by 5 nor 3", () => {
      expect(fizzBuzzOne(7)).toBe(7);
    });
  });
  describe("for up to given number", () => {
    it("returns correctly up to 10", () => {
      expect(fizzBuzz(10)).toBe("1,2,fizz,4,buzz,fizz,7,8,fizz,buzz");
    });
    it("returns correctly up to 30", () => {
      expect(fizzBuzz(30)).toBe(
        "1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16,17,fizz,19,buzz,fizz,22,23,fizz,buzz,26,fizz,28,29,fizzbuzz"
      );
    });
  });
});
