const books = [
  {
    id: 1,
    name: "Harry Potter: The Chamber of Secrets",
    author: "J. K. Rowling"
  },
  {
    id: 2,
    name: "The Alchemist",
    author: "Paul Coelho"
  },
  {
    id: 3,
    name: "Chanakya Niti",
    author: "Viswamitra Sharma"
  }
];

// Find a book
const bookFoundById2 = books.find(book => book.id === 2);
console.log(bookFoundById2);

// Add a book
const newBook1 = {id: 4, name: "Wings of Fire: An Auto-biography of Dr. APJ Abdul Kalam", author: "Arun Tiwari"}
const newBookList = [...books, newBook1];
console.log(newBookList);

// Update a book
const updatedBookList = newBookList.map(book => book.name === "The Alchemist" ? {...book, author: "Paulo Coelho"} : book);
console.log(updatedBookList);

// Delete a book
const newBookListAfterDelete = updatedBookList.filter(book => book.name !== "Chanakya Niti");
console.log(newBookListAfterDelete);
