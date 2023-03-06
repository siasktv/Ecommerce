import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { productsEdit } from '../../features/products/productsSlice'

export default function EditProduct({ prodId, products }) {
  const [open, setOpen] = React.useState(false)

  const dispatch = useDispatch()
  const { editStatus } = useSelector((state) => state.products)

  const [previewImg, setPreviewImg] = useState('')
  const [currentProd, setCurrentProd] = useState({})

  const [productImg, setProductImg] = useState('')
  const [brand, setBrand] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const handleProductImageUpload = (e) => {
    const file = e.target.files[0]

    TransformFileData(file)
  }

  const TransformFileData = (file) => {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setProductImg(reader.result)
        setPreviewImg(reader.result)
      }
    } else {
      setProductImg('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    dispatch(
      productsEdit({
        productImg,
        product: {
          ...currentProd,
          name: name,
          brand: brand,
          category: category,
          price: price,
          description: description,
        },
      })
    )
  }

  const handleClickOpen = () => {
    setOpen(true)

    let selectedProd = products.filter((item) => item._id === prodId)

    console.log(selectedProd)
    selectedProd = selectedProd[0]

    setCurrentProd(selectedProd)
    setPreviewImg(
      typeof selectedProd.image === 'object'
        ? selectedProd.image.url
        : selectedProd.image
    )
    setProductImg('')
    setBrand(selectedProd.brand)
    setName(selectedProd.name)
    setPrice(selectedProd.price)
    setDescription(selectedProd.description)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Edit onClick={handleClickOpen}>Edit</Edit>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth={'md'}
      >
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <StyledEditProduct>
            <StyledForm onSubmit={handleSubmit}>
              <h3>Create a Product</h3>
              <input
                id="imgUpload"
                accept="image/*"
                type="file"
                onChange={handleProductImageUpload}
              />
              <select
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                required
              >
                <option value="">Select Brand</option>
                <option value="apple">Apple</option>
                <option value="logitech">Logitech</option>
                <option value="canon">Canon</option>
              </select>
              <select
                onChange={(e) => setCategory(e.target.value)}
                required
                value={category}
              >
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Short Description"
                value={description}
                onChange={(e) => setDesc(e.target.value)}
                required
              />

              <Button type="submit">
                {editStatus === 'pending' ? 'Submitting' : 'Submit'}
              </Button>
            </StyledForm>
            <ImagePreview>
              {previewImg ? (
                <>
                  <img src={previewImg} alt="error!" />
                </>
              ) : (
                <p>Product image upload preview will appear here!</p>
              )}
            </ImagePreview>
          </StyledEditProduct>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

const Edit = styled.button`
  border: none;
  outline: none;

  padding: 3px 5px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  background-color: #4b70e2;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 2rem;

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

const StyledEditProduct = styled.div`
  display: flex;
  justify-content: space-between;
`

const ImagePreview = styled.div`
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
  border: 1px solid rgb(183, 183, 183);
  max-width: 300px;
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
