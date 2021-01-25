/**
 * The let or var keyword are used to create (define) a new variable.
 * Next comes what we want the variable to be named.
 * After the equal sign is the initial value to store in the variable.
 * Here we are storing multiple characters strung together (a string).
 */
var box = "hello";

// Print out the contents of our variable.
console.log(box); // prints "hello"

/**
 * Notice we don't use the let keyword again b/c the var already exists.
 * Now since we use the equal sign on a variable that already exists, we are
 * re-assigning it. Replace the string that is in the box with the number 10.
 */
box = 10;
console.log(box); // 10

/**
 * A variable can "kind of" contain one thing at a time. If you want to store
 * multiple pieces of data, you have to use an array data-structure. However,
 * the variable is still storing one thing at a time in that it is storing
 * a single array, but the array contains multiple items.
 *
 * Square brackets mean array. An array is a list of items.
 */
box = [15, "hello"];
console.log(box);

var itemAtIdx1 = box[1];
console.log(itemAtIdx1);

/* OPERATORS */

var wallet = 20;
wallet = wallet - 10; // wallet = 20 - 10
console.log(wallet, "wallet minus 10"); // 10

wallet -= 10; // shorthand wallet = 20 - 10
console.log(wallet, "wallet minus 10 again");

/* OPERATORS & STRINGS */

// Can't do addition on the word "hi" and the number 5, so 5 gets "coerced"
// into a string so it can be combined as a string (concatenation)
var message = "hi";
message += 5;
console.log(message); // "hi5"

// concatenate two strings
message = "hello";
message += " world";
console.log(message); // "hello world"

message = "10";
message += 5;
console.log(message); // "105"

message -= 5;
/**
 * This time it was able to interpret the math we wanted to do and so it
 * converted (coerced) our string "105" into the integer 105 so it could
 * subtract the integer 5 from it to give us the integer result of 100.
 *
 * This doesn't work the same as += when one of the operands is a string,
 * because it thinks you are trying to concatenate strings instead of doing
 * math.
 */
console.log(message);

/* COMPARISONS & CONDITIONS */
console.log("5" == 5); // true, compares only values
console.log("5" === 5); // false, compares BOTH values & data type

var x = 20;
var y = 10;

// Each of these conditions evaluates to a true or a false, except the else
// which is a catch-all if none of the above are true.
if (x === y) {
  console.log("x equal to y");
} else if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is less than y");
}

// Logical AND operator. Evaluates to a true or a false.
if (x > 5 && y > 5) {
  console.log("x AND y are BOTH greater than 5");
} else {
  console.log(
    "x and y are not BOTH greater than 5, which leaves every other possible combination."
  );
}

// Logical OR operator. Evaluates to a true or a false.
if (x > 5 || y > 5) {
  console.log("At least one of x or y are greater than 5, maybe both.");
} else {
  console.log("Neither x or y are greater than 5.");
}

if (x) {
  console.log(
    "x is 'truthy'. It is exactly true or true-ish. It is a non-empty value. It is not 0, not an empty string, not null, not undefined, etc."
  );
} else {
  console.log(
    "x is 'falsy'. It is exactly false or 'false-ish', such as 0, null, or an empty string."
  );
}

// An array of strings.
var names = ["Rick", "Morty", "Jerry"];

// Execute the push method / function built-in to arrays to add an item to back.
names.push("Beth");
console.log(names.length);

names.pop(); // removes the last item from the array
console.log(names);

// LOOPS

/**
 * Loop over the array to visit ever item, 1-by-1. This is just like what you
 * do when you literally read a list of names from start to finish 1-by-1.
 * You look at the first one, then the second, repeat until the end.
 *
 * Create a var called i to keep track of what index in the array we are
 * looking at. Repeat while i < the length of the array.
 * Increment i to the next index after each iteration of the loop.
 */
for (let i = 0; i < names.length; i++) {
  var currentName = names[i];
  console.log(currentName);
}

// The same thing written as a while loop instead of a for loop.
var idx = 0;

while (idx < names.length) {
  var currentName = names[idx];
  console.log(currentName);
  idx++;
}
