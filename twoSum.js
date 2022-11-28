function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
  return false;
}
console.log(twoSum([3, 2, 3], 6));
