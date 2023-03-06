const express = require('express')
const router = express.Router()
const {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
  editProduct,
} = require('../controllers/productsControllers.js')
const { isAdmin } = require('../middleware/auth')

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.delete('/:id', deleteProduct)
router.post('/createProduct', createProduct)
router.put('/:id', editProduct)
module.exports = router
