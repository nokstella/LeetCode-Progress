#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  vector<int> findOriginalArray(vector<int>& changed) {
    sort(changed.begin(), changed.end());
    int n = changed.size();
    vector<int> res;
    if (n % 2 == 1) {
      return {};
    }

    map<int, int> mp;
    for (int i = 0; i < n; i++) {
      if (changed[i] % 2 == 1) {
        if (mp.find(changed[i]) != mp.end()) {
          mp[changed[i]]++;
        } else {
          mp[changed[i]] = 1;
        }
      } else {
        if (mp.find(changed[i] / 2) != mp.end()) {
          if (mp[changed[i] / 2] == 1) {
            mp.erase(changed[i] / 2);
          } else {
            mp[changed[i] / 2]--;
          }
          res.push_back(changed[i] / 2);
        } else {
          if (mp.find(changed[i]) != mp.end()) {
            mp[changed[i]]++;
          } else {
            mp[changed[i]] = 1;
          }
        }
      }
    }
    if (res.size() == n / 2) {
      return res;
    } else {
      return {};
    }
  }
};