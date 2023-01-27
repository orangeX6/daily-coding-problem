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

function maximalSquare(matrix: string[][]): number {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let maxSq = 0;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === '1') {
        let flag = true;
        let sqlen = 1;
        while (sqlen + r < rows && sqlen + c < cols && flag) {
          for (let k = c; k <= sqlen + c; k++) {
            if (matrix[r + sqlen][k] == '0') {
              flag = false;
              break;
            }
          }
          for (let k = r; k <= sqlen + r; k++) {
            if (matrix[k][c + sqlen] == '0') {
              flag = false;
              break;
            }
          }
          if (flag) sqlen++;
        }
        if (maxSq < sqlen) {
          maxSq = sqlen;
        }
      }
    }
  }

  return maxSq * maxSq;
}

console.log(
  maximalSquare([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
);

console.log(maximalSquare([['1']]));
