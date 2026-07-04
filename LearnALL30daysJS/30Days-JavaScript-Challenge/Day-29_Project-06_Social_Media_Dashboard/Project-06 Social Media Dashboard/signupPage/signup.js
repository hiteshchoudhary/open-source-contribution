document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.querySelector('form[action="signupForm"]');
  
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      let username = document.getElementById('signup-username').value
      let password = document.getElementById('signup-password').value
      let confirmPass = document.getElementById('signup-confirmPass').value
  
      sessionStorage.setItem('loggedInUser', username);
  
      if (password !== confirmPass) {
          alert('Password do not match. Please try again!')
          return
      }
  
      let users = JSON.parse(localStorage.getItem('users')) || []
      let userExists = users.some(user => user.username === username)
  
      if (userExists) {
          alert('Username already exits. please choose another one')
      } else {
          users.push({username:username, password: password})
          localStorage.setItem('users', JSON.stringify(users))
          alert('Sign up successfull!')
          window.location.href = '../dashboard/dashboard.html'
      }
  
  
  
  
    });
  });