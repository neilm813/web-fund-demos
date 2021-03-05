/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

const numbersA1 = [20, 10, 30];
const numbersB1 = [10, 30, 20];
const expected1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @return {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  // code here
}

// Tests
const result1 = sumArrColumns(numbersA1, numbersB1);
console.log(result1, "should equal", expected1);
