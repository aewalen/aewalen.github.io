document.querySelector("button").addEventListener("click", addItem);

function addItem() {
  const input = document.querySelector("input").value;

  if (input != "") {
    // Create a new element and store it in a variable.
    var newEl = document.createElement("li");

    // Create a text node and store it in a variable.
    var newText = document.createTextNode(input);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName("ul")[0];
    newEl.setAttribute("id", document.getElementsByTagName("ul").length + 1);

    // Insert the new element into its position.
    position.appendChild(newEl);
  }
  document.querySelector("input").value = "";
}
