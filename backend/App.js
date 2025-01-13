const express = require('express');
const app  = express();
const cors = require('cors')
require ("dotenv").config();
require("./conn/conn");
const user= require("./routes/users")
const books = require("./routes/book")
const Favourites = require("./routes/favourite")
const Order= require("./routes/order");
const cart=require("./routes/cart")


app.use(cors())
app.use(express.json());
//routes
app.use("/api/v1", user);
app.use("/api/v1", books);
app.use("/api/v1", Order);
app.use("/api/v1", cart);
app.use("/api/v1", Favourites);

// app.get('/get-user/:id', (req, res) => {
//     res.send('Server is running!');
// });

// create port listen
app.listen(process.env.PORT,()=>{
    console.log(`Server Started at port ${process.env.PORT}`);
});