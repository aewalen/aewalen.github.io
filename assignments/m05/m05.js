// if (operator === 'addition') {
//   // Do addition
//   while (i < 11) {
//     msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
//     i++;
//   }
// } else {
//   // Do multiplication
//   while (i < 11) {
//     msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
//     i++;
//   }
// }
const header = "<h2>Multiplication Table<h2>";

let i = 1; // Set counter to 1
let msg = ""; // Message
let value = parseInt(prompt("Enter a number from 0 - 10."));

// Do multiplication
while (i < 11) {
  msg += i + " x " + value + " = " + i * value + "<br / >";
  i++;
}

// Write the message into the page
var el = document.getElementById("blackboard");
el.innerHTML = header + msg;
