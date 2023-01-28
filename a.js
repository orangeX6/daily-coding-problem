// Finding peak element in a 2D Array.

function findPeakGrid2(mat) {
  let stcol = 0,
    endcol = mat[0].length - 1; // Starting po  end po of Search Space

  while (stcol <= endcol) {
    // Bin Search Condition

    let midcol = stcol + Math.floor((endcol - stcol) / 2),
      ansrow = 0;
    // "ansrow" To keep the row number of global Peak
    // element of a column

    // Finding the row number of Global Peak element in
    // Mid Column.
    for (let r = 0; r < mat.length; r++) {
      ansrow = mat[r][midcol] >= mat[ansrow][midcol] ? r : ansrow;
    }

    // Finding next Search space will be left or right
    let valid_left =
      midcol - 1 >= stcol && mat[ansrow][midcol - 1] > mat[ansrow][midcol];
    let valid_right =
      midcol + 1 <= endcol && mat[ansrow][midcol + 1] > mat[ansrow][midcol];

    // if we're at Peak Element
    if (!valid_left && !valid_right) {
      return [ansrow, midcol];
    } else if (valid_right)
      stcol = midcol + 1; // move the search space in right
    else endcol = midcol - 1; // move the search space in left
  }

  return [-1, -1];
}

// Driver Code
let arr = [
  [30, 41, 24, 11, 24, 1],
  [23, 14, 13, 18, 45, 9],
  [14, 42, 5, 39, 41, 99],
  [11, 55, 17, 16, 11, 9],
  [30, 99, 18, 41, 45, 119],
];

let result = findPeakGrid2(arr);

console.log('Peak element found at index: ' + result[0] + ',' + result[1]);

// This code is contributed by
