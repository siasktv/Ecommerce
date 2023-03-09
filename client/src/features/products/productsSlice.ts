import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'
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
  selectedCategories: string
  selectedRating: number[]
  createStatus: null | string
  deleteStatus: null | string
  editStatus: null | string
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
  selectedCategories: '',
  selectedRating: [],
  createStatus: null,
  deleteStatus: null,
  editStatus: null,
}

export const setHeaders = () => {
  const headers = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  }

  return headers
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

export const productsCreate = createAsyncThunk(
  'products/productsCreate',
  async (values) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/products/createProduct',
        values
        // setHeaders()
      )
      return response.data
    } catch (error: any) {
      console.log(error)
      toast.error(error.response?.data)
    }
  }
)

export const productsDelete = createAsyncThunk(
  'products/productsDelete',
  async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/products/${id}`

        // setHeaders()
      )
      return response.data
    } catch (error: any) {
      console.log(error)
      toast.error(error.response?.data)
    }
  }
)

export const productsEdit = createAsyncThunk(
  'products/productsEdit',
  async (values) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/products/${values.product._id}`,
        values
        // setHeaders()
      )
      return response.data
    } catch (error: any) {
      console.log(error)
      toast.error(error.response?.data)
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
        (b) => b !== action.payload.toLowerCase()
      )
      if (!newSelections.length) {
        state.products = state.allProducts
        state.selectedBrands = []
        return
      }
      state.selectedBrands = newSelections
      state.products = Array.from(state.allProducts).filter((product) =>
        newSelections.includes(product.brand.toLowerCase())
      )
    },

    selectBrand(state, action: PayloadAction<string>) {
      const brand = action.payload.toLowerCase()
      if (!state.selectedBrands.includes(brand)) {
        const newSelections = [...state.selectedBrands, brand]
        state.selectedBrands = newSelections
        state.products = Array.from(state.allProducts).filter((product) =>
          newSelections.includes(product.brand.toLowerCase())
        )
      }
    },

    selectCategory(state, action: PayloadAction<string>) {
      const category = action.payload.toLowerCase()

      if (category === state.selectedCategories) {
        // If the selected category is the same as the current selection, do nothing
        return
      }

      // Update the selected category
      state.selectedCategories = category

      // Check if a brand is selected
      const brandSelected = state.selectedBrands.length > 0

      // Filter products based on selected category and brand
      if (category === 'all') {
        if (!brandSelected) {
          // If no brands are selected, include all products
          state.products = Array.from(state.allProducts)
        } else {
          // Include all products matching the selected brand
          state.products = Array.from(state.allProducts).filter(
            (product) =>
              product.brand &&
              state.selectedBrands.includes(product.brand.toLowerCase())
          )
        }
      } else {
        if (!brandSelected) {
          // If no brands are selected, include all products in the selected category
          state.products = Array.from(state.allProducts).filter(
            (product) =>
              product.category && product.category.toLowerCase() === category
          )
        } else {
          // Otherwise, include products matching selected category and brand
          state.products = Array.from(state.allProducts).filter(
            (product) =>
              product.category &&
              product.brand &&
              product.category.toLowerCase() === category &&
              state.selectedBrands.includes(product.brand.toLowerCase())
          )
        }
      }
    },

    selectedRatings(state, action: PayloadAction<number>) {
      console.log(action.payload)
      const rating = action.payload
      if (!state.selectedRating.includes(rating)) {
        const newArrayRating = [...state.selectedRating, rating]
        state.selectedRating = newArrayRating
        state.products = Array.from(state.allProducts).filter((product) =>
          newArrayRating.includes(product.rating)
        )
      }
    },

    // selectedRating(state, action: PayloadAction<number>) {
    //   console.log(action.payload)
    //   const rating = [...state.selectedRating, action.payload]
    //   state.selectedRating = rating
    //   state.products = state.allProducts.filter((products) =>
    //     rating.includes(products.rating)
    //   )
    //   // state.products = state.allProducts
    //   //   .slice()
    //   //   .filter((p) => p.rating === parseInt(action.payload))
    // },
    // unselectedRating: (state, action: PayloadAction<number>) => {
    //   const ratingsArray = state.selectedRating.filter(
    //     (b) => b !== action.payload
    //   )
    //   if (!ratingsArray.length) {
    //     state.products = state.allProducts
    //     return
    //   }
    //   state.selectedRating = ratingsArray
    //   state.products = Array.from(state.allProducts).filter((product) =>
    //     ratingsArray.includes(product.rating)
    //   )
    // },

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
      }
    )
    builder.addCase(productsCreate.pending, (state: Products) => {
      return {
        ...state,
        createStatus: 'pending',
      }
    })
    builder.addCase(
      productsCreate.fulfilled,
      (state: Products, action: PayloadAction<Product>) => {
        state.products.push(action.payload)
        state.createStatus = 'success'
        toast.success('Product created!')
      }
    )

    builder.addCase(productsCreate.rejected, (state: Products, action) => {
      return {
        ...state,
        createStatus: 'rejected',
      }
    })

    builder.addCase(productsDelete.pending, (state: Products) => {
      return {
        ...state,
        deleteStatus: 'pending',
      }
    })
    builder.addCase(
      productsDelete.fulfilled,
      (state: Products, action: PayloadAction<Product>) => {
        const newList = state.products.filter(
          (p) => p._id !== action.payload._id
        )
        state.products = newList
        state.deleteStatus = 'success'
        toast.error('Product deleted!')
      }
    )

    builder.addCase(productsDelete.rejected, (state: Products, action) => {
      return {
        ...state,
        deleteStatus: 'rejected',
      }
    })
    builder.addCase(productsEdit.pending, (state: Products) => {
      return {
        ...state,
        editStatus: 'pending',
      }
    })
    builder.addCase(
      productsEdit.fulfilled,
      (state: Products, action: PayloadAction<Product>) => {
        const updatedProducts = state.products.map((p) =>
          p._id === action.payload._id ? action.payload : p
        )
        state.products = updatedProducts
        state.deleteStatus = 'success'
        toast.success('Product updted!')
      }
    )

    builder.addCase(productsEdit.rejected, (state: Products, action) => {
      return {
        ...state,
        editStatus: 'rejected',
      }
    })
  },
})

export const {
  sortedByPrice,
  selectBrand,
  unselectBrand,
  selectCategory,
  selectedRatings,
  clearFilter,
} = productsSlice.actions
export default productsSlice.reducer
