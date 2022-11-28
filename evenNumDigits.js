/*
function findEven(arr) {
  let count = 0;
  let ans = 0;
  for (let num of arr) {
    if (even(num)) {
      count++;
    }
  }
  return count;

  function even(num) {
    count = 0;
    while (num > 0) {
      num /= 10;
      count++;
      return count;
    }
  }
}
*/
var findNumbers = function (nums) {
  return nums.reduce((s, x) => s + (1 - (("" + x).length % 2)), 0);
};

console.log(findNumbers([12, 345, 2, 63, 7895], 0));
