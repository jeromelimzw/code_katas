const fizzBuzzOne = num => {
  if (num <= 0) {
    return "stop feeding me garbage";
  }
  const ans = [];
  if (num % 3 === 0) {
    ans.push("fizz");
  }
  if (num % 5 === 0) {
    ans.push("buzz");
  }
  return ans.length === 0 ? num : ans.join("").toString();
};

const fizzBuzz = num => {
  const ans = [];
  for (let i = 1; i <= num; i++) {
    ans.push(fizzBuzzOne(i));
  }
  return ans.join();
};

module.exports = { fizzBuzzOne, fizzBuzz };
