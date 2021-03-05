/*
  Input: a 2 dimensional array of integers
  Output: A 1 dimensional array of all the same elements preserving original order
*/

// this given array has a length of 3 because it has 3 arrays as items
const twoDimArr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const expected1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const twoDimArr2 = [[1], [2], [3]];
const expected2 = [1, 2, 3];

const twoDimArr3 = [[], [], [10, 20]];
const expected3 = [10, 20];

/**
 * Flattens a two dimensional array into a new one dimensional array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<any>>} twoDimArr An array of arrays of any data type.
 * @return {Array<any>} The flattened array that should be one dimensional.
 */
function flatten2dArray(twoDimArr) {
  // code here
}

// Tests
const result1 = flatten2dArray(twoDimArr1);
console.log(result1, "should equal", expected1);

const result2 = flatten2dArray(twoDimArr2);
console.log(result2, "should equal", expected2);

const result3 = flatten2dArray(twoDimArr3);
console.log(result3, "should equal", expected3);
