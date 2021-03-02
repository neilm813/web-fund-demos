/* 
  Swap Toward the Center - Given an array, 
  swap the first and last values, third and third-to-last values, etc. 
  
  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) 
  turns the array into ["pizza", 42, "Ada", 2, true]. 

  ["a", "b", "c", "d", "e", "f"]
  ["f", "b", "d", "c", "e", "a"]
*/

function swapTowardCenter(items) {
  for (let i = 0; i < Math.floor(items.length / 2); i += 2) {
    var leftIdx = i;
    var rightIdx = items.length - 1 - i;
    var temp = items[leftIdx];

    items[leftIdx] = items[rightIdx];
    items[rightIdx] = temp;
  }

  console.log(items);
}

swapTowardCenter(["a", "b", "c", "d", "e", "f"]);

function swapTowardCenterDestructure(items) {
  for (let i = 0; i < Math.floor(items.length / 2); i += 2) {
    var leftIdx = i;
    var rightIdx = items.length - 1 - i;

    [items[leftIdx], items[rightIdx]] = [items[rightIdx], items[leftIdx]];
  }

  console.log(items);
}
