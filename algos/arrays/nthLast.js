/* 
  Given an array and an int which represents the position starting from the back,
  return the nth-to-last element
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

/**
 * Retrieves the nth to last index from the given array.
 * - Time: O(1) constant. No loops so the size of the array doesn't increase
 *    the time our function will take.
 * - Space: O(1) constant.
 * @param {Array<any>} arr
 * @param {number} nthToLast
 * @return {any} The item at the nthToLast index or null.
 */
function nthLast(arr, nthToLast) {
  let idx = arr.length - nthToLast;

  if (idx >= 0 && idx < arr.length) {
    return arr[idx];
  } else {
    return null;
  }
}
