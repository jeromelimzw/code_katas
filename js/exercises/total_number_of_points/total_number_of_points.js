const calculateOneMatch = match => {
  const [x, y] = match.split(":");
  if (x > y) {
    return 3;
  }
  if (x < y) {
    return 0;
  }
  return 1;
};

const calculateAllMatch = matches => {
  return matches.map(a => calculateOneMatch(a)).reduce((a, b) => a + b);
};

module.exports = { calculateOneMatch, calculateAllMatch };
