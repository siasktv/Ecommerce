import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import { url } from '../api'
type AuthUser = {
  token: string | null
  name: string | null
  email: string | null
  _id: string
  isAdmin: boolean | null
  registerStatus: string
  registerError: string | null
  userLoaded: boolean
  loginStatus: string
  loginError: string | null
}

interface DecodedUser {
  token: string | null
  name: string | null
  email: string | null
  isAdmin: boolean
  _id: string
}

const userFromLocalStorage = localStorage.getItem('token')
const decodedUser: DecodedUser | null = userFromLocalStorage
  ? jwtDecode(userFromLocalStorage)
  : null

const initialState: AuthUser = {
  token: decodedUser?.token ?? null,
  name: decodedUser?.name ?? null,
  email: decodedUser?.email ?? null,
  isAdmin: decodedUser?.isAdmin ?? null,
  _id: decodedUser?._id ?? '',
  registerStatus: 'idle',
  registerError: null,
  loginStatus: '',
  loginError: null,
  userLoaded: false,
}

type RegisterUserRequest = {
  name: string
  email: string
  password: string
}

export const registerUser = createAsyncThunk<AuthUser, RegisterUserRequest>(
  'auth/registerUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/users/auth/register`, {
        name: values.name,
        email: values.email,
        password: values.password,
      })
      const decodedToken =
        token.data && (jwtDecode(token.data) as AuthUser | null)
      if (decodedToken) {
        localStorage.setItem('token', token.data)
        localStorage.setItem('name', decodedToken.name)
        localStorage.setItem('email', decodedToken.email)
        return decodedToken
      } else {
        throw new Error('Invalid token')
      }
    } catch (err) {
      console.log(err)
      return rejectWithValue(err)
    }
  }
)

export const loginUser = createAsyncThunk<AuthUser, RegisterUserRequest>(
  'auth/loginUser',
  async (values, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${url}/users/auth/login`, {
        email: values.email,
        password: values.password,
      })
      const decodedToken =
        token.data && (jwtDecode(token.data) as AuthUser | null)
      if (decodedToken) {
        localStorage.setItem('token', token.data)
        localStorage.setItem('name', decodedToken.name)
        localStorage.setItem('email', decodedToken.email)
        return decodedToken
      } else {
        throw new Error('Invalid token')
      }
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
      localStorage.removeItem('name')
      localStorage.removeItem('email')
      return {
        ...state,
        token: null,
        name: '',
        email: '',
        isAdmin: false,
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
      (state: AuthUser, action: PayloadAction<AuthUser>) => {
        const { token, name, email, _id } = action.payload

        return {
          ...state,
          token: token,
          name: name,
          email: email,
          _id: _id,
          registerStatus: 'success',
          registerError: null,
          userLoaded: true,
          loginStatus: 'success',
          loginError: null,
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
      (state: AuthUser, action: PayloadAction<AuthUser>) => {
        const { name, email, _id, isAdmin } = action.payload
        return {
          ...state,
          token: localStorage.getItem('token') ?? null,
          name,
          email,
          _id,
          isAdmin,
          registerStatus: 'success',
          registerError: null,
          userLoaded: true,
          loginStatus: 'success',
          loginError: null,
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
