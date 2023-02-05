require('dotenv').config();
const express = require("express");
const server = express();
const connectDB = require("./db.js");
const morgan = require("morgan");
const cors = require("cors"); 

server.use(cors())
server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", "true")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, DELETE"
    )
    next()
})
server.use(express.json())
server.use(morgan("dev"))

const paths = {
    products: "/products",
    reviews: "/reviews",
    users: "/users",
}

server.use(paths.products, require("./routes/productsRoutes"));
server.use(paths.reviews, require("./routes/reviewsRoutes"));
server.use(paths.users, require("./routes/usersRoutes"));

connectDB();
server.listen("3001", () => {
    console.log("server listening on port 3001")
});