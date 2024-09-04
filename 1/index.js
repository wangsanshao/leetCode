var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const temp = target - nums[i];
    const arr = nums.slice(i + 1);
    if (arr.includes(temp)) {
      return [i, arr.indexOf(temp) + i + 1]
    }
  }
};