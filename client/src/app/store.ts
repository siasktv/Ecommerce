import { configureStore } from '@reduxjs/toolkit'
import productsSlice from '../features/products/productsSlice'
import cartSlice from '../features/cart/cartSlice'
//import reducers

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
