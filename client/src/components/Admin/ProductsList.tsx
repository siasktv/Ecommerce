import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { productsFetch } from '../../features/products/productsSlice'

export default function ProductsList() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.products)
  console.log(products)

  useEffect(() => {
    dispatch(productsFetch())
  }, [])

  const rows =
    products &&
    products.map((item) => {
      return {
        id: item._id.slice(-10),
        imageUrl: typeof item.image === 'object' ? item.image.url : item.image,
        pName: item.name,
        pDesc: item.description,
        price: item.price.toLocaleString(),
      }
    })

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'imageUrl',
      headerName: 'Image',
      width: 100,
      renderCell: (params) => {
        return (
          <ImageContainer>
            <img src={params.row.imageUrl} />
          </ImageContainer>
        )
      },
    },
    { field: 'pName', headerName: 'Name', width: 130 },
    { field: 'pDesc', headerName: 'Description', width: 130 },
    {
      field: 'price',
      headerName: 'Price($)',
      width: 80,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 170,
      renderCell: () => {
        return (
          <Actions>
            <Delete>Delete</Delete>
            <View>View</View>
          </Actions>
        )
      },
    },
  ]

  return (
    <div style={{ height: 400, width: '100%', marginTop: '2rem' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

const ImageContainer = styled.div`
  img {
    height: 40px;
  }
`

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    outline: none;

    padding: 3px 5px;
    color: white;
    border-radius: 3px;
    cursor: pointer;
  }
`

const Delete = styled.button`
  background-color: rgb(255, 77, 73);
`
const View = styled.button`
  background-color: rgb(114, 225, 40);
`
