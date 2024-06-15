// Let's create an HTTP server

const express = require("express");
const app = express();

app.listen(8080, () => {
    console.log("Server up and running ...");
});

// Step 1 : Open terminal
// Step 2 : Run node server.js / nodemon server.js