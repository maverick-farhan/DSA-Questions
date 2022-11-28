var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    left += 1;
    right -= 1;
  }

  return s;
};

console.log(reverseString(["H", "E", "L", "L", "O"]));
