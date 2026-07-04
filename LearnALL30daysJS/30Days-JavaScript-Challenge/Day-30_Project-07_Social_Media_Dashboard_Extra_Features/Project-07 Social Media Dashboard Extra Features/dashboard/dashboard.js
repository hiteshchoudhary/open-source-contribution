document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM Content Loaded");

  let notificationCount = 0;
  
  // Create and insert the menu button
  const navLinks = document.querySelector('.nav-links');
  const menuButton = document.createElement('button');
  menuButton.innerHTML = '<i class="fas fa-bars"></i>';
  menuButton.classList.add('menu-button', 'nav-button');
  document.querySelector('nav').insertBefore(menuButton, navLinks);

  // Toggle menu visibility
  menuButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-links') && !event.target.closest('.menu-button')) {
          navLinks.classList.remove('show');
      }
  });

  // Set username and email from session storage
  const username = sessionStorage.getItem("loggedInUser") || "Guest";
  document.getElementById("username-placeholder").textContent = username;

  const email = sessionStorage.getItem("userEmail") || "No email provided";
  console.log("Email from sessionStorage:", email);

  // Display posts
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  displayPosts(posts);

  // Profile modal functionality
  // Profile modal functionality
  const profileButton = document.getElementById("profile-button");
  const profileModal = document.getElementById("profile-modal");
  const closeProfileModalButton = document.getElementById("close-profile-modal");

  if (profileButton && profileModal && closeProfileModalButton) {
      profileButton.addEventListener("click", function () {
          document.getElementById("profile-username").textContent = username;
          document.getElementById("profile-email").textContent = email;
          profileModal.classList.remove("hidden");
      });

      closeProfileModalButton.addEventListener("click", function () {
          profileModal.classList.add("hidden");
      });

      const editProfileButton = document.getElementById("edit-profile-button");
      const saveProfileButton = document.getElementById("save-profile-button");
      const editProfileForm = document.getElementById("edit-profile-form");

      if (editProfileButton && saveProfileButton && editProfileForm) {
          editProfileButton.addEventListener("click", function () {
              editProfileForm.classList.remove("hidden");
              editProfileButton.classList.add("hidden");
              saveProfileButton.classList.remove("hidden");
          });

          saveProfileButton.addEventListener("click", function () {
              const newUsername = document.getElementById("edit-username").value.trim();
              const newEmail = document.getElementById("edit-email").value.trim();

              if (newUsername) sessionStorage.setItem("loggedInUser", newUsername);
              if (newEmail) sessionStorage.setItem("userEmail", newEmail);

              document.getElementById("profile-username").textContent = newUsername || username;
              document.getElementById("profile-email").textContent = newEmail || email;

              editProfileForm.classList.add("hidden");
              editProfileButton.classList.remove("hidden");
              saveProfileButton.classList.add("hidden");
          });
      }
  } else {
      console.error("Profile modal elements not found");
  }

  document.getElementById('post-image').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const filePreview = document.getElementById('file-preview');
    const fileNameElement = document.getElementById('file-name');
    
    // Clear previous content
    filePreview.innerHTML = '';
    fileNameElement.textContent = '';

    if (file) {
        // Display image preview
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            filePreview.appendChild(img);
        };
        
        reader.readAsDataURL(file);

        // Display file name
        fileNameElement.textContent = file.name;
    }
});

  // Post form functionality
  const addPostButton = document.getElementById("add-post-button");
  const postFormContainer = document.getElementById("post-form-container");
  const cancelPostButton = document.getElementById("cancel-post-button");
  const submitPostButton = document.getElementById("submit-post-button");

  if (addPostButton && postFormContainer && cancelPostButton && submitPostButton) {
      addPostButton.addEventListener("click", function () {
          console.log("Add post button clicked");
          postFormContainer.classList.remove("hidden");
      });

      cancelPostButton.addEventListener("click", function () {
          console.log("Cancel post button clicked");
          postFormContainer.classList.add("hidden");
          document.getElementById("post-content").value = "";
          document.getElementById("post-image").value = "";
      });

      submitPostButton.addEventListener("click", function () {
          console.log("Submit post button clicked");
          const postText = document.getElementById("post-content").value;
          const postImage = document.getElementById("post-image").files[0];

          const newPost = {
              id: Date.now(),
              username: username,
              text: postText,
              image: null,
              likes: 0,
          };

          if (postImage) {
              const reader = new FileReader();
              reader.onload = function (event) {
                  newPost.image = event.target.result;
                  saveAndDisplayPost(newPost);
              };
              reader.readAsDataURL(postImage);
          } else {
              saveAndDisplayPost(newPost);
          }
      });
  } else {
      console.error("One or more post form elements not found");
  }

  function saveAndDisplayPost(post) {
      console.log("Saving and displaying post:", post);
      const posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.unshift(post);
      localStorage.setItem("posts", JSON.stringify(posts));
      displayPosts(posts);
      document.getElementById("post-content").value = "";
      document.getElementById("post-image").value = "";
      postFormContainer.classList.add("hidden");
  }

  document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

  function displayPosts(posts) {
      console.log("Displaying posts:", posts);
      const postsContainer = document.getElementById("posts-container");
      if (postsContainer) {
          postsContainer.innerHTML = "";

          posts.forEach((post) => {
              const postElement = document.createElement("div");
              postElement.className = "post";
              postElement.dataset.id = post.id;

              const postUsername = document.createElement("div");
              postUsername.className = "post-username";
              postUsername.textContent = post.username;

              const postText = document.createElement("div");
              postText.className = "post-text";
              postText.textContent = post.text;

              postElement.appendChild(postUsername);
              postElement.appendChild(postText);

              if (post.image) {
                  const postImage = document.createElement("img");
                  postImage.src = post.image;
                  postElement.appendChild(postImage);
              }

              const likeButton = document.createElement("div");
              likeButton.className = "like-button";
              likeButton.innerHTML = `<i class="far fa-heart"></i> ${post.likes}`;
              likeButton.dataset.liked = "false";

              likeButton.onclick = function () {
                  toggleLike(likeButton, post.id);
              };

              postElement.appendChild(likeButton);

              postsContainer.appendChild(postElement);
          });
      } else {
          console.error("Posts container not found");
      }
  }
 // Show notification
 function showNotification(message) {
    const notificationCountElement = document.getElementById("notification-count");
    const notificationBar = document.createElement('div');
    notificationBar.className = 'notification-bar';
    notificationBar.textContent = message;

    document.body.appendChild(notificationBar);

    // Update notification count
    notificationCount++;
    notificationCountElement.textContent = notificationCount;
    notificationCountElement.classList.remove('hidden');

    // Auto-hide notification after 5 seconds
    setTimeout(() => {
        notificationBar.classList.add('hidden');
        notificationCountElement.classList.add('hidden');
    }, 5000);
}

 // Handle post like
 document.addEventListener('click', function(event) {
    if (event.target.matches('.like-button') || event.target.closest('.like-button')) {
        const button = event.target.closest('.like-button');
        if (button) {
            const postId = button.closest('.post').id.split('-')[1];
            handleLike(postId, username);
        }
    }
});



  function toggleLike(button, postId) {
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      const post = posts.find((p) => p.id == postId);

      if (post) {
          const isLiked = button.dataset.liked === "true";

          if (isLiked) {
              post.likes--;
              button.dataset.liked = "false";
          } else {
              post.likes++;
              button.dataset.liked = "true";
          }

          localStorage.setItem("posts", JSON.stringify(posts));
          displayPosts(posts);
          button.innerHTML = `<i class="far fa-heart"></i> ${post.likes}`;
      }
  }

  // Logout functionality
  const logoutButton = document.querySelector(".logout-button");
  const deleteAccountButton = document.querySelector(".delete-account-button");

  if (logoutButton) {
      logoutButton.addEventListener("click", function () {
          console.log("Logout button clicked");
          if (confirm("Are you sure you want to logout?")) {
              sessionStorage.removeItem("loggedInUser");
              sessionStorage.removeItem("userEmail");
              window.location.href = "../index.html";
          }
      });
  } else {
      console.error("Logout button not found");
  }

  if (deleteAccountButton) {
      deleteAccountButton.addEventListener("click", function () {
          console.log("Delete Account button clicked");
          if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
              sessionStorage.removeItem("loggedInUser");
              sessionStorage.removeItem("userEmail");
              localStorage.removeItem("posts");
              window.location.href = "../index.html";
          }
      });
  } else {
      console.error("Delete Account button not found");
  }

  document.addEventListener('click', function(event) {
    if (event.target.matches('.like-button')) {
        const postId = event.target.closest('.post').id.split('-')[1];
        handleLike(postId, username);
    }
});


});