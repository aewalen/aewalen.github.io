const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbers = /^[0-9]+$/;

let errorMessages = "";

function validateForm() {
  document.getElementById("FirstName") == null
    ? (errorMessages += "<p> firstName field required.</p>")
    : validateFirstName();
  document.getElementById("LastName") == null
    ? (errorMessages += "<p> lastName field required.</p>")
    : validateLastName();
  document.getElementById("Phone") == null
    ? (errorMessages += "<p> Phone field required.</p>")
    : validatePhone();
  document.getElementById("Email") == null
    ? (errorMessages += "<p> Email field required.</p>")
    : validatePhone();
    
  // errorMessage += validateUsername();
  // errorMessage += validatePassword();
  // errorMessage += validateAddress();
  // errorMessage += validateCity();
  // errorMessage += validateState();
  // errorMessage += validateCountry();
  // errorMessage += validateZipcode();
  // errorMessage += validateComments();

  document.getElementById("errorMessages").innerHTML = errorMessages;

  return errorMessages === "";
}

function validateFirstName() {
  const firstName = document.getElementById("FirstName").value;

  if (firstName == null || firstName == "" || firstName.length > 20) {
    errorMessages +=
      "<p>The firstName is required and cannot be greater than 20 characters</p>";
  }

  if (specialChars.test(firstName)) {
    errorMessages +=
      "<p>The firstName must only contain alphabetical values.</p>";
  }
}
function validateLastName() {
  const lastName = document.getElementById("FirstName").value;

  if (lastName == null || lastName == "" || lastName.length > 20) {
    errorMessages +=
      "<p>The lastName is required and cannot be greater than 20 characters</p>";
  }

  if (specialChars.test(lastName)) {
    errorMessages +=
      "<p>The lastName must only contain alphabetical values.</p>";
  }
}

function validateEmail() {
  const userEmail = document.getElementById("email").value;
  const atpos = userEmail.indexOf("@");
  const dotpos = userEmail.lastIndexOf(".");

  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= userEmail.length) {
    errorMessages = "<p>Invalid email format.</p>";
  }
}

function validatePhone() {
  var phone = document.getElementById("phone").value;

  if (isNaN(phone) || phone.length > 15 || phone === null || phone === "")
    errorMessages = "<p>Invalid phone number </p>";

  if (phone === "" || phone.length > 15 || !phone.match(numbers)) {
    errorMessages = "<p>Invalid phone number </p>";
  }
}
