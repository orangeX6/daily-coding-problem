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
