console.log("LMAO")
// Generate a random hex color and log it
const randomHexColor = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0')}`;
console.log("Random Hex Color:", randomHexColor());