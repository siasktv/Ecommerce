import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
// import { AxiosError, AxiosResponse } from "axios";
// import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Products{
    products: [];
}

//initialState
const initialState = {
   products: [],
} as Products

//Create Thunk 
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  );


//Create your Slice 
const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
         // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.fulfilled, (state, action) => {
          // Add user to the state array
          state.products = action.payload
        })
      },
});
export default productsSlice.reducer;