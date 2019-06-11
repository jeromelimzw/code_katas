const uniquePair = (array, target) => {
  const complement = array.map(a => target - a);
  console.log(complement);
  return complement.filter(a => a > 0);
};

module.exports = uniquePair;
