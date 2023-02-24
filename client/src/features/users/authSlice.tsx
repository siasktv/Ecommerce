import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

type AuthUser = {
  token: string | null
  name: string
  email: string
  _id: string
  registerStatus: string
  registerError: string | null
  loginStatus: string
  loginError: string
  userLoaded: boolean
}

// type DecodedToken = {
//   name: string
//   email: string
//   _id: string
// }

const initialState: AuthUser = {
  token: null,
  name: '',
  email: '',
  _id: '',
  registerStatus: 'idle',
  registerError: null,
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
      const token = await axios.post(
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

export const loginUser = createAsyncThunk<string, RegisterUserRequest>(
  'auth/loginUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post('http://localhost:3001/users/auth/login', {
        email: values.email,
        password: values.password,
      })
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
  reducers: {
    logoutUser: (state: AuthUser) => {
      localStorage.removeItem('token')
      return {
        ...state,
        token: null,
        name: '',
        email: '',
        _id: '',
        registerStatus: 'idle',
        registerError: null,
        loginStatus: '',
        loginError: '',
        userLoaded: false,
      }
    },
  },
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
          const user = jwtDecode(action.payload) as AuthUser

          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            registerStatus: 'success',
            registerError: null,
            userLoaded: true,
          }
        } else {
          return state
        }
      }
    )

    builder.addCase(
      registerUser.rejected,
      (state: AuthUser, action: PayloadAction<unknown>) => {
        const payload = (action.payload as any) || 'Unknown error'
        return {
          ...state,
          registerStatus: 'rejected',
          registerError: payload.response.data,
        }
      }
    )
    builder.addCase(loginUser.pending, (state: AuthUser) => {
      return {
        ...state,
        registerStatus: 'pending',
      }
    })
    //LOGIN
    builder.addCase(
      loginUser.fulfilled,
      (state: AuthUser, action: PayloadAction<string>) => {
        if (action.payload) {
          const user = jwtDecode(action.payload) as AuthUser

          return {
            ...state,
            token: action.payload,
            name: user.name,
            email: user.email,
            _id: user._id,
            registerStatus: 'success',
            registerError: null,
            userLoaded: true,
          }
        } else {
          return state
        }
      }
    )

    builder.addCase(
      loginUser.rejected,
      (state: AuthUser, action: PayloadAction<unknown>) => {
        const payload = (action.payload as any) || 'Unknown error'
        return {
          ...state,
          registerStatus: 'rejected',
          registerError: payload.response.data,
        }
      }
    )
  },
})

export const { logoutUser } = authSlice.actions
export default authSlice.reducer
