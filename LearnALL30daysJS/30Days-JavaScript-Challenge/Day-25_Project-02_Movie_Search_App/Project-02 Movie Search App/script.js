const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const resultsContainer = document.getElementById("results-container");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");
const paginationContainer = document.getElementById("pagination");

const API_KEY = config.data;
let currentPage = 1;
let totalResults = 0;

searchButton.addEventListener("click", () => searchMovies(1));
closeModal.addEventListener("click", () => (modal.style.display = "none"));
searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchMovies(1);
  }
});

async function searchMovies(page) {
  const searchTerm = searchInput.value.trim();
  if (searchTerm === "") {
    resultsContainer.innerHTML = "<p>Please enter a search term</p>";
    return;
  }

  try {
    const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(
      searchTerm
    )}&page=${page}`;
    console.log("Fetching URL:", url); // Log the URL being fetched

    const response = await fetch(url);
    const data = await response.json();

    console.log("API Response:", data); // Log the entire API response

    if (data.Response === "True" && data.Search && data.Search.length > 0) {
      displayResults(data.Search);
      totalResults = parseInt(data.totalResults);
      currentPage = page;
      displayPagination();
    } else {
      resultsContainer.innerHTML = `<p>Search result not found ${
        data.Error || "Unknown error"
      }</p>`;
      paginationContainer.innerHTML = "";
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    resultsContainer.innerHTML = `<p>An error occurred. Please try again. Error details: ${error.message}</p>`;
  }
}

function displayResults(movies) {
  resultsContainer.innerHTML = "";
  movies.forEach((movie) => {
    const movieCard = document.createElement("div");
    movieCard.className = "movie-card";
    movieCard.innerHTML = `
            <img src="${
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450.png?text=No+Poster"
            }" alt="${movie.Title} poster">
            <div class="movie-info">
                <h3>${movie.Title}</h3>
                <p>Year: ${movie.Year}</p>
                <button class="more-info" data-imdbid="${
                  movie.imdbID
                }">More Info</button>
            </div>
        `;
    resultsContainer.appendChild(movieCard);
  });

  // Add event listeners to "More Info" buttons
  document.querySelectorAll(".more-info").forEach((button) => {
    button.addEventListener("click", showMovieDetails);
  });
}

async function showMovieDetails(event) {
  const imdbID = event.target.getAttribute("data-imdbid");
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
    );
    const movie = await response.json();

    modalBody.innerHTML = `
            <img src="${
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://via.placeholder.com/300x450.png?text=No+Poster"
            }" alt="${movie.Title} poster">
            <div class="movie-details">
                <h2>${movie.Title} (${movie.Year})</h2>
                <p><strong>Rating:</strong> ${movie.imdbRating} / 10</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
                <p><strong>Awards:</strong> ${movie.Awards}</p>
                <p><strong>Runtime:</strong> ${movie.Runtime}</p>
            </div>
        `;
    modal.style.display = "block";
  } catch (error) {
    console.error("Error fetching movie details:", error);
  }
}

function displayPagination() {
  const totalPages = Math.ceil(totalResults / 10);
  let paginationHTML = "";

  if (currentPage > 1) {
    paginationHTML += `<button onclick="searchMovies(${
      currentPage - 1
    })">Previous</button>`;
  }

  for (
    let i = Math.max(1, currentPage - 2);
    i <= Math.min(totalPages, currentPage + 2);
    i++
  ) {
    paginationHTML += `<button onclick="searchMovies(${i})" ${
      i === currentPage ? 'class="active"' : ""
    }>${i}</button>`;
  }

  if (currentPage < totalPages) {
    paginationHTML += `<button onclick="searchMovies(${
      currentPage + 1
    })">Next</button>`;
  }

  paginationContainer.innerHTML = paginationHTML;
}

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
