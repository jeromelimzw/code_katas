const sumString = string => {
  if (string === "") {
    return 0;
  }
  if (string.indexOf(",") === -1 && string.indexOf("\n") === -1) {
    return parseInt(string);
  }
  const arr = string.split(/[\n,]/);
  return arr.reduce((a, b) => parseInt(a) + parseInt(b));
};

module.exports = sumString;
