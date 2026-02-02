const learnBtn = document.getElementById("learnBtn");
const messageBox = document.getElementById("messageBox");

learnBtn.addEventListener("click", () => {
    messageBox.classList.toggle("hidden");

    learnBtn.textContent =
        messageBox.classList.contains("hidden")
            ? "Why Open Source?"
            : "Hide Message";
});
