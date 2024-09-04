var maxProduct = (nums) => {
  // 初始的最大乘积和最小乘积都是第一个元素
  let res = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i] // 最小乘积
    temp2 = prevMax * nums[i] // 最大乘积
    // 临时变量是前i-1的乘积和i的乘积, 因为有负数，所以会储存最大乘积和最小乘积
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    res = Math.max(prevMax, res) // 最大乘积
  }
  return res
}