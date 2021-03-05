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
 * - Time: O(n) linear, n = length of either nums1 or nums2 since they will
 *    have the same length.
 * - Space: O(n) linear. The new array created will have the same length.
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @return {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  const summedCols = [];

  for (let i = 0; i < nums1.length; i++) {
    summedCols.push(nums1[i] + nums2[i]);
  }
  return summedCols;
}

// Tests
const result1 = sumArrColumns(numbersA1, numbersB1);
console.log(result1, "should equal", expected1);
