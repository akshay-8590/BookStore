const express = require('express');
const app  = express();

const PORT = 1000;

app.get("/",(req,res)=>{
    res.send("hey it's Backend");
    
})

// create port listen
app.listen(1000,()=>{
    console.log("Server running");
})