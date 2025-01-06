const express = require('express');
const app  = express();
app.use(express.json());
require ("dotenv").config();
require("./conn/conn");
const user= require("./routes/users")

//routes
app.use("/api/v1", user);

app.get('/get-user/:id', (req, res) => {
    res.send('Server is running!');
});

// create port listen
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at port ${process.env.PORT}`);
});