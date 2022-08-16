#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> pref(n, 0), suf(n, 0);

    pref[0] = nums[0];
    suf[n - 1] = nums[n - 1];

    for (int i = 1; i < n; i++) {
      pref[i] = pref[i - 1] * nums[i];
    }
    for (int i = n - 2; i >= 1; i--) {
      suf[i] = suf[i + 1] * nums[i];
    }
    vector<int> res;
    for (int i = 0; i < n; i++) {
      int le = (i - 1 >= 0) ? pref[i - 1] : 1;
      int ri = (i + 1 < n) ? suf[i + 1] : 1;
      res.push_back(le * ri);
    }
    return res;
  }
};