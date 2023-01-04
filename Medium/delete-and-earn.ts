/*
You are given an integer array nums. You want to maximize the number of points you get by performing the following operation any number of times:

Pick any nums[i] and delete it to earn nums[i] points. Afterwards, you must delete every element equal to nums[i] - 1 and every element equal to nums[i] + 1.
Return the maximum number of points you can earn by applying the above operation some number of times.

 

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: You can perform the following operations:
- Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
- Delete 2 to earn 2 points. nums = [].
You earn a total of 6 points.
Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: You can perform the following operations:
- Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
- Delete a 3 again to earn 3 points. nums = [3].
- Delete a 3 once more to earn 3 points. nums = [].
You earn a total of 9 points.
 
*/

function deleteAndEarn(nums: number[]): number {
  const numberMap = new Map();
  nums.sort((a: number, b: number) => a - b);

  for (let i = 0; i < nums.length; i++) {
    numberMap.has(nums[i])
      ? numberMap.set(nums[i], numberMap.get(nums[i]) + nums[i])
      : numberMap.set(nums[i], nums[i]);
  }
  console.log(numberMap);

  const min: number = nums.at(0) || 0;
  const max: number = nums.at(-1) || 0;

  let cur = 0,
    prev = 0,
    value = 0;
  for (let i = min; i < max + 1; i++) {
    cur = value + (numberMap.get(i) ?? 0); // 2 5 12
    value = Math.max(value, prev); // 2 5 12
    prev = cur; // 2 5 12
  }

  return Math.max(value, cur);
}

console.log(deleteAndEarn([4, 2, 3, 4, 4, 6, 7]));
