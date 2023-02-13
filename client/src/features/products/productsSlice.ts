import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { number, string } from "prop-types";
// import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


interface Product {
  _id: string,
  name: string,
  description: string, 
  image: string,
  brand: string,
  category: string,
  rating: number,
  price: number 
}



interface Products{
    products: Product[];
    allProducts: Product[];
    selectedBrands: string[];
} 

//initialState
const initialState: Products = {
  products: [{
    _id: "",
    name: "",
    description: "", 
    image: "",
    brand: "",
    category: "",
    rating: 1,
    price: 0
  }],
  allProducts: [{
    _id: "",
    name: "",
    description: "", 
    image: "",
    brand: "",
    category: "",
    rating: 1,
    price: 0
  }],
  selectedBrands: []
} 

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
        sortedByPrice(state, action: PayloadAction<string>){
          console.log(action.payload)
          const sortedByPrice =
          action.payload === 'Price: Low-High'
          ? state.products.slice().sort((a, b) => a.price - b.price)
          : action.payload === 'Price: High-Low'
          ? state.products.slice().sort((a, b) => b.price - a.price)
          : [...state.products];
          state.products = sortedByPrice
        },
        selectBrand(state, action: PayloadAction<string>) {
          console.log(action.payload)
          state.selectedBrands = [...state.selectedBrands, action.payload];
          console.log(state.selectedBrands)
        },

        filteredByBrand(state, action: PayloadAction<string>) {
        state.products = state.allProducts.filter(product => state.selectedBrands.includes(product.brand.toLowerCase()))
        },

        filteredByCategory(state, action: PayloadAction<string>) {
          state.products = state.allProducts.slice().filter(
            (p) => p.category.toLocaleLowerCase() === action.payload.toLocaleLowerCase()
          );
        },
        filteredByRating(state, action: PayloadAction<string>) {
          state.products = state.allProducts.slice().filter(
            (p) => p.rating === parseInt(action.payload)
          );
        },
        clearFilter(state) {
          state.products = state.allProducts.slice();
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(productsFetch.fulfilled, (state, action: PayloadAction<[]>) => {
          // Add user to the state array
          state.products = action.payload
          state.allProducts = action.payload.slice()
        })
      },
});

export const { 
  sortedByPrice, 
  filteredByBrand, 
  filteredByCategory, 
  filteredByRating, 
  clearFilter,
  selectBrand
} = productsSlice.actions;
export default productsSlice.reducer;