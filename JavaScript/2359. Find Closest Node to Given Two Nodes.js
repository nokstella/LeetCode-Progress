/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  const bfs = (v, dist) => {
    const q = new Queues();
    q.push(v);
    dist[v] = 0;
    while (!q.empty()) {
      let fr = q.front();
      q.pop();

      if (edges[fr] === -1) {
        continue;
      }
      let nex = edges[fr];
      if (dist[nex] === -1) {
        dist[nex] = dist[fr] + 1;
        q.push(nex);
      }
    }
  };

  let dist1 = [...Array(edges.length)].map((x) => -1);
  let dist2 = [...Array(edges.length)].map((x) => -1);

  bfs(node1, dist1);
  bfs(node2, dist2);

  let curAns = 100000000;
  let ans = -1;
  for (let i = 0; i < edges.length; i++) {
    if (dist1[i] !== -1 && dist2[i] !== -1) {
      let h = Math.max(dist1[i], dist2[i]);
      if (h < curAns) {
        curAns = h;
        ans = i;
      }
    }
  }
  return ans;
};

class Queues {
  constructor() {
    this.queue = [];
    this.head = -1;
    this.size = 0;
  }

  push(v) {
    this.queue.push(v);
    if (this.head === -1) {
      this.head = 0;
    }
    this.size++;
  }

  empty() {
    return this.size === 0;
  }

  pop() {
    this.head++;
    this.size--;
  }

  front() {
    return this.queue[this.head];
  }
}
