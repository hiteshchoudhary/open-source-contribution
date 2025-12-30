// Existing log (DO NOT REMOVE)
console.log("LMAO");

// ================================
// Open Source Contribution Features
// ================================

const openSourceFeatures = [
  "Good first issues",
  "Clear contribution guidelines",
  "Beginner-friendly documentation",
  "Code review support",
  "Community discussions"
];

// Add a feature safely
function addFeature(feature) {
  if (!feature) return;
  openSourceFeatures.push(feature);
}

// Show features
function showOpenSourceFeatures() {
  console.log("\n🚀 Open Source Contribution Features:");
  openSourceFeatures.forEach((feature, index) => {
    console.log(`${index + 1}. ${feature}`);
  });
}

// Example: contributor adds a feature
addFeature("Mentorship for first-time contributors");

// Run
showOpenSourceFeatures();
