//_ This problem was asked by PagerDuty.
//-> Given a positive integer N, find the smallest number of steps it will take to reach 1.
//-> There are two kinds of permitted steps:
//-> You may decrement N to N - 1.
//-> If a * b = N, you may decrement N to the larger of a and b.
//# For example, given 100, you can reach 1 in five steps with the following route: 100 -> 10 -> 9 -> 3 -> 2 -> 1.

// ###
//# Solution goes here
const num = 250;
let steps = 0;
const numArr: number[] = [num];

const stepsCalculator = (num: number): [number, number[]] => {
  if (num === 1) return [steps, numArr];

  let positiveInt: number = num;

  // Check if square
  let tempNumber = Math.sqrt(num);
  if (tempNumber % 1 === 0) {
    positiveInt = tempNumber;
    numArr.push(tempNumber);
    steps++;
    return stepsCalculator(positiveInt);
  }

  // Loop for factors
  tempNumber = Infinity;
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      const quotient = num / i;
      tempNumber =
        tempNumber > (quotient > i ? quotient : i) ? quotient : tempNumber;
    }
  }
  if (tempNumber === Infinity) {
    steps++;
    numArr.push(positiveInt - 1);
    return stepsCalculator(positiveInt - 1);
  }

  numArr.push(tempNumber);
  steps++;
  positiveInt = tempNumber;
  return stepsCalculator(positiveInt);
};

console.log(...stepsCalculator(num));
