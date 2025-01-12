const express = require('express');
const app  = express();
const cors = require('cors')
require ("dotenv").config();
require("./conn/conn");
const user= require("./routes/users")
const books = require("./routes/book")
const favourites = require("./routes/favourite")


app.use(cors())
app.use(express.json());
//routes
app.use("/api/v1", user);
app.use("/api/v1", books);
app.use("/api/v1", favourites);

// app.get('/get-user/:id', (req, res) => {
//     res.send('Server is running!');
// });

// create port listen
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at port ${process.env.PORT}`);
});