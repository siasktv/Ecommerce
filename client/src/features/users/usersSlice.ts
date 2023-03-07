import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const initialState = {
  list: [],
  status: '',
  deleteStatus: '',
}

export const usersFetch = createAsyncThunk('users/usersFetch', async () => {
  try {
    const response = await axios.get(
      'http://localhost:3001/users/stats/allUsers'
    )

    return response.data
  } catch (error) {
    console.log(error)
  }
})

export const userDelete = createAsyncThunk('users/userDelete', async (id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3001/users/stats/${id}`
    )

    return response.data
  } catch (error) {
    console.log(error.response.data)
    toast.error(error.response?.data, {
      position: 'bottom-left',
    })
  }
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(usersFetch.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(usersFetch.fulfilled, (state, action) => {
      state.list = action.payload
      state.status = 'success'
    })
    builder.addCase(usersFetch.rejected, (state, action) => {
      state.status = 'rejected'
    })
    builder.addCase(userDelete.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(userDelete.fulfilled, (state, action) => {
      const newList = state.list.filter(
        (user) => user._id !== action.payload._id
      )
      state.list = newList
      state.deleteStatus = 'success'
      toast.error('User Deleted!', {
        position: 'bottom-left',
      })
    })
    builder.addCase(userDelete.rejected, (state, action) => {
      state.status = 'rejected'
    })
  },
})

export default usersSlice.reducer
