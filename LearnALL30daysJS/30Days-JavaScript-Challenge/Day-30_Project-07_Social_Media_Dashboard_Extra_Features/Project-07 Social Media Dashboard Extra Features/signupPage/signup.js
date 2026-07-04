document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.querySelector('form[action="signupForm"]');
  
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let username = document.getElementById('signup-username').value;
      let password = document.getElementById('signup-password').value;
      let confirmPass = document.getElementById('signup-confirmPass').value;
      let email = document.getElementById('signup-email').value;
  
      sessionStorage.setItem('loggedInUser', username);
      sessionStorage.setItem('userEmail', email); // Store email in sessionStorage
  
      if (password !== confirmPass) {
          alert('Passwords do not match. Please try again!');
          return;
      }
  
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let userExists = users.some(user => user.username === username);
  
      if (userExists) {
          alert('Username already exists. Please choose another one');
      } else {
          users.push({ username: username, password: password, email: email }); // Store email
          localStorage.setItem('users', JSON.stringify(users));
          alert('Sign up successful!');
          window.location.href = '../dashboard/dashboard.html';
      }
    });
  });