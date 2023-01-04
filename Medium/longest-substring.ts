/*
_ Given a string s, find the length of the longest substring without repeating characters.

->Example 1:

>> Input: s = "abcabcbb"
>> Output: 3
>> Explanation: The answer is "abc", with the length of 3.

->> Example 2:
>> Input: s = "bbbbb"
>> Output: 1
>> Explanation: The answer is "b", with the length of 1.

->> Example 3:
>> Input: s = "pwwkew"
>> Output: 3
>> Explanation: The answer is "wke", with the length of 3.
>> Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

// function lengthOfLongestSubstring(s: string): number {
//   let count = 0;
//   let substring: string[] = [];

//   for (let i = 0; i < s.length; i++) {
//     if (substring.includes(s[i])) {
//       count = Math.max(count, substring.length);
//       substring.splice(0, substring.indexOf(s[i]) + 1);
//     }
//     substring.push(s[i]);
//   }

//   count = Math.max(count, substring.length);
//   return count;
// }

function lengthOfLongestSubstring(s: string): number {
  let window = 0;
  let count = 0;
  let map: Map<string, number> = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      window = Math.max(window, map.get(s[i])! + 1);
    }

    map.set(s[i], i);
    count = Math.max(count, i - window + 1);
  }

  return count;
}

console.log(lengthOfLongestSubstring('abba'));
