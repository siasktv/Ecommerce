import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store'
import { url } from '../api'

interface OrderEditPayload {
  id: string
  delivery_status: 'dispatched' | 'delivered'
}

interface Order {
  _id: string
  createdAt: string
  customerId: string
  delivery_status: string
  paymentIntentId: string
  payment_status: string
  products: any[] // Replace "any" with the type of your product object
  shipping: {
    address: any // Replace "any" with the type of your address object
    email: string
    name: string
    phone: string
    tax_exempt: string
  }
  subtotal: number
  total: number
  updatedAt: string
  userId: string
  __v: number
  // add other properties of an order here
}

const initialState = {
  list: [] as Order[],
  status: '',
}

export const ordersFetch = createAsyncThunk('orders/ordersFetch', async () => {
  try {
    const response = await axios.get(`${url}/orders`)
    console.log(response)
    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const ordersEdit = createAsyncThunk(
  'orders/ordersEdit',
  async (values: OrderEditPayload, { getState }) => {
    //getState from react-redux
    const state = getState() as RootState

    let currentOrder: Order[] = state.orders.list.filter(
      (order) => order._id === values.id
    )

    const newOrder = {
      ...currentOrder[0],
      delivery_status: values.delivery_status,
    }

    try {
      const response = await axios.put(`${url}/orders/${values.id}`, newOrder)

      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ordersFetch.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(ordersFetch.fulfilled, (state, action) => {
      state.list = action.payload
      state.status = 'success'
    })
    builder.addCase(ordersFetch.rejected, (state, action) => {
      state.status = 'rejected'
    })
    builder.addCase(ordersEdit.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(ordersEdit.fulfilled, (state, action) => {
      const updatedOrders = state.list.map((order) =>
        order._id === action.payload._id ? action.payload : order
      )
      state.list = updatedOrders
      state.status = 'success'
    })
    builder.addCase(ordersEdit.rejected, (state, action) => {
      state.status = 'rejected'
    })
  },
})

export default ordersSlice.reducer
