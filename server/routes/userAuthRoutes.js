const express = require('express')
const router = express.Router()
const {
  authUser,
  authUserlogin,
} = require('../controllers/userAuthControllers')

router.post('/register', authUser)
router.post('/login', authUserlogin)

module.exports = router
