/*
A peak element in a 2D grid is an element that is strictly greater than all of its adjacent neighbors to the left, right, top, and bottom.

Given a 0-indexed m x n matrix mat where no two adjacent cells are equal, find any peak element mat[i][j] and return the length 2 array [i,j].

You may assume that the entire matrix is surrounded by an outer perimeter with the value -1 in each cell.

You must write an algorithm that runs in O(m log(n)) or O(n log(m)) time.

 

Example 1:



Input: mat = [[1,4],[3,2]]
Output: [0,1]
Explanation: Both 3 and 4 are peak elements so [1,0] and [0,1] are both acceptable answers.
Example 2:



Input: mat = [[10,20,15],[21,30,14],[7,16,32]]
Output: [1,1]
Explanation: Both 30 and 32 are peak elements so [1,1] and [2,2] are both acceptable answers.
 
*/

function findPeakGrid(mat: number[][]): number[] {
  const flatMat = mat.flat();
  const index = flatMat.indexOf(Math.max(...flatMat));

  const m = Math.floor(index / mat[0].length);
  const n = index % mat[0].length;
  return [m, n];
}

// function findPeakGrid(mat: number[][]): number[] {
//   const maxNum = Math.max(...mat.flat());

//   for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat[0].length; j++) {
//       if (mat[i][j] === maxNum) return [i, j];
//     }
//   }
//   return [0, 0];
// }

console.log(
  findPeakGrid([
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32],
  ])
);

console.log(
  findPeakGrid([
    [48, 36, 35, 17, 48],
    [38, 28, 38, 26, 24],
    [15, 9, 33, 32, 6],
    [49, 4, 8, 10, 41],
  ])
);

console.log(
  findPeakGrid([
    [41, 8, 2, 48, 18],
    [16, 15, 9, 7, 44],
    [48, 35, 6, 38, 28],
    [3, 2, 14, 15, 33],
    [39, 36, 13, 46, 42],
  ])
);

console.log(
  findPeakGrid([
    [1, 4],
    [3, 1],
  ])
);

console.log(
  findPeakGrid([
    [
      55, 77, 9, 50, 49, 77, 60, 68, 33, 71, 2, 88, 93, 15, 88, 69, 97, 35, 99,
      83, 44, 15, 38,
    ],
    [
      56, 21, 59, 1, 93, 34, 65, 98, 23, 65, 14, 81, 39, 82, 65, 78, 26, 20, 48,
      98, 21, 70, 100,
    ],
    [
      68, 1, 77, 42, 63, 3, 15, 47, 40, 31, 8, 31, 73, 11, 94, 63, 9, 98, 69,
      99, 17, 85, 61,
    ],
    [
      71, 22, 34, 68, 78, 55, 28, 70, 97, 94, 89, 26, 92, 40, 52, 86, 84, 48,
      57, 67, 58, 16, 32,
    ],
    [
      29, 9, 44, 3, 76, 71, 30, 76, 29, 1, 10, 91, 81, 8, 30, 9, 5, 43, 10, 66,
      31, 36, 86,
    ],
    [
      63, 28, 70, 17, 93, 74, 61, 32, 61, 53, 25, 13, 85, 56, 46, 55, 53, 60,
      94, 7, 87, 84, 83,
    ],
    [
      13, 8, 52, 94, 44, 14, 32, 25, 69, 58, 18, 55, 24, 36, 60, 32, 10, 57, 71,
      13, 7, 70, 2,
    ],
  ])
);
