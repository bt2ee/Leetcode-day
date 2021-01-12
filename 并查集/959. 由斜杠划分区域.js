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
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]]
      x = parent[x]
    }
    return x
  }
  union(p, q) {
    let rootP = this.find(p)
    let rootQ = this.find(q)
    if (rootP === rootQ) {
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
}

// [
//   "//",
//   "/ "
// ]

// grid.length = 2
// grid[0].length = 2
// total = 4

var regionsBySlashes = function(grid) {
  let total = grid.length * grid[0].length
  let union = new UnionFind(total * 4);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let current = grid[i][j]
      let top = i - 1 >= 0 ? grid[i - 1][j] : null
      let left = j - 1 >= 0 ? grid[i][j - 1] : null
      let index = i * grid[0].length + j
      switch (current) {
        case ' ':
          union.union(index * 4 + 0, index * 4 + 1);
          union.union(index * 4 + 1, index * 4 + 2);
          union.union(index * 4 + 2, index * 4 + 3);
          union.union(index * 4 + 3, index * 4 + 0);
          break
        case '/':
          union.union(index * 4 + 1, index * 4 + 2);
          union.union(index * 4 + 0, index * 4 + 3);
          break;
        case '\\':
          union.union(index * 4 + 0, index * 4 + 1);
          union.union(index * 4 + 2, index * 4 + 3);
          break;
      }
      if (top) { // 连接当前方块和上边的方块
        let topIndex = index - grid[0].length;
        union.union(index * 4 + 0, topIndex * 4 + 2);
      }
      if (left) { // 连接当前方块和左边的方块
        let leftIndex = index - 1;
        union.union(index * 4 + 3, leftIndex * 4 + 1);
      }
    }
  }
  return union.count;
}