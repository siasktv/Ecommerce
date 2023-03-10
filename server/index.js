require('dotenv').config()
const express = require('express')
const server = express()
const connectDB = require('./db.js')
const morgan = require('morgan')
const cors = require('cors')
let PORT = 3001

server.use(cors())
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})
server.use(express.json())
server.use(morgan('dev'))

const paths = {
  products: '/products',
  reviews: '/reviews',
  users: '/users',
  stripe: '/stripe',
  usersAuth: '/users/auth',
  usersStats: '/users/stats',
  orders: '/orders',
}

server.use(paths.products, require('./routes/productsRoutes'))
server.use(paths.reviews, require('./routes/reviewsRoutes'))
server.use(paths.users, require('./routes/usersRoutes'))
server.use(paths.stripe, require('./routes/stripe'))
server.use(paths.usersAuth, require('./routes/userAuthRoutes'))
server.use(paths.usersStats, require('./routes/userStats'))
server.use(paths.orders, require('./routes/orders'))
connectDB()

if (process.env.NODE_ENV === 'production') PORT = process.env.PORT
server.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})
