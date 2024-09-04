var longestOnes = function(nums, k) {
  let ans = 0;
  for(let right = 0, left = 0, oneNums = 0, zeroNums = 0; right < nums.length; right++) {
    oneNums += nums[right] === 1 ? 1 : 0
    zeroNums += nums[right] === 0 ? 1 : 0
    while(zeroNums > k) { //如果0的个数超出替换次数，则左指针右移。
      oneNums -= nums[left] === 1 ? 1 : 0
      zeroNums -= nums[left] === 0 ? 1 : 0
      left ++
    }
    ans = Math.max(ans, right - left + 1)
  }
  return ans
};

// 双指针，滑动窗口
/**
 * 右指针移动，分别记录0和1的个数，
 * 当0的个数满足小于等于k(也是就是说),
 * 当0的个数大于k时，就代表0的个数产出了替换次数，无法再移动，
 */
// 