// Function to generate a random number between 1 and 100
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Function to predict the number using binary search
function predictNumber(target) {
  let low = 1;
  let high = 100;
  let attempts = 0;
  let guess;

  while (low <= high) {
      attempts++;
      guess = Math.floor((low + high) / 2);
      
      if (guess < target) {
          low = guess + 1;
      } else if (guess > target) {
          high = guess - 1;
      } else {
          return { attempts, guess };
      }
  }
}

// Main execution
const randomNumber = generateRandomNumber();
console.log(`Randomly generated number: ${randomNumber}`);

const result = predictNumber(randomNumber);
console.log(`Predicted number: ${result.guess} in ${result.attempts} attempts`);
