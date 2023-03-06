const Product = require('../models/Product.js')
const cloudinary = require('../utils/cloudinary')

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
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
}

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)

    if (!product) return res.status(404).send('Product not found...')

    if (product.image.public_id) {
      const destroyResponse = await cloudinary.uploader.destroy(
        product.image.public_id
      )

      if (destroyResponse) {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id)

        res.status(200).send(deletedProduct)
      }
    } else {
      console.log('Action terminated. Failed to deleted product image...')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}

// EDIT PRODUCT

const editProduct = async (req, res) => {
  if (req.body.productImg) {
    const destroyResponse = await cloudinary.uploader.destroy(
      req.body.product.image.public_id
    )

    if (destroyResponse) {
      const uploadedResponse = await cloudinary.uploader.upload(
        req.body.productImg,
        {
          upload_preset: 'onlineShop',
        }
      )

      if (uploadedResponse) {
        const updatedProduct = await Product.findByIdAndUpdate(
          req.params.id,
          {
            $set: {
              ...req.body.product,
              image: uploadedResponse,
            },
          },
          { new: true }
        )

        res.status(200).send(updatedProduct)
      }
    }
  } else {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body.product,
        },
        { new: true }
      )
      res.status(200).send(updatedProduct)
    } catch (err) {
      res.status(500).send(err)
    }
  }
}

module.exports = {
  getAllProducts,
  createProduct,
  getProductById,
  deleteProduct,
  editProduct,
}
