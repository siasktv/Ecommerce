import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import axios from 'axios'

interface CartItem {
  _id: string
  name: string
  price: number
  description: string
  image: string | object
  cartQuantity: number
}

interface CartState {
  cartItems: CartItem[]
  cartTotalQuantity: number
  cartTotalAmount: number
}

const cartItemsFromStorage = localStorage.getItem('cartItems')

const initialState: CartState = {
  cartItems: cartItemsFromStorage ? JSON.parse(cartItemsFromStorage) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
}

// export const handleCheckout = createAsyncThunk(
//   'cart/productsCart',
//   async (cartItems: CartItem[]) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:3001/stripe/create-checkout-session',
//         cartItems
//       )
//       if (response.data.url) {
//         window.location.href = response.data.url
//       }
//       return response.data // You need to return the response from the async function
//     } catch (err) {
//       console.log(err)
//       throw err
//     }
//   }
// )

//Create your Slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      console.log(action.payload)
      const existingIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      )

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex]?.cartQuantity + 1,
        }
        toast.info('Increased product quantity', {
          position: 'bottom-left',
        })
      } else {
        let tempProductItem: CartItem = { ...action.payload }
        state.cartItems.push(tempProductItem)
        toast.success('Product added to cart', {
          position: 'bottom-left',
        })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    decreaseCart(state, action: PayloadAction<CartItem>) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      )

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1

        toast.info('Decreased product quantity', {
          position: 'bottom-left',
        })
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        )

        state.cartItems = nextCartItems

        toast.error('Product removed from cart', {
          position: 'bottom-left',
        })
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    removeFromCart(state, action: PayloadAction<CartItem>) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      )

      toast.error('Product removed from cart', {
        position: 'bottom-left',
      })

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem
          const itemTotal = price * cartQuantity

          cartTotal.total += itemTotal
          cartTotal.quantity += cartQuantity

          return cartTotal
        },
        {
          total: 0,
          quantity: 0,
        }
      )
      total = parseFloat(total.toFixed(2))
      state.cartTotalQuantity = quantity
      state.cartTotalAmount = total
    },
    clearCart(state) {
      state.cartItems = []

      toast.error('Cart cleared', { position: 'bottom-left' })

      localStorage.removeItem('cartItems')
    },
  },
})

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
