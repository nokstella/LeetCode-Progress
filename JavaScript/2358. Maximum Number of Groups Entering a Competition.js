/**
 * @param {number[]} grades
 * @return {number}
 */
var maximumGroups = function (grades) {
  let cur = 0;
  let h = 0;
  while (cur + h + 1 <= grades.length) {
    cur += h + 1;
    h++;
  }
  return h;
};
