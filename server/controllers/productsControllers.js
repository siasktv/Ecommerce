const Product = require("../models/Product.js")


const getAllProducts = async (req, res) => {
    const products = await Product.find().populate({path: "reviews", select: "review rating"})
    //path(el campo en el modelo Product) select (campos del modelo)
    res.status(200).json(products)
}; 

const getProductById = async (req, res) => {
    const { id } = req.params

    const productById = await Product.findById(id).populate({path: "reviews", select: "review rating"})
   
    res.status(200).json(productById)
};

const createProduct = async (req, res) => {
    const data = {
        ...req.body
    }
    const product = new Product(data);
    res.status(200).json(product)
}

module.exports = { 
    getAllProducts, 
    getProductById,
    createProduct,
};