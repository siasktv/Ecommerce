const Order = require('../models/Order')
const { auth, isUser, isAdmin } = require('../middleware/auth')
const moment = require('moment')

const router = require('express').Router()

//UPDATE
router.put('/:id', async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).send(updatedOrder)
  } catch (err) {
    res.status(500).send(err)
  }
})

//Get Orders
router.get('/', async (req, res) => {
  const query = req.query.new

  try {
    const orders = query
      ? await Order.find().sort({ _id: -1 }).limit(4)
      : await Order.find().sort({ _id: -1 })
    res.status(200).send(orders)
  } catch (err) {
    res.status(500).send(err)
  }
})

//Orders Stats
router.get('/stats', async (req, res) => {
  const previousMonth = moment()
    .month(moment().month() - 1)
    .set('date', 1)
    .format('YYYY-MM-DD HH:mm:ss')

  try {
    const orders = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(previousMonth) } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
    res.status(200).send(orders)
  } catch (err) {
    console.log(err)
    res.status(500).send(err)
  }
})
//Income
// GET MONTHLY INCOME

router.get('/income', async (req, res) => {
  const previousMonth = moment()
    .month(moment().month() - 2)
    .format()

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(previousMonth) } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$total',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ])
    res.status(200).send(income)
  } catch (err) {
    res.status(500).send(err)
  }
})

// WEEK'S SALES

router.get('/week-sales', async (req, res) => {
  const last7Days = moment()
    .day(moment().day() - 7)
    .format('YYYY-MM-DD HH:mm:ss')

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: new Date(last7Days) } } },
      {
        $project: {
          day: { $dayOfWeek: '$createdAt' },
          sales: '$total',
        },
      },
      {
        $group: {
          _id: '$day',
          total: { $sum: '$sales' },
        },
      },
    ])
    res.status(200).send(income)
  } catch (err) {
    res.status(500).send(err)
  }
})
module.exports = router
