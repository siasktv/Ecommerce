import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

type AuthUser = {
  token: string | null
  name: string
  email: string
  _id: string
  registerStatus: string
  registerError: string
  loginStatus: string
  loginError: string
  userLoaded: boolean
}

const initialState: AuthUser = {
  token: localStorage.getItem('token'),
  name: '',
  email: '',
  _id: '',
  registerStatus: '',
  registerError: '',
  loginStatus: '',
  loginError: '',
  userLoaded: false,
}

type RegisterUserRequest = {
  name: string
  email: string
  password: string
}

export const registerUser = createAsyncThunk<string, RegisterUserRequest>(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post<string>(
        'http://localhost:3001/users/auth/register',
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      )
      localStorage.setItem('token', token.data)
      return token.data
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state: AuthUser) => {
      return {
        ...state,
        registerStatus: 'pending',
      }
    })
    builder.addCase(
      registerUser.fulfilled,
      (state: AuthUser, action: PayloadAction<string>) => {
        if (action.payload) {
          const user = jwtDecode(action.payload) as {
            name: string
            email: string
            id: string
          }
          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user.id,
            registerStatus: 'success',
          }
        } else {
          return state
        }
      }
    )

    builder.addCase(
      registerUser.rejected,
      (state: AuthUser, action: PayloadAction<unknown>) => {
        const payload = (action.payload as string) || 'Unknown error'
        return {
          ...state,
          registerStatus: 'rejected',
          registerError: payload,
        }
      }
    )
  },
})
export default authSlice.reducer
