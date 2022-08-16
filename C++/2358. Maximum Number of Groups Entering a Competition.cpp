#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  int maximumGroups(vector<int>& grades) {
    int cur = 0;
    int h = 0;
    while (cur + (h + 1) <= grades.size()) {
      cur += h + 1;
      h++;
    }
    return h;
  }
};