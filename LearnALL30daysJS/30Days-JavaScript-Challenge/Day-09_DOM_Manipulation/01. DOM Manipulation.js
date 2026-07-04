// Activity 1: Selecting and Manipulating Elements ✅
// Task 1
document.getElementById("changeText").textContent = "Text Content Changed";

console.log("***Task 1 Ended Here!✅***");

// Task 2
document.querySelector(".bgColorChange").style.backgroundColor = "royalblue";

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Creating and Appending Elements ✅
// Task 3
const newDiv = document.createElement("div");
newDiv.textContent = "Creating a new div and adding text content to it.";
document.body.appendChild(newDiv);

console.log("***Task 3 Ended Here!✅***");

// Task 4
const newLi = document.createElement("li");
newLi.textContent = "List Item Added Successfully.";
document.querySelector("ul").appendChild(newLi);

console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Removing Elements ✅
// Task 5
const elementToRemove = document.getElementById("removeMe");
elementToRemove.parentNode.removeChild(elementToRemove);

console.log("***Task 5 Ended Here!✅***");

// Task 6
const parentElement = document.getElementById("parentElement");
parentElement.removeChild(parentElement.lastChild);

console.log("***Task 6 Ended Here!✅***");

// ********************************* //

// Activity 4: Modifying Attributes and Classes ✅
// Task 7
const image = document.querySelector(".firstImage");
image.src = "./changedImage.png";

console.log("***Task 7 Ended Here!✅***");

// Task 8
const myElement = document.querySelector(".elem");
myElement.classList.add("addClass");
myElement.classList.remove("removeClass");

console.log("***Task 8 Ended Here!✅***");

// ********************************* //

// Activity 5: Event Handling ✅
// Task 9
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("p").textContent = "Paragraph Text changed!";
});

console.log("***Task 9 Ended Here!✅***");

// Task 10
document.querySelector(".hoverElement").addEventListener("mouseover", () => {
  document.querySelector(".hoverElement").style.borderColor = "red";
});

console.log("***Task 10 Ended Here!✅***");
