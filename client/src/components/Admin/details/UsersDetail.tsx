import { useEffect } from 'react'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { usersFetch, userDelete } from '../../../features/users/usersSlice'
import { useAppDispatch, useAppSelector } from '../../../app/hooks'

export default function UsersList() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.users)

  interface User {
    _id: string
    name: string
    email: string
    isAdmin: boolean
    // add any other properties here as needed
  }

  useEffect(() => {
    dispatch(usersFetch())
  }, [dispatch])

  const rows =
    list &&
    list.map((user: User) => {
      return {
        id: user._id,
        uName: user.name,
        uEmail: user.email,
        isAdmin: user.isAdmin,
      }
    })

  const columns = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'uName', headerName: 'Name', width: 150 },
    { field: 'uEmail', headerName: 'Email', width: 200 },
    {
      field: 'isAdmin',
      headerName: 'Role',
      width: 100,
      renderCell: (params: GridCellParams) => {
        return (
          <div>
            {params.row.isAdmin ? (
              <Admin>Admin</Admin>
            ) : (
              <Customer>Customer</Customer>
            )}
          </div>
        )
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params: GridCellParams) => {
        return (
          <Actions>
            <Delete onClick={() => handleDelete(params.row.id)}>Delete</Delete>
            <View onClick={() => navigate(`${params.row.id}`)}>View</View>
          </Actions>
        )
      },
    },
  ]

  const handleDelete = (id: any) => {
    dispatch(userDelete(id))
  }

  return (
    <div style={{ height: 400, width: '100%', marginTop: '2rem' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        style={{ backgroundColor: 'white' }}
      />
    </div>
  )
}

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
const Admin = styled.div`
  color: rgb(253, 181, 40);
  background: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
const Customer = styled.div`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
