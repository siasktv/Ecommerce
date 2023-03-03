const Product = require('../models/Product.js')
const cloudinary = require('../utils/cloudinary')
const { requireAdmin } = require('../middleware/auth')

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate({
      path: 'reviews',
      select: 'review rating',
    })
    //path(el campo en el modelo Product) select (campos del modelo)
    res.status(200).json(products)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params

  const productById = await Product.findById(id).populate({
    path: 'reviews',
    select: 'review rating',
  })

  res.status(200).json(productById)
}

const createProduct = async (req, res) => {
  const { name, brand, description, price, category, image } = req.body
  try {
    await requireAdmin(req, res, async () => {
      if (image) {
        const uploadRes = await cloudinary.uploader.upload(image, {
          upload_preset: 'onlineShop',
        })

        if (uploadRes) {
          const product = new Product({
            name,
            brand,
            description,
            price,
            category,
            image: uploadRes,
          })

          const savedProduct = await product.save()

          res.status(200).send(savedProduct)
        }
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
}
