const max_middle = (N: number, K: number, arr: number[]): Number => {
  let low = (N + 1 - K) / 2; //5 + 1 - 2 /2 = 3  | 10 - 4 / 2 = 3
  let high = (N + 1 - K) / 2 + K; // 5 +1 - 2 / 2 + 2 = 5 | 7 / 2 + 4 = 8
  let max = -99;
  for (let index = low - 1; index < high; index++) {
    let num = arr[index];
    max = Math.max(max, num);
  }
  return max;
};

console.log(max_middle(5, 2, [42, 4, 7, 46, 23]));
console.log(max_middle(9, 4, [42, 4, 77, 46, 7, 88, 9, 23, 1]));
