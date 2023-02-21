const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        id: { type: String },
        name: { type: String },
        brand: { type: String },
        description: { type: String },
        price: { type: String },
        image: { type: String },
        cartQuantity: { type: Number },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    shipping: { type: Object, required: true },
    delivery_status: { type: String, default: 'pending' },
    payment_status: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

module.exports = model('Order', OrderSchema)
