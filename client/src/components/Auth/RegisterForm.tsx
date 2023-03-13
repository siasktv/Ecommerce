import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
import Iconify from '../Iconify/Iconify'
import { registerUser } from '../../features/users/authSlice'

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [showPassword, setShowPassword] = useState(false)

  const auth = useAppSelector((state) => state.auth)
  console.log(auth)

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(registerUser(user))
    navigate('/')
  }

  console.log('user', user)

  // const handleClick = () => {
  //   navigate('/dashboard', { replace: true })
  // }

  return (
    <>
      <Stack spacing={3}>
        <TextField name="name" label="Name" onChange={handleChange} />
        <TextField name="email" label="Email address" onChange={handleChange} />

        <TextField
          name="password"
          label="Password"
          onChange={handleChange}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      ></Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleSubmit}
      >
        Register
      </LoadingButton>
      {auth.registerError && (
        <Typography color="error" variant="subtitle1">
          {auth.registerError}
        </Typography>
      )}
    </>
  )
}
