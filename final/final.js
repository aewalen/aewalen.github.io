function validateContact() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const comment = document.getElementById("comment");
}

function validateEmail() {
  const userEmail = document.getElementById("Email").value;
  let errors = "";

  const atpos = userEmail.indexOf("@");
  const dotpos = userEmail.lastIndexOf(".");

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errors += "<p>Invalid email format.</p>";
  }

  return errors;
}