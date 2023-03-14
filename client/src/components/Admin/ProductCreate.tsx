import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import styled from '@emotion/styled'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { productsCreate } from '../../features/products/productsSlice'

export default function CreateProduct({
  open,
  onClose,
  TransitionComponent,
}: any) {
  const dispatch = useAppDispatch()
  const { createStatus } = useAppSelector((state) => state.products)

  const [productImg, setProductImg] = useState('')
  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleProductImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files ? e.target.files[0] : null
    if (file) {
      TransformFileData(file)
    }
  }

  const TransformFileData = (file: File) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProductImg(reader.result as string)
      }
    } else {
      setProductImg('')
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    dispatch(
      productsCreate({
        name,
        brand,
        price,
        description,
        image: productImg,
        category,
      })
    )
  }

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
          </Toolbar>
        </AppBar>
        <StyledCreateProduct>
          <StyledForm onSubmit={handleSubmit}>
            <input
              id="imgUpload"
              accept="image/*"
              type="file"
              onChange={handleProductImageUpload}
              required
            />
            <select onChange={(e) => setBrand(e.target.value)} required>
              <option value="">Select Brand</option>
              <option value="apple">Apple</option>
              <option value="logitech">Logitech</option>
              <option value="canon">Canon</option>
            </select>
            <select onChange={(e) => setCategory(e.target.value)} required>
              <option value="">Select Category</option>
              <option value="computer">Computer</option>
              <option value="mouse">Mouse</option>
              <option value="headphones">Headphones</option>
              <option value="phone">Phone</option>
              <option value="camera">Camera</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Short Description"
              required
              onChange={(e) => setDescription(e.target.value)}
            />

            <Button
              variant="contained"
              type="submit"
              onSubmit={handleSubmit}
              size="large"
              style={{ marginTop: '20px' }}
            >
              {createStatus === 'pending' ? 'Submitting' : 'Submit'}
            </Button>
          </StyledForm>
          <ImagePreview>
            {productImg ? (
              <>
                <img src={productImg} alt="product image!" />
              </>
            ) : (
              <p>Product image upload preview will appear here!</p>
            )}
          </ImagePreview>
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
