/*
Given an unsorted integer array nums, find the smallest missing positive integer.
Input: An unsorted array of integers nums[] which may contain both positive and negative numbers.
Output: Return the smallest missing positive integer.

Example:
Input: [1, 2, 0]
Output: 3
Explanation: The numbers 1 and 2 are present, so the smallest missing positive integer is 3.

Input: [3, 4, -1, 1]
Output: 2
Explanation: The smallest missing positive integer is 2.

Input: [7, 8, 9, 11, 12]
Output: 1
Explanation: The smallest missing positive integer is 1 since none of the positive integers starting from 1 are present.
*/


function firstMissingPositive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 0 || nums[i] > nums.length) {
      nums[i] = nums.length + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    let num = Math.abs(nums[i]);
    if (num <= nums.length) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;
}

console.log(firstMissingPositive([3, 4, -1, 1]));

module.exports = firstMissingPositive;