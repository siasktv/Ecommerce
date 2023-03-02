import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import {
  alpha,
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
} from '@mui/material'
import palette from '../../theme/palette'
import { LoadingButton } from '@mui/lab'
import styled from '@emotion/styled'

// const StyledRoot = styled('div')(({ theme }) => ({
//   [theme.breakpoints.up('md')]: {
//     display: 'flex',
//   },
// }))

// const color = palette.grey[500]
// const transparent = alpha(color, 0.16)

// const StyledSection = styled('div')(({ theme }) => ({
//   width: '100%',
//   maxWidth: 480,
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'center',
//   boxShadow: `0 0 2px 0 ${alpha(color, 0.2)}, 0 12px 24px -4px ${alpha(
//     color,
//     0.12
//   )}`,
//   backgroundColor: theme.palette.background.default,
// }))

// const StyledContent = styled('div')(({ theme }) => ({
//   maxWidth: 480,
//   margin: 'auto',
//   minHeight: '100vh',
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'column',
//   padding: theme.spacing(12, 0),
// }))

export default function CreateProduct({ open, onClose, TransitionComponent }) {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={TransitionComponent}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={onClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create Product
            </Typography>
            <Button autoFocus color="inherit" onClick={onClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <StyledCreateProduct>
          <StyledForm>
            <input id="imgUpload" accept="image/*" type="file" required />
            <select>
              <option value="">Select Brand</option>
              <option value="iphone">iPhone</option>
              <option value="samsung">Samsung</option>
              <option value="xiomi">Xiomi</option>
              <option value="other">Other</option>
            </select>
            <input type="text" placeholder="Name" required />
            <input type="number" placeholder="Price" required />
            <input type="text" placeholder="Short Description" required />

            <Button type="submit"></Button>
          </StyledForm>
          <ImagePreview></ImagePreview>
        </StyledCreateProduct>
      </Dialog>
    </div>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;
  margin-left: 10rem;
  select,
  input {
    padding: 7px;
    min-height: 30px;
    outline: none;
    border-radius: 5px;
    border: 1px solid rgb(182, 182, 182);
    margin: 0.3rem 0;
    &:focus {
      border: 2px solid rgb(0, 208, 255);
    }
  }
  select {
    color: rgb(95, 95, 95);
  }
`

const StyledCreateProduct = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
  margin-right: 10rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: rgb(78, 78, 78);
  img {
    max-width: 100%;
  }
`
