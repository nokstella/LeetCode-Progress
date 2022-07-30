/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let m = [];
  for (let i = 0; i < nums.length; i++) {
    m.push({ index: i, value: nums[i] });
  }

  m.sort((a, b) => a.value - b.value);

  let i = 0;
  let j = nums.length - 1;
  let res = [];
  while (i < j) {
    if (m[i].value + m[j].value < target) {
      i++;
    } else if (m[i].value + m[j].value > target) {
      j--;
    } else {
      res.push(m[i].index);
      res.push(m[j].index);
      break;
    }
  }
  return res;
};
