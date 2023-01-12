/*
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.

 

Example 1:

Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
Output: ["Shogun"]
Explanation: The only common string is "Shogun".

Example 2:
Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
Output: ["Shogun"]
Explanation: The common string with the least index sum is "Shogun" with index sum = (0 + 1) = 1.

Example 3:
Input: list1 = ["happy","sad","good"], list2 = ["sad","happy","good"]
Output: ["sad","happy"]
Explanation: There are three common strings:
"happy" with index sum = (0 + 1) = 1.
"sad" with index sum = (1 + 0) = 1.
"good" with index sum = (2 + 2) = 4.
The strings with the least index sum are "sad" and "happy".
 
*/

function findRestaurant(list1: string[], list2: string[]): string[] {
  const sum = new Map<string, number>();

  list1.forEach((el, index) => {
    if (list2.includes(el)) {
      const list2Index = list2.indexOf(el);
      sum.set(el, index + list2Index);
    }
  });

  const sumArray: string[] = [];
  let lowestVal = Infinity;
  sum.forEach((val, _) => {
    if (val < lowestVal) lowestVal = val;
  });

  sum.forEach((_, key) => {
    if (sum.get(key) === lowestVal) sumArray.push(key);
  });
  return sumArray;
}

let list1 = ['happy', 'sad', 'good'],
  list2 = ['sad', 'happy', 'good'];

console.log(findRestaurant(list1, list2));
