/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
  if (N < 10) return N;
  let str = N + "";
  const len = str.length;
  let index = -1;
  for (let i = 1; i < len; i++) {
    if (str[i] < str[i - 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) return N;
  const last = Array(len - index)
    .fill(9)
    .join("");
  const pre = monotoneIncreasingDigits(Number(str.slice(0, index)) - 1);
  return Number(pre + last);
};