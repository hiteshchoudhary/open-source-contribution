// Dark and Light Mode
const themeToggleButton = document.getElementById("themeToggleButton");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  // Toggle the icon between sun and moon
  if (body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
});

// Set default mode to light
body.classList.add("light-mode");
themeIcon.classList.add("fa-moon");

// Dashboard Logic
document.addEventListener("DOMContentLoaded", function () {
  const username = sessionStorage.getItem("loggedInUser") || "Guest";
  document.getElementById("username-placeholder").textContent = username;

  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  displayPosts(posts);

  const postButton = document.getElementById("post-button");
  const postFormContainer = document.getElementById("post-form-container");
  const cancelPostButton = document.getElementById("cancelPost");

  postButton.addEventListener("click", function () {
    postFormContainer.classList.remove("hidden");
  });

  cancelPostButton.addEventListener("click", function () {
    postFormContainer.classList.add("hidden");
    document.getElementById("postForm").reset();
  });

  document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const postText = document.getElementById("postText").value;
    const postImage = document.getElementById("postImage").files[0];

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

  function saveAndDisplayPost(post) {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.unshift(post);
    localStorage.setItem("posts", JSON.stringify(posts));
    displayPosts(posts);
    document.getElementById("postForm").reset();
    postFormContainer.classList.add("hidden");
  }

  function displayPosts(posts) {
    const postsContainer = document.getElementById("posts-container");
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
  }

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

  const logoutButton = document.querySelector(".logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to logout?")) {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "../index.html"; // Adjust path if necessary
      }
    });
  } else {
    console.error("Logout button not found");
  }

  const deleteAccountButton = document.querySelector(".delete-account-button");
  if (deleteAccountButton) {
    deleteAccountButton.addEventListener("click", function () {
      if (
        confirm(
          "Are you sure you want to delete your account? This action cannot be undone."
        )
      ) {
        // Clear session and local storage
        sessionStorage.removeItem("loggedInUser");
        localStorage.removeItem("posts");

        // You might also want to remove user-specific data from a server here

        // Redirect to login page or a confirmation page
        window.location.href = "../index.html"; // Adjust path if necessary
      }
    });
  } else {
    console.error("Delete Account button not found");
  }
});
