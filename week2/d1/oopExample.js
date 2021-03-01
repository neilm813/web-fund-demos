/**
 * Write some OOP and functionality to create some discord GuildMember objects
 * and functionality to update their roles.
 */

var guildMemberObj1 = {
  id: 1,
  username: "Neil M#3857",
  nickname: "Instructor_NeilM",
};

var guildMemberObj2 = {
  id: 2,
  username: "sv124#6136",
  nickname: "Shayan_Valaie",
};

/**
 * This class is a blueprint to define what key value pairs a GuildMember has
 * so we can more easily "construct" a new GuildMember (instantiate).
 */
class GuildMember {
  constructor(id, username, nickname, firstName, lastName) {
    // this.keyName = parameterValue
    // Create the key value pairs on "this" new object being constructed.
    this.id = id;
    this.username = username;
    this.nickname = nickname;
    this.firstName = firstName;
    this.lastName = lastName;
    this.messageSentCount = 0;
    this.isBanned = false;
    this.roles = [];
  }

  // Define methods (functions) outside of the constructor.
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Role {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

// Execute the Class's constructor method (function) to construct a new object.
var guildMember1 = new GuildMember(
  1,
  "Neil M#3857",
  "Instructor_NeilM",
  "Neil",
  "M"
);

var guildMember2 = new GuildMember(
  2,
  "sv124#6136",
  "Shayan_Valaie",
  "Shayan",
  "V"
);

var guildMember3 = new GuildMember(2, "blah#6136", "Blah_Blep", "Blah", "B");

// console.log(guildMemberObj1);
// console.log(guildMember1);

console.log(guildMember1.fullName()); // "this" is guildMember1 here.
console.log(guildMember2.fullName()); // "this" is guildMember2 here.

var webFundRole = new Role("stack-web-fund", "orange");
var studentRole = new Role("Student", "red");
var instructorRole = new Role("Instruction", "green");

guildMember1.roles.push(instructorRole);

console.log(guildMember1.roles);

var students = [guildMember2, guildMember3];

console.log(students);

function addRoles(guildMembers, newRoles) {
  for (let i = 0; i < guildMembers.length; i++) {
    var currentGuildMember = guildMembers[i];

    for (let j = 0; j < newRoles.length; j++) {
      var currentRole = newRoles[j];
      currentGuildMember.roles.push(currentRole);
    }
  }
}

addRoles(students, [studentRole, webFundRole]);
console.log(students);

function listGuildMemberNames(guildMembers) {
  var fullNames = [];

  for (let i = 0; i < guildMembers.length; i++) {
    var currentGuildMember = guildMembers[i];
    fullNames.push(currentGuildMember.fullName());
  }

  return fullNames;
}

console.log(listGuildMemberNames(students));
