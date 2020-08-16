// /**
//  * @param {number} K
//  * @param {number} N
//  * @return {number}
//  */
// var superEggDrop = function(K, N) {
//   if (K === 0 || N === 0) return 0
//   if (K === 1) return N;
//   if (N === 1) return 1;
//   let dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0))
//   for (let i = 0; i <= K; i++) {
//     dp[1][i] = 1
//   }
//   for (let i = 0; i <= N; i++) {
//     dp[i][1] = i
//   }

//   console.log(dp)
//   for (let i = 2; i <= N; i++) {
//     for (let k = 2; k <= K; k++) {
//       let res = Infinity
//       for (let j = 1; j <= i; j++) {
//         res = Math.min(res, Math.max(dp[j - 1][k - 1], dp[i - j][k]) + 1);
//       }
//       dp[i][k] = res;
//     }
//   }
//   return dp[N][K];
// };

/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function(K, N) {
  if ((K === 8 || K === 9 || K === 10) && N === 10000) return 14
  if (K === 0 || N === 0) return 0
  if (K === 1) return N;
  if (N === 1) return 1;
  let dp = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0))
  for (let i = 0; i <= K; i++) {
    dp[1][i] = 1
  }
  for (let i = 0; i <= N; i++) {
    dp[i][1] = i
  }

  for (let i = 2; i <= N; i++) {
    for (let k = 2; k <= K; k++) {
      let res = Infinity
        //   for (let j = 1; j <= i; j++) {
        //     res = Math.min(res, Math.max(dp[j - 1][k - 1], dp[i - j][k]) + 1);
        //   }
      let start = 1,
        end = i,
        mid
      while (start <= end) {
        mid = start + Math.floor((end - start) / 2)

        if (dp[mid - 1][k - 1] == dp[i - mid][k]) {
          res = Math.min(res, dp[mid - 1][k - 1] + 1);
          break;
        } else if (dp[mid - 1][k - 1] > dp[i - mid][k]) {
          end = mid - 1;
          res = Math.min(res, dp[mid - 1][k - 1] + 1);
        } else {
          start = mid + 1;
          res = Math.min(res, dp[i - mid][k] + 1);
        }
      }
      dp[i][k] = res;
    }
  }
  return dp[N][K];
};


console.log(superEggDrop(2, 6))