const form = document.getElementById("myForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  // Clear old errors
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("successMessage").innerText = "";

  let isValid = true;

  // Inputs
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Name Validation
  if(name === ""){
    document.getElementById("nameError").innerText =
      "Name is required";
    isValid = false;
  }

  // Email Validation
  const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === ""){
    document.getElementById("emailError").innerText =
      "Email is required";
    isValid = false;
  }
  else if(!email.match(emailPattern)){
    document.getElementById("emailError").innerText =
      "Enter a valid email";
    isValid = false;
  }

  // Password Validation
  if(password === ""){
    document.getElementById("passwordError").innerText =
      "Password is required";
    isValid = false;
  }
  else if(password.length < 6){
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    isValid = false;
  }

  // Success
  if(isValid){
    document.getElementById("successMessage").innerText =
      "Form submitted successfully!";
  }

});
