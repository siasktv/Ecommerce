import { useEffect } from 'react'
import { DataGrid, GridCellParams } from '@mui/x-data-grid'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { ordersEdit, ordersFetch } from '../../../features/orders/ordersSlice'
import moment from 'moment'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

export default function OrderList() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { list } = useAppSelector((state) => state.orders)

  interface Order {
    _id: string
    createdAt: string
    customerId: string
    delivery_status: string
    paymentIntentId: string
    payment_status: string
    products: any[] // Replace "any" with the type of your product object
    shipping: {
      address: any // Replace "any" with the type of your address object
      email: string
      name: string
      phone: string
      tax_exempt: string
    }
    subtotal: number
    total: number
    updatedAt: string
    userId: string
    __v: number
  }

  useEffect(() => {
    dispatch(ordersFetch())
  }, [dispatch])

  const rows =
    list &&
    list.map((order: Order) => {
      return {
        id: order._id,
        cName: order.shipping.name,
        amount: (order.total / 100)?.toLocaleString(),
        dStatus: order.delivery_status,
        date: moment(order.createdAt).fromNow(),
      }
    })

  const columns = [
    { field: 'id', headerName: 'ID', width: 220 },
    { field: 'cName', headerName: 'Name', width: 120 },
    { field: 'amount', headerName: 'Amount($)', width: 100 },
    {
      field: 'delivery_status',
      headerName: 'Status',
      width: 100,
      renderCell: (params: GridCellParams) => {
        return (
          <div>
            {params.row.dStatus === 'pending' ? (
              <Pending>Pending</Pending>
            ) : params.row.dStatus === 'dispatched' ? (
              <Dispatched>Dispatched</Dispatched>
            ) : params.row.dStatus === 'delivered' ? (
              <Delivered>Delivered</Delivered>
            ) : (
              'error'
            )}
          </div>
        )
      },
    },
    { field: 'date', headerName: 'Date', width: 120 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 220,
      renderCell: (params: GridCellParams) => {
        return (
          <Actions>
            <DispatchBtn onClick={() => handleOrderDispatch(params.row.id)}>
              Dispatch
            </DispatchBtn>
            <DeliveryBtn onClick={() => handleDeliver(params.row.id)}>
              Delivered
            </DeliveryBtn>
            <View onClick={() => navigate(`${params.row.id}`)}>View</View>
          </Actions>
        )
      },
    },
  ]

  const handleOrderDispatch = (id: string) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: 'dispatched',
      })
    )
  }

  const handleDeliver = (id: string) => {
    dispatch(
      ordersEdit({
        id,
        delivery_status: 'delivered',
      })
    )
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

const DispatchBtn = styled.button`
  background-color: rgb(38, 198, 249);
`
const DeliveryBtn = styled.button`
  background-color: rgb(102, 108, 255);
`
const View = styled.button`
  background-color: rgb(114, 225, 40);
`

const Pending = styled.div`
  color: rgb(253, 181, 40);
  background: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
const Dispatched = styled.div`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`

const Delivered = styled.div`
  color: rgb(102, 108, 255);
  background-color: rgba(102, 108, 255, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
