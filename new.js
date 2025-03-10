
const express = require('express');
const app = express();

app.get('/four/open-source-contribution/new', (req, res) => {
  res.send('Hello World');
}); 

const PORT = process.env.PORT || 3002;

app.listen(PORT, () =>{
    console.log(`Server is running on port http://localhost:${PORT}`);
    
})

