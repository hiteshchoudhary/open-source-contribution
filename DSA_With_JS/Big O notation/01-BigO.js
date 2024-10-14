// O(n), or Big O notation, is a mathematical notation used to describe the complexity of an algorithm in terms of the number of operations it performs relative to the size of its input. Here’s a detailed explanation:

const items = ["banana", "cheese", "eggs", "rice", "sugar ", "milk"];

// Since there r only 6 items in our array it takes comparatibly less time but if we had suppose 1 million items in our array then the time taken by our algorithm also increases correspondingly.

// This is known as 0(n) i.e (O of n)
// O: Represents the order of the function.
// n: Represents the size of the input.

// Drop the constants :
// lets suppose we have two for loops in our searchForItem function then we don't say O(2n) , we still say this function's O(n).This is known as dropping the constants

const searchForItem = (item) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      console.log(`Got ya ${item} at ${i} index `);
    }
  }
  for (let j = 0; j < items.length; j++) {
    if (items[j] === item) {
      console.log(`Got ya ${item} at ${j} index `);
    }
  }
};
searchForItem("milk");
