/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0,
    ten = 0
  if (bills.length === 0) return false
  for (let bill of bills) {
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      ten++
      five--
    } else if (ten > 0) {
      ten--
      five--
    } else {
      five -= 3
    }
    if (five < 0) return false
  }
  return five >= 0
};

console.log(lemonadeChange([5, 5, 5, 5, 20, 20, 5, 5, 5, 5]))