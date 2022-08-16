#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  int minimumOperations(vector<int>& nums) {
    set<int> st;

    for (auto x : nums) {
      if (x != 0) {
        st.insert(x);
      }
    }

    int ans = st.size();
    return ans;
  }
};