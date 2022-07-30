#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  vector<int> twoSum(vector<int> &nums, int target) {
    vector<pair<int, int>> numsWithIndex;
    for (int i = 0; i < nums.size(); i++) {
      numsWithIndex.push_back({nums[i], i});
    }
    sort(numsWithIndex.begin(), numsWithIndex.end(),
         [](pair<int, int> a, pair<int, int> b) { return a.first < b.first; });

    vector<int> res;
    int l = 0, r = numsWithIndex.size() - 1;
    while (l < r) {
      if (numsWithIndex[l].first + numsWithIndex[r].first < target) {
        l++;
      } else if (numsWithIndex[l].first + numsWithIndex[r].first > target) {
        r--;
      } else {
        res.push_back(numsWithIndex[l].second);
        res.push_back(numsWithIndex[r].second);
        break;
      }
    }
    return res;
  }
};