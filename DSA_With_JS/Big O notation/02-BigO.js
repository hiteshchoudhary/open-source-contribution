// O(1) also known as constant time,signifies that the execution time of an algorithm remains constant regardless of the input size

//Suppose we know the index of the item we are searching for then regardless of the size of the array we can retrive the item in same amount of time and hence the time is constant regardless of input size.This is called O(1)

// This process is known as O(1) :
const numbers = [1, 2, 3, 4, 5];
const getElement = (arr, index) => arr[index];
// Suppose we know that 1 is always the first element and we want to retrive it.
console.log(getElement(numbers, 0));
