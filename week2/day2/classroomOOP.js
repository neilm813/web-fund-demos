/**
 * OOP
 * Lets represent a classroom in our code. We have an instructor and a class
 * hosted at a zoom link and a list of attendees.
 *
 * There are multiple classrooms going on, each with their own instructor and
 * attendees.
 */

/**
 * How can we represent a complex thing in code? Some thing that has multiple
 * attributes / properties / characteristics. We call these "things" objects.
 *
 * If we don't use an object in code, we don't have a great way to organize
 * all of the properties that are part of a single object.
 */

// Plain object, not using a class.
var classroomObject = {
  instructor: "Neil",
  topic: "Object Oriented Programming",
  attendees: ["Diane", "David", "Brandon"],
  zoomLink:
    "https://codingdojo.zoom.us/j/94752680219?pwd=c1U1S0FtU3p0RHgxVzJ5dWx4ZnMrdz09",

  // long-form method syntax
  printMessage: function () {
    console.log(
      "I am a method, which is a function side of an object stored as a key value pair."
    );
  },

  // shorthand method syntax
  printAttendees() {
    /**
     * A function inside an object is called a method. The this keyword for
     * methods usually will refer to the object that the method is inside of.
     */
    for (let i = 0; i < this.attendees.length; i++) {
      var attendee = this.attendees[i];
      console.log(attendee);
    }
  },
};

// classroomObject.printAttendees();
// classroomObject.printMessage();

/**
 * A class to represent a template or blueprint for how to construct a new
 * person object.
 */
class Person {
  constructor(firstName, lastName, yearsCoding) {
    // set the values of "this" new object's properties to be equal to the
    // parameter's values.
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsCoding = yearsCoding;
  }

  /**
   * Methods go after the constructor. Methods are shared between all instances
   * of this class.
   */
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

var brandon = new Person("Brandon", "Marchione", 0);
var diane = new Person("Diane", "Salazar", 0);

/**
 * A class to represent a template or blueprint for how to construct a new
 * classroom object.
 */
class Classroom {
  constructor(instructor, topic, zoomLink, attendees = []) {
    this.instructor = instructor;
    this.topic = topic;
    this.zoomLink = zoomLink;
    this.attendees = attendees;
  }

  printAttendees() {
    /**
     * A function inside an object is called a method. The this keyword for
     * methods usually will refer to the object that the method is inside of.
     */
    for (let i = 0; i < this.attendees.length; i++) {
      var attendee = this.attendees[i];
      console.log(attendee.fullName());
    }
  }

  avgAttendeesCodeExperience() {
    var totalYearsCoding = 0;

    for (let i = 0; i < this.attendees.length; i++) {
      var attendee = this.attendees[i];
      totalYearsCoding += attendee.yearsCoding;
    }

    return totalYearsCoding / this.attendees.length;
  }
}

var neilsClassroom = new Classroom(
  new Person("Neil", "M", 5),
  "OOP",
  "https://codingdojo.zoom.us/j/94752680219?pwd=c1U1S0FtU3p0RHgxVzJ5dWx4ZnMrdz09",
  [new Person("Stephen", "Parks", 1), new Person("Jesus", "Sandoval", 3)]
);

var codysClassroom = new Classroom(
  new Person("Cody", "T", 5),
  "Arrays",
  "https://codingdojo.zoom.us/j/94752680219?pwd=c1U1S0FtU3p0RHgxVzJ5dWx4ZnMrdz09",
  [new Person("Foo", "Bar", 2), new Person("Jayne", "Doe", 0)]
);

// console.log(neilsClassroom);
// console.log(neilsClassroom.attendees);
// neilsClassroom.printAttendees();
// codysClassroom.printAttendees();

// console.log(neilsClassroom.avgAttendeesCodeExperience());
// console.log(codysClassroom.avgAttendeesCodeExperience());

/* Document Object Model (DOM) */
// let title = document.getElementById("title");
// title.innerText = "Dope Classrooms";
// title.style.backgroundColor = "rgb(219, 96, 103)";
// console.log(title.style.backgroundColor);

// Creating HTML as a string then adding it to page.
// let classRoomHeadingStr = `<h2>${neilsClassroom.topic} 2</h2>`;
// document.body.insertAdjacentHTML("afterend", classRoomHeadingStr);

// Creating HTML as an object then adding it to page.

function buildClassroomHtml(classroom) {
  let classRoomContainer = document.createElement("div");

  classRoomContainer.classList.add("classroom");

  let classRoomHeading = document.createElement("h2");
  classRoomHeading.innerText = classroom.topic;
  classRoomContainer.appendChild(classRoomHeading);

  let zoomAnchorTag = document.createElement("a");
  zoomAnchorTag.innerText = "Join Zoom";
  zoomAnchorTag.href = classroom.zoomLink;
  classRoomContainer.appendChild(zoomAnchorTag);

  let classroomRow = document.getElementById("classroom-row");
  classroomRow.appendChild(classRoomContainer);

  // pass two arguments to the addEventListener method
  // first is what kind of event we want to listen for
  // second is what function we want executed when the event happens
  classRoomContainer.addEventListener("click", function () {
    this.classList.toggle("selected-classroom");
    classRoomHeading.classList.toggle("invisible");
  });
}

// buildClassroomHtml(neilsClassroom);
// buildClassroomHtml(codysClassroom);

/**
 * Pretend this is an array of classroom data that was retrieved from a
 * database of all the current classrooms.
 */
let allClassrooms = [neilsClassroom, codysClassroom];

for (let i = 0; i < allClassrooms.length; i++) {
  buildClassroomHtml(allClassrooms[i]);
}
