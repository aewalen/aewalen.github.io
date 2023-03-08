function validateContact() {
  let error = "";

  try {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;
    
    if (email == "" || name == "" || comment == "") {
      error += "<p>All fields required.</p>";
    }
  } catch (TypeError) {
    error += "<p>All fields required.</p>";
  }

  document.getElementById("errormessages").innerHTML = error;

  return error == "";
}

// function validateContact() {
//   let errors = "";
//   errors += validateEmail();
//   errors += validateText();

//   document.getElementById("errormessages").innerHTML = errors;
//   return errors == "";
// }

// function validateEmail() {
//   const email = document.getElementById("email").value;
//   let errors = "";

//   const atpos = email.indexOf("@");
//   const dotpos = email.lastIndexOf(".");

//   if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
//     errors += "<p>Invalid email format.</p>";
//   }

//   return errors;
// }

// function validateText() {
//   if (document.getElementById("name").value != null && document.getElementById("comment").value) {
//     const name = document.getElementById("name").value;
//     const comment = document.getElementById("comment").value;
//   }

//   return name == "" || comment == ""
//     ? "<p>Please make sure name and comment are filled out.</p>"
//     : "";
// }
