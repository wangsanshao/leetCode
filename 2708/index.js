var maxStrength = function(nums) {
  let mn = nums[0]; let mx = nums[0];
  for(let i = 1; i < nums.length; i++) {
    const temp = mn;
    mn = Math.min(mn, nums[i], mn * nums[i], mx * nums[i])
    mx = Math.max(mx, nums[i], temp * nums[i], mx * nums[i])
  }
  return mx
};

const result = maxStrength([3,-1,-5,2,5,-9])
console.log(result)

/**
 * 一开始最大乘积和最小乘积都是第一个元素
 * 遍历数组，把最小乘积存临时变量，
 * mn 从nums[0]到nums[i-1] 的最小乘积
 * nums[i] 当前元素
 * mn * nums[i] nums[0]到nums[i]的乘积
 * mx * nums[i] nums[0]到nums[i]的乘积
 * 
 * 
 * 原理方法
 * 最小乘积是负数的时候，再乘当前元素，如果当前元素是负数则就是最大乘积了，如果当前元素是正数则就是最小乘积了
 * 最小乘积是正数的时候，再乘当前元素，如果当前元素是负数则就是最小乘积了，如果当前元素是正数则就是最大乘积了
 * 
 * 所以最大乘积也是依赖最小乘积的，最小乘积也是依赖最大乘积的
 * 
 * 最终 最小乘积的公式为 min(mn,x,mn⋅x,mx⋅x)
 * 最大乘积的公式为 max(mx,x,mn⋅x,mx⋅x)
 *  
 */