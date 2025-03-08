document
	.getElementById("repoForm")
	.addEventListener("submit", async (event) => {
		event.preventDefault();

		const repoUrl = document.getElementById("repoUrl").value;
		const urlParts = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);

		if (!urlParts) {
			alert("Please enter a valid GitHub repository URL.");
			return;
		}

		const [_, owner, repo] = urlParts; // Extract owner and repo
		try {
			const contributors = await fetchContributors(owner, repo);
			if (contributors) {
				renderContributors(contributors);
			}
		} catch (error) {
			console.error("Failed to fetch contributors:", error);
		}
	});

async function fetchContributors(owner, repo) {
	const apiUrl = `https://api.github.com/repos/${owner}/${repo}/contributors`;

	try {
		const response = await fetch(apiUrl);

		if (!response.ok) {
			throw new Error(`Error: ${response.status} ${response.statusText}`);
		}

		const contributors = await response.json();
		return contributors;
	} catch (error) {
		console.error("Failed to fetch contributors:", error);
		return null;
	}
}

function renderContributors(contributors) {
	const container = document.getElementById("contributors");
	const box = document.getElementById("box");
	box.style.display = "block";
	container.innerHTML = "";

	contributors.forEach((contributor) => {
		const card = document.createElement("div");
		card.className = "card col-md-4 m-2";
		card.style.width = "18rem";

		{
			card.innerHTML = `
                        <img src="${contributor.avatar_url}" class="rounded-circle py-2" alt="${contributor.login}">
                        <div class="card-body ">
                              <h5 class="text-center">${contributor.login}</h5>
                              <p class="card-text text-center">Contributions: ${contributor.contributions}</p>
                              <div class="d-grid gap-2 col-6 mx-auto">
                                    <a href="${contributor.html_url}" class="btn btn-secondary " type="button" target="_blank">View Profile</a>
                              </div>
                        </div>
                  `;
		}

		container.appendChild(card);
	});
}
