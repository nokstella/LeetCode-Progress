#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  bool isPalindrome(int x) {
    if (x < 0) {
      return false;
    }

    vector<int> v;
    while (x > 0) {
      v.push_back(x % 10);
      x /= 10;
    }

    bool isPalin = true;
    int len = v.size();
    for (int i = 0; i < len / 2; i++) {
      if (v[i] != v[len - i - 1]) {
        isPalin = false;
        break;
      }
    }
    return isPalin;
  }
};