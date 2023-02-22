const User = require('../models/User.js')
const bcrypt = require('bcrypt')

const getAllUsers = async (req, res) => {
  const users = await User.find()
    .select('-password')
    .populate({ path: 'reviews', select: 'review rating' })
  // .populate({path: "orders", select: "orderItems"})
  //path(el campo en el modelo Product) select (campos del modelo)

  if (!users?.length) {
    return res.status(400).json({ message: 'No users found' })
  }

  res.status(200).json(users)
}

const createUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password)
    return res
      .status(400)
      .json({ message: 'Please fill in the required information' })

  const duplicate = await User.findOne({ email }).lean().exec()

  if (duplicate) {
    return res.status(409).json({ message: 'User already exits' })
  }

  const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

  const userObject = { name, password: hashedPwd, email }

  // Create and store new user

  const user = new User(userObject)

  await user.save()

  res.status(200).json(user)
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, password, email, admin } = req.body

  //confirm data

  if (!id || !name || !email || typeof admin !== 'boolean') {
    return res
      .status(400)
      .json({ message: 'All fields except password are required' })
  }

  // Does the user exist to update?
  const user = await User.findById(id).exec()

  if (!user) {
    return res.status(400).json({ message: 'User not found' })
  }

  // Check for duplicate
  const duplicate = await User.findOne({ email }).lean().exec()

  // Allow updates to the original user
  if (duplicate && duplicate?._id.toString() !== id) {
    return res.status(409).json({ message: 'User already exits' })
  }
  user.name = name
  user.email = email
  user.admin = admin

  if (password) {
    // Hash password
    user.password = await bcrypt.hash(password, 10) // salt rounds
  }

  const updatedUser = await user.save()

  res.json({ message: `${updatedUser.name} updated` })
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  if (!id) {
    return res.status(400).json({ message: 'UserId missed' })
  }

  const userDeleted = await User.updateOne({ _id: id }, { deleted: true })
  console.log(userDeleted)
  res.status(200).json({ message: `User ${userDeleted.name} inactive` })
}

module.exports = {
  getAllUsers,
  createUser,
  //check routes below
  updateUser,
  deleteUser,
}
