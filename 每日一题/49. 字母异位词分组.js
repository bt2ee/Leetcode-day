/**
 * @param {string[]} strs
 * @return {string[][]}
 * 排序法
 */
var groupAnagrams = function(strs) {
  const table = {}

  function sort(str) {
    return str.split("").sort().join("");
  }
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const sortStr = sort(str)
    if (table[sortStr]) {
      table[sortStr].push(str)
    } else {
      table[sortStr] = [str]
    }
  }
  return Object.values(table)
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 二进制
 */
var groupAnagrams = function(strs) {
  const hashTable = {};
  for (let str of strs) {
    let arr = new Array(26).fill(0)
    for (let i = 0; i < str.length; i++) {
      arr[str.codePointAt(i) - "a".codePointAt()]++;
    }
    const key = arr.join();
    if (hashTable[key]) {
      hashTable[key].push(str);
    } else {
      hashTable[key] = [str];
    }
  }
  return Object.values(hashTable);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 质数法
 */
var groupAnagrams = function(strs) {
  const hashTable = {};
  for (let str of strs) {
    const hash = str.split("").reduce((sum, s) => {
      return sum * [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103][s.charCodeAt(0) - 97]
    }, 1);
    hashTable[hash] ? hashTable[hash].push(str) : hashTable[hash] = [str];
  }
  return Object.values(hashTable);
};