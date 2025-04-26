// console.log("LMAO")

const express= require("express");
const path= require("path");

app= express();

app.get("/hello:name",(req,res)=>{
    res.send("Hello World"+req.params.name);
});

app.listen(4000,()=>{
    console.log("server is running on http://localhost:4000");
    
});