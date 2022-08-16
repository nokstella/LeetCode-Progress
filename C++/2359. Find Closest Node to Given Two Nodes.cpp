#include <bits/stdc++.h>

using namespace std;

class Solution {
 public:
  int closestMeetingNode(vector<int>& edges, int node1, int node2) {
    int n = edges.size();
    vector<int> dist1(n, -1), dist2(n, -1);

    auto bfs = [&](int v, vector<int>& dist) {
      dist[v] = 0;
      queue<int> q;
      q.push(v);
      while (!q.empty()) {
        int fr = q.front();
        q.pop();

        if (edges[fr] == -1) {
          continue;
        }
        int nex = edges[fr];
        if (dist[nex] == -1) {
          dist[nex] = dist[fr] + 1;
          q.push(nex);
        }
      }
    };

    bfs(node1, dist1);
    bfs(node2, dist2);

    int curAns = 10000000;
    int ans = -1;
    for (int i = 0; i < n; i++) {
      if (dist1[i] != -1 && dist2[i] != -1) {
        int h = max(dist1[i], dist2[i]);
        if (h < curAns) {
          curAns = h;
          ans = i;
        }
      }
    }
    return ans;
  }
};