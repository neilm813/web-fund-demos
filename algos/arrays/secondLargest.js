/* 
  Array: Second-Largest

  Return the second-largest element of an array, or null if there is none.

  Bonus: do it with one loop and no nested loops
*/

const nums1 = [2, 3, 1, 4];
const expected1 = 3;

const nums2 = [3, 3];
const expected2 = null;

const nums3 = [2];
const expected3 = null;

const nums4 = [];
const expected4 = null;

/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @return {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums) {
  // code here
}

// Tests
const result1 = secondLargest(nums1);
console.log(result1, "should equal", expected1);

const result2 = secondLargest(nums2);
console.log(result2, "should equal", expected2);

const result3 = secondLargest(nums3);
console.log(result3, "should equal", expected3);

const result4 = secondLargest(nums4);
console.log(result4, "should equal", expected4);
