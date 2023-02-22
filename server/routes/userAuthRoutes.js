const express = require('express')
const router = express.Router()
const { authUser } = require('../controllers/userAuthControllers')

router.post('/', authUser)

module.exports = router
