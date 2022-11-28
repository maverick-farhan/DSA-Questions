/*function romanToInt(s) {
  let total = 0;
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (values[s[i]] >= values[s[i + 1]]) {
        total += values[s[i]];
      } else {
        total -= values[s[i]];
      }
    } else {
      total += values[s[i]];
    }
  }
  return total;
}
console.log(romanToInt("CM"));
*/

var romanToInt = function (s) {
  let total = 0;
  const values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length) {
      if (values[s[i]] >= values[s[i + 1]]) {
        total += values[s[i]];
      } else {
        total -= values[s[i]];
      }
    } else {
      total += values[s[i]];
    }
  }
  return total;
};
console.log(romanToInt("CM"));
