module.exports = function reverse (n) {
  let s = n.toString();
  let i = s.length - 1;
  let result = '';
  while (i >= 0) {
    if (s[i] !== '-') {
      result = result + s[i];
      i = i - 1;
    } else {
      i = i - 1;
    }
  }
  return result * 1;
}
