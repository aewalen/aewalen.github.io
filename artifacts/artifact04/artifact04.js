const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbers = /^[0-9]+$/;

function validateForm() {
  let errorMessages = "";

  errorMessages += validateFirstName();
  errorMessages += validateLastName();
  errorMessages += validateEmail();
  errorMessages += validatePhone();
  errorMessages += validateUsername();
  errorMessages += validatePassword();
  errorMessages += validateAddress();
  errorMessages += validateCity();
  errorMessages += validateState();
  errorMessages += validateCountry();
  errorMessages += validateZipCode();
  // errorMessages += validateComments();
  document.getElementById("errorMessages").innerHTML = errorMessages;

  return errorMessages === "";
}

function validateFirstName() {
  const firstName = document.getElementById("FirstName").value;
  let errors = "";

  if (firstName == "" || firstName.length > 20) {
    errors +=
      "<p>The firstName is required and cannot be greater than 20 characters</p>";
  }

  if (specialChars.test(firstName)) {
    errors += "<p>The firstName must only contain alphabetical values.</p>";
  }

  return errors;
}
function validateLastName() {
  const lastName = document.getElementById("FirstName").value;
  let errors = "";

  if (lastName == "" || lastName.length > 20) {
    errors +=
      "<p>The lastName is required and cannot be greater than 20 characters</p>";
  }

  if (specialChars.test(lastName)) {
    errors += "<p>The lastName must only contain alphabetical values.</p>";
  }

  return errors;
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

function validatePhone() {
  const phone = document.getElementById("Phone").value;
  let errors = "";

  if (phone === "" || phone.length > 15 || !phone.match(numbers)) {
    errors += "<p>Invalid phone number </p>";
  }

  return errors;
}

function validateUsername() {
  const username = document.getElementById("Username").value;
  return username == "" || username.length > 12
    ? "<p>Username is required and cannot be greater than 12 characters</p>"
    : "";
}

function validatePassword() {
  const password = document.getElementById("Password").value;
  return password == "" || password.length > 7
    ? "<p>Password is required and cannot be greater than 7 characters</p>"
    : "";
}

function validateAddress() {
  const address = document.getElementById("Address").value;
  return address == "" ? "<p>Address is required." : "";
}

function validateCity() {
  const city = document.getElementById("City").value;
  return city == "" ? "<p>City is required." : "";
}

function validateState() {
  const state = document.getElementById("State").value;
  return state == 000 ? "<p>State is required</p>" : "";
}

function validateCountry() {
  const country = document.getElementById("Country").value;
  return country == 000 ? "<p>Country is required</p>" : "";
}

function validateZipCode() {
  const country = document.getElementById("Country").value;
  const zip = document.getElementById("ZipCode").value;

  return country == "US" && (zip == "" || zip.length > 5)
    ? "<p>ZipCode is required for US</p>"
    : "";
}
