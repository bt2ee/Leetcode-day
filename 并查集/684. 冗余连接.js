class UnionFind {
  constructor(n) {
    this.parent = []
    this.size = []
    this.count = n
    this.init(n)
  }
  init(n) {
    let parent = this.parent
    let size = this.size
    for (let i = 0; i < n; i++) {
      parent[i] = i
      size[i] = 1
    }
  }
  find(x) {
    let parent = this.parent
    while (x != parent[x]) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    if (rootQ === rootP) {
      return
    }
    let parent = this.parent
    let size = this.size
    if (size[rootP] > size[rootQ]) {
      parent[rootQ] = rootP
      size[rootP] += size[rootQ]
    } else {
      parent[rootP] = rootQ
      size[rootQ] += size[rootP]
    }
    this.count--
  }
  connected(p, q) {
    return this.find(p) === this.find(q)
  }
}
var findRedundantConnection = function(edges) {
  let len = edges.length
  let union = new UnionFind(len)
  let rest = [];
  for (let i = 0; i < len; i++) {
    let [x, y] = edges[i]
    if (union.connected(x, y)) {
      rest.push([x, y])
    } else {
      union.union(x, y)
    }
  }
  return rest.pop()
}