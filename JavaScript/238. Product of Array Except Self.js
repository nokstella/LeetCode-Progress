/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const pref = [...Array(nums.length)].map(() => 0);
  const suf = [...Array(nums.length)].map(() => 0);

  pref[0] = nums[0];
  suf[nums.length - 1] = nums[nums.length - 1];

  for (let i = 1; i < nums.length; i++) {
    pref[i] = pref[i - 1] * nums[i];
  }
  for (let i = nums.length - 2; i >= 1; i--) {
    suf[i] = suf[i + 1] * nums[i];
  }

  const res = [];
  for (let i = 0; i < nums.length; i++) {
    let pre = i - 1 >= 0 ? pref[i - 1] : 1;
    let su = i + 1 < nums.length ? suf[i + 1] : 1;
    res.push(pre * su);
  }
  return res;
};
