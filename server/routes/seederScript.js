require("dotenv").config();
const productsData = require("../data/products.js");
const connectDB = require("../db.js");
const Product = require("../models/Product");

connectDB();

const importData = async() => {
    try{
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log("Data Import Success");

        process.exit();

    }catch(err){
        console.log(`Error: ${err}`);
        process.exit(1);
    }
};

importData();