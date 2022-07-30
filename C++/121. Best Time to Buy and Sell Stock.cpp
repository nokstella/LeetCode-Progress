#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  int maxProfit(vector<int> &prices) {
    int currentMin = 1e9;
    int ans = 0;
    for (auto x : prices) {
      ans = max(ans, x - currentMin);
      currentMin = min(currentMin, x);
    }
    return ans;
  }
};