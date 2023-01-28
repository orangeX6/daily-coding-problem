/*
Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

 

Example 1:


Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
Example 2:


Input: matrix = [["0","1"],["1","0"]]
Output: 1
Example 3:

Input: matrix = [["0"]]
Output: 0
 

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.

*/

function maximalSquare2(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = rows > 0 ? matrix[0].length : 0;

  let maxSq = 0;
  let dpMat = Array(matrix.length + 1).fill(
    Array(matrix[0].length + 1).fill(0)
  );

  console.log(dpMat);

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dpMat[i][j] =
          Math.min(dpMat[i][j - 1], dpMat[i - 1][j], dpMat[i - 1][j - 1]) + 1;
        console.log(dpMat[i][j], dpMat[i - 1][j], dpMat[i - 1][j - 1]);
        maxSq = Math.max(maxSq, dpMat[i][j]);
      }
    }
  }

  // console.log(dpMat);

  return maxSq * maxSq;
}

console.log(
  maximalSquare2([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);

console.log(maximalSquare2([['1']]));

// maxsqlen = Math.max(maxsqlen, dp[i][j]);
