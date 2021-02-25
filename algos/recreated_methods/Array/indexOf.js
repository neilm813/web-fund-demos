/* 
  Given an array and an item to search for,
  return the index where the item is found,

  return -1 to represent not found
  */

const arr1 = ["a", "b", "c"];
const searchItem1 = "c";
const expected1 = 2;

const arr2 = ["a", "b", "c"];
const searchItem2 = 5;
const expected2 = -1;

const arr3 = ["c", "a", "b", "c"];
const searchItem3 = "c";
const expected3 = 0;

const arr4 = [];
const searchItem4 = 5;
const expected4 = -1;

/**
 * Finds and the index from the given array where the given item is found.
 * - Time: O(n) linear, n = arr.length. Worst case is the item is at the last
 *    index so the whole array is looped through.
 * - Space: O(1) constant. This algo doesn't need to take up more
 *    space / memory as the input array grows in size.
 * @param {Array<any>} arr
 * @param {any} searchItem The item to find.
 * @return {number} The index of found item, or -1 if not found.
 */
function indexOf(arr, searchItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchItem) {
      return i;
    }
  }
  return -1;
}

function indexOf2(arr, searchItem) {
  let foundIdx = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchItem) {
      foundIdx = i;
      break;
    }
  }
  return foundIdx;
}

// Tests
const result1 = indexOf(arr1, searchItem1);
console.log(result1, "should be", expected1);

const result2 = indexOf(arr2, searchItem2);
console.log(result2, "should be", expected2);

const result3 = indexOf(arr3, searchItem3);
console.log(result3, "should be", expected3);

const result4 = indexOf(arr4, searchItem4);
console.log(result4, "should be", expected4);
