/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let st = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) st.add(nums[i]);
  }
  return st.size;
};
