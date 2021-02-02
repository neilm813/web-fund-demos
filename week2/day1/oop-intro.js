/* 
  Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
 */
function yummy(items) {
  var foundFood = false;

  for (let i = 0; i < items.length; i++) {
    var item = items[i];

    if (item === "food") {
      foundFood = true;
      console.log("yummy");
    }
  }

  if (foundFood === false) {
    console.log("I'm hungry");
  }
}

// use the name of the function to execute it, and pass in an arr to test
yummy([0, 0, 0]);
yummy([0, "yummy", 0, "yummy", 0]);

/**
 * OOP Intro, how to represent a thing that has multiple properties /
 * attributes / characteristics? Use an object.
 */

// As separate variables
var firstName = "Diane";
var lastName = "Salazar";
var hairColor = "Blonde";
var wearsGlasses = true;
var yearsCoding = 0;

var firstName2 = "Brian";
var lastName2 = "Marion";
var hairColor2 = "Brown";
var wearsGlasses2 = true;
var yearsCoding2 = 0;

// As an array of properties
var brianProperties = ["Brian", "Marion", "Brown", true, 0];

/**
 * Using an object to store the properties, aka key-value-pairs.
 * If you want to access a certain value, you need to unlock it by using
 * the correct "key" (the name of the property that is linked to the value)
 */
var dianeObject = {
  // key: value
  firstName: "Diane",
  lastName: "Salazar",
  hairColor: "Blonde",
  wearsGlasses: true,
  yearsCoding: 0,
  address: {
    city: "Irvine",
    zip: 92620,
    state: "CA",
  },
};

console.log(dianeObject);
console.log(brianProperties);

// use the key / property name to access its value
console.log(dianeObject.firstName);
console.log(dianeObject["firstName"]);

var propertyName = "lastName";

console.log(dianeObject[propertyName]);

// doesn't work, literally looks for a key called "propertyName"
// If you are using a variable to access a property value, you must use
// bracket notation.
console.log(dianeObject.propertyName);
