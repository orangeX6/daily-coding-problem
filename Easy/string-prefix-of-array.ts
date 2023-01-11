/*
Given a string s and an array of strings words, determine whether s is a prefix string of words.

A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

Return true if s is a prefix string of words, or false otherwise.

 

Example 1:

Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
Output: true
Explanation:
s can be made by concatenating "i", "love", and "leetcode" together.
Example 2:

Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
Output: false
Explanation:
It is impossible to make s using a prefix of arr.
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
1 <= s.length <= 1000
words[i] and s consist of only lowercase English letters
*/

function isPrefixString(s: string, words: string[]): boolean {
  let wordsStr = '';
  let window = 0;

  for (let i = 0; i < words.length; i++) {
    if (s.slice(window, words[i].length + window) === words[i]) {
      wordsStr = wordsStr.concat(words[i]);
    }
    window += words[i].length;
    if (s.slice(0, window) !== wordsStr) return false;
  }

  return wordsStr === s;
}

// let s = 'a';
// let words = ['aa', 'aaa', 'fjaklfj'];

let s = 'iloveleetcode';
let words = ['i', 'love', 'leetcode', 'apples'];

console.log(isPrefixString(s, words));
