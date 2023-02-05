const Review = require("../models/Review.js"); 
const Product = require("../models/Product.js"); 
const User = require("../models/User");

const createReview = async (req, res) => {

    const { id } = req.params 
    //id del producto 

    const data = {
        //body(review, rating, user)
       ...req.body,
       product: id
    }

    const review = new Review(data);

    await review.save();

    //agregamos la review al producto que acabamos de crear 
    //404 si no en cuentra producto 

    const product = await Product.findById(id)
    if(!product){
       return res.status(404).json({msg: `Product with ${id} not found`})
    }
    product.reviews = [...product.reviews, review._id]

    await product.save();

    const user = await User.findOne({ email })
    if(!user){
        return res.status(404).json({msg: `User ${user.name} doesn't exits`})
    }

    user.reviews = [...user.reviews, review._id]
    
    await user.save()

    res.status(201).json(review)
}; 

const getReview = async (req, res) => {

    const { id } = req.params

    const review = await Review
    .findById(id)
    .populate({path: "product", select: "name"})
    .populate({path: "user", select: "name"})
    console.log(review)
    res.status(200).json(review)
}

module.exports = { 
    createReview, 
    getReview, 
}