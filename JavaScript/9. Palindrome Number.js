/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const strForm = x.toString();

  const len = strForm.length;
  let isPalin = true;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (strForm[i] !== strForm[len - i - 1]) {
      isPalin = false;
      break;
    }
  }
  return isPalin;
};
