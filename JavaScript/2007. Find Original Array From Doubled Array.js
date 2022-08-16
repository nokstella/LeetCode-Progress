/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function (changed) {
  let n = changed.length;
  if (n % 2 == 1) {
    return [];
  }

  changed.sort((a, b) => a - b);

  let can = true;
  const res = [];
  const mp = new Map();
  let pair = 0;
  for (let i = 0; i < n; i++) {
    if (changed[i] % 2 == 1) {
      if (mp.has(changed[i])) {
        mp.set(changed[i], mp.get(changed[i]) + 1);
      } else {
        mp.set(changed[i], 1);
      }
    } else {
      if (mp.has(Math.floor(changed[i] / 2))) {
        if (mp.get(Math.floor(changed[i] / 2)) === 1) {
          mp.delete(Math.floor(changed[i] / 2));
        } else {
          mp.set(
            Math.floor(changed[i] / 2),
            mp.get(Math.floor(changed[i] / 2)) - 1
          );
        }
        res.push(Math.floor(changed[i] / 2));
      } else {
        if (mp.has(changed[i])) {
          mp.set(changed[i], mp.get(changed[i]) + 1);
        } else {
          mp.set(changed[i], 1);
        }
      }
    }
  }
  if (res.length === n / 2) {
    return res;
  } else {
    return [];
  }
};
