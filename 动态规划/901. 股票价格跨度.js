var StockSpanner = function() {
  this.data = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  let base = 1,
    offset = this.data.length - 1;
  while (offset >= 0 && price >= this.data[offset]["price"]) {
    base += this.data[offset]["offset"];
    offset -= this.data[offset]["offset"];
  }
  this.data.push({ price: price, offset: base });
  return base;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */