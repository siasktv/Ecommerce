import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { number, string } from 'prop-types'
// import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

interface Product {
  _id: string
  name: string
  description: string
  image: string
  brand: string
  category: string
  rating: number
  price: number
}

interface Products {
  products: Product[]
  allProducts: Product[]
  selectedBrands: string[]
  selectedRating: number[]
}

//initialState
const initialState: Products = {
  products: [
    {
      _id: '',
      name: '',
      description: '',
      image: '',
      brand: '',
      category: '',
      rating: 1,
      price: 0,
    },
  ],
  allProducts: [
    {
      _id: '',
      name: '',
      description: '',
      image: '',
      brand: '',
      category: '',
      rating: 1,
      price: 0,
    },
  ],
  selectedBrands: [],
  selectedRating: [],
}

//Create Thunk
export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const response = await axios.get('http://localhost:3001/products')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)

//Create your Slice
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortedByPrice(state, action: PayloadAction<string>) {
      console.log(action.payload)
      const sortedByPrice =
        action.payload === 'Price: Low-High'
          ? state.products.slice().sort((a, b) => a.price - b.price)
          : action.payload === 'Price: High-Low'
          ? state.products.slice().sort((a, b) => b.price - a.price)
          : [...state.products]
      state.products = sortedByPrice
    },

    unselectBrand: (state, action: PayloadAction<string>) => {
      const newSelections = state.selectedBrands.filter(
        (b) => b !== action.payload
      )
      if (!newSelections.length) {
        state.products = state.allProducts
        return
      }
      state.selectedBrands = newSelections
      state.products = Array.from(state.allProducts).filter((product) =>
        newSelections.includes(product.brand)
      )
    },

    // filteredByBrand(state, action: PayloadAction<Products[]>) {
    //   state.products = state.allProducts.filter(product => state.selectedBrands.includes(product.brand.toLowerCase()))
    // },
    selectBrand(state, action: PayloadAction<string>) {
      const newSelections = [...state.selectedBrands, action.payload]
      state.selectedBrands = newSelections
      state.products = Array.from(state.allProducts).filter((product) =>
        newSelections.includes(product.brand)
      )
    },

    filteredByCategory(state, action: PayloadAction<string>) {
      const selectedBrands = state.selectedBrands
      state.products = state.allProducts.slice().filter((product) => {
        if (action.payload.toLowerCase() === 'all') {
          if (selectedBrands.length)
            return (
              state.products ===
              state.allProducts.filter((product) =>
                selectedBrands.includes(product.brand)
              )
            )
          return (state.products = state.allProducts)
        }
        if (selectedBrands.length) {
          return (
            product.category.toLowerCase() === action.payload.toLowerCase() &&
            selectedBrands.includes(product.brand)
          )
        }
        return product.category.toLowerCase() === action.payload.toLowerCase()
      })
    },
    selectedRating(state, action: PayloadAction<number>) {
      console.log(action.payload)
      const rating = [...state.selectedRating, action.payload]
      state.selectedRating = rating
      state.products = state.allProducts.filter((products) =>
        rating.includes(products.rating)
      )
      // state.products = state.allProducts
      //   .slice()
      //   .filter((p) => p.rating === parseInt(action.payload))
    },
    unselectedRating: (state, action: PayloadAction<number>) => {
      const ratingsArray = state.selectedRating.filter(
        (b) => b !== action.payload
      )
      if (!ratingsArray.length) {
        state.products = state.allProducts
        return
      }
      state.selectedRating = ratingsArray
      state.products = Array.from(state.allProducts).filter((product) =>
        ratingsArray.includes(product.rating)
      )
    },

    clearFilter(state) {
      state.products = state.allProducts.slice()
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(
      productsFetch.fulfilled,
      (state, action: PayloadAction<[]>) => {
        // Add user to the state array
        state.products = action.payload
        state.allProducts = action.payload.slice()
        // state.filteredProducts = state.products.filter(p => state.selectedBrands.includes(p.brand.toLowerCase()))
      }
    )
  },
})

export const {
  sortedByPrice,
  filteredByCategory,
  selectedRating,
  unselectedRating,
  clearFilter,
  selectBrand,
  unselectBrand,
} = productsSlice.actions
export default productsSlice.reducer
