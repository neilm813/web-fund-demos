/**
 * Storing information about a single person as separate variables. THe problem
 * is they are all separate, so it's hard to pass the data around as a single
 * object, especially when we want to keep track of a lot of info.
 */
var hairColor = "Black";
var isCool = false;
var name = "Emerson";

var hairColor2 = "Baseball Cap On Backwards";
var isCool2 = true;
var name2 = "Jake";

/**
 * Store the info of a single person in a single array so it is "collection".
 *
 * Indexes:
 * 0 = Hair Color
 * 1 = isCool
 * 2 = name
 */
var person1 = ["Black", false, "Emerson"];
var person2 = ["Baseball Cap On Backwards", true, "Jake"];

/**
 * Use an object instead so we can label each piece of info rather than having
 * to remember an index and what kind of info is at that index.
 *
 * Objects are in the key-value-pair format, key is AKA Property, Attribute.
 *
 * In order to access some info in an object, you need to use the right key to
 * unlock the info you want.
 *
 * Objects are sometimes referred to with the word "table" because the
 * key-value-pairs (KVPs) can be represented in a column-row format.
 */
var personObj1 = {
  hairColor: "Black",
  isCool: false,
  name: "Emerson",
};

console.log(person1[0]);
console.log(personObj1.hairColor);
// Reassign idx item in array
person1[0] = "Blue";

// Reassign a value for a particular key in the object.
personObj1.hairColor = "Blue";

// Add a new key value pair
personObj1.isBearded = true;

console.log(personObj1);

var print = console.log;

print("Hello world");
