document.addEventListener("DOMContentLoaded", function() {
  const signupBox = document.querySelector(".signup-box");
  const loginBox = document.querySelector(".login-box");
  const signupBtn = document.getElementById("signup-btn");
  const loginBtn = document.getElementById("login-btn");

  // Function to toggle visibility of login and signup forms
  function toggleForms() {
    signupBox.style.display = "none";
    loginBox.style.display = "block";
  }

  // Event listener for sign-up button
  signupBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Get the entered username, email, and password
    const username = document.querySelector(".signup-box input[type='text']").value;
    const email = document.querySelector(".signup-box input[type='email']").value;
    const password = document.querySelector(".signup-box input[type='password']").value;

    // Check if username, email, and password are not empty
    if (username && email && password) {
      // Store the entered credentials in localStorage
      localStorage.setItem("username", username);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);

      // Toggle to the login form
      toggleForms();
    } else {
      // Display error message if any field is empty
      document.querySelector(".signup-box .error-msg").textContent = "Please fill in all fields.";
    }
  });

  // Event listener for login button
  loginBtn.addEventListener("click", function(event) {
    event.preventDefault();
    // Retrieve the stored credentials from localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Get the entered username, password, and selected role
    const enteredUsername = document.querySelector(".login-box input[type='text']").value;
    const enteredPassword = document.querySelector(".login-box input[type='password']").value;
    const selectedRole = document.querySelector(".login-box .role-select").value;

    // Check if the entered username, password, and selected role match the stored credentials and role
    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      // Redirect to the respective dashboard based on role
      if (selectedRole === "admin") {
        window.location.href = "dashboard.html";
      } else if (selectedRole === "customer") {
        window.location.href = "customerdash.html";
      } else if (selectedRole === "deliverystaff") {
        window.location.href = "deliverystaff.html";
      }
    } else {
      // Display error message if credentials don't match
      document.querySelector(".login-box .error-msg").textContent = "Invalid username, password, or role.";
    }
  });
});
