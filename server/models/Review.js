const {Schema, model } = require('mongoose');



const ReviewSchema = new Schema({ 
    product: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    review: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    date_added: {
        type: Date,
        default: Date.now
    },
})

module.exports = model("Review", ReviewSchema);