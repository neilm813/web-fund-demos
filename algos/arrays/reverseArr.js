/* 
  Given an array, reverse it's items in place
  return the array after reversing it

  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b"];
const expected2 = ["b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

/**
 * Reverses the given arr in place without built in methods.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @return {Array<any>} The given arr after being reversed.
 */
function reverseArr(items) {
  // code here
}

// Tests
const result1 = reverseArr(arr1);
console.log(result1, "should be", expected1);

const result2 = reverseArr(arr2);
console.log(result2, "should be", expected2);

const result3 = reverseArr(arr3);
console.log(result3, "should be", expected3);

const result4 = reverseArr(arr4);
console.log(result4, "should be", expected4);
