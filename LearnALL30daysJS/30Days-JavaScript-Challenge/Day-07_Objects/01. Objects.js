// Activity 1: Object Creation and Access ✅
// - Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const bookDetails = {
    title: "Wings of Fire",
    author: "ABJ Abdul Kalam",
    year: 1999
  };
  
  console.log(bookDetails);

console.log("***Task 1 Ended Here!✅***");

// - Task 2: Access and log the title and author properties of the book object.
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);

console.log("***Task 2 Ended Here!✅***");

// ********************************* //

// Activity 2: Object Methods ✅
// - Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. 
bookDetails.getDetails = function() {
    return `${this.title} is written by ${this.author}`;
  };
  
  console.log(bookDetails.getDetails());

console.log("***Task 3 Ended Here!✅***");

// - Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
let book = {
  title: "To Kill a Mockingbird",
  author: "Harper Lee",
  year: 1960,
  updateYear: function(newYear) {
    this.year = newYear;
    console.log(this);
  }
};
book.updateYear(2024);


console.log("***Task 4 Ended Here!✅***");

// ********************************* //

// Activity 3: Nested Objects ✅
// - Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 
const library = {
    name: "Internet Library",
    books: [
      {
        title: "Clean Code",
        author: "Robert Cecil Martin",
        year: 2012
      },
      {
        title: "The Programatic Programming",
        author: "Dave Thomas",
        year: 1999
      }
    ]
  };
  
  console.log(library);

console.log("***Task 5 Ended Here!✅***");

// - Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(`Library Name is: ${library.name}`);

library.books.forEach(book => {
  console.log(`Book Title is: ${book.title}`);
});

console.log("***Task 6 Ended Here!✅***");


// ********************************* //

// Activity 4: The `this` Keyword ✅
// - Task 7: Add a method to the book object that uses the `this` keyword to return a string with the book's title and year, and log the result of calling this method.
bookDetails.getTitleAndYear = function() {
    return `${this.title} of year (${this.year})`;
  };
  
  console.log(bookDetails.getTitleAndYear());

console.log("***Task 7 Ended Here!✅***");

// ********************************* //

// Activity 5: Object Iteration ✅
// - Task 8: Use a `for...in` loop to iterate over the properties of the book object and log each property and its value.
let anotherBook = {
  title: "Clean Code",
  author: "Robert Cecil Martin",
  year: 1960
};

for (let property in anotherBook) {
  console.log(`${property}: ${anotherBook[property]}`);
}

console.log("***Task 8 Ended Here!✅***");

// - Task 9: Use `Object.keys` and `Object.values` methods to log all the keys and values of the book object.
console.log("Keys:", Object.keys(anotherBook));
console.log("Values:", Object.values(anotherBook));

console.log("***Task 9 Ended Here!✅***");
