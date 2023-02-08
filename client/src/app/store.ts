import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
//import reducers

export const store = configureStore({
    reducer: {
        products: productsSlice,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;