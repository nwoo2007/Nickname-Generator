// Global Variable
let outputBox = document.getElementById("outputBox");

// Event Listeners
document
  .getElementById("randomBtn")
  .addEventListener("click", generateRandName);
document.getElementById("allBtn").addEventListener("click", generateAllNames);

// Array
var nicknames = [
  "The Crusher",
  "The Scientist",
  "The Hawk",
  "The Chief",
  "The Sloth",
  "The Jester",
];

// Functions
// Random Name
function generateRandName() {
  // user input
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;

  // Math.random() * (max - min) + min;
  rand = Math.floor(Math.random() * (6 - 0) + 0);

  // output
  outputBox.innerHTML = `${first} "${nicknames[rand]}" ${last}`;
}

function generateAllNames() {
  // user input
  var first = document.getElementById("firstName").value;
  var last = document.getElementById("lastName").value;

  // output
  for (let i = 0; i < nicknames.length; i++) {
    outputBox.innerHTML += `<br> ${first} "${nicknames[i]}" ${last}`;
  }
}
