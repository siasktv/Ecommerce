import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import cartSlice from '../features/cart/cartSlice'
import authSlice from '../features/users/authSlice'
import ordersSlice from '../features/orders/ordersSlice'
//import reducers

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    auth: authSlice,
    orders: ordersSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
