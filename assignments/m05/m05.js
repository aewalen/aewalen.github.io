// var table = 3; // Unit of table
// var operator = "addition"; // Type of calculation
// if (operator === "addition") {
//   // Do addition
//   while (i < 11) {
//     msg += i + " + " + table + " = " + (i + table) + "<br />";
//     i++;
//   }
// } else {

let i = 0; // Set counter to 1
let value1; // Initialize value 1
let value2; // Initialize value 2
let msg = "<h2>Multiplication Table<h2><br / >"; // Message

// Do multiplication
while (i < 10) {
  value1 = int(prompt("Enter a number from 0 - 10."));
  value2 = int(prompt("Enter another number from 0 - 10."));
  msg += value1 + " x " + value2 + " = " + value1 * value2 + "<br / >";
  i++;
}

// Write the message into the page
var el = document.getElementById("blackboard");
el.innerHTML = msg;
