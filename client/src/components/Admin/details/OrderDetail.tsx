import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { url } from '../../../features/api'

const Order = () => {
  const params = useParams()

  interface Shipping {
    address: {
      city: string
      country: string
      line1: string
      line2: string | null
      postal_code: string
      state: string
    }
    email: string
    name: string
    phone: string
    tax_exempt: string
    tax_ids: string[]
  }

  interface Order {
    _id: string
    userId: string
    customerId: string
    paymentIntentId: string
    products: any[]
    delivery_status: string
    createdAt: string
    total: number
    shipping: Shipping
    // ... other properties of your order object
  }

  const [order, setOrder] = useState<Order>({
    _id: '',
    userId: '',
    customerId: '',
    paymentIntentId: '',
    products: [],
    delivery_status: '',
    createdAt: '',
    total: 0,
    shipping: {
      address: {
        city: '',
        country: '',
        line1: '',
        line2: null,
        postal_code: '',
        state: '',
      },
      email: '',
      name: '',
      phone: '',
      tax_exempt: '',
      tax_ids: [],
    },
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${url}/orders/findOne/${params.id}`)

        setOrder(res.data)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchOrder()
  }, [params.id])

  console.log(order)

  return (
    <StyledOrder>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <OrdersContainer>
            <h2>Order Details</h2>
            <p>
              Delivery status:{' '}
              {order.delivery_status === 'pending' ? (
                <Pending>Pending</Pending>
              ) : order.delivery_status === 'dispatched' ? (
                <Dispatched>Dispatched</Dispatched>
              ) : order.delivery_status === 'delivered' ? (
                <Delivered>Delivered</Delivered>
              ) : (
                'error'
              )}
            </p>

            <h3>Ordered Products</h3>
            <Items>
              {order.products?.map((product, index) => (
                <Item key={index}>
                  <span>{product.description}</span>
                  <span>{product.quantity}</span>
                  <span>
                    {'$' + (product.amount_total / 100).toLocaleString()}
                  </span>
                </Item>
              ))}
            </Items>
            <div>
              <h3>Total Price</h3>
              <p>{'$' + (order.total / 100).toLocaleString()}</p>
            </div>
            <div>
              <h3>Shipping Details</h3>
              <p>Customer: {order.shipping?.name}</p>
              <p>City: {order.shipping?.address.city}</p>
              <p>Email: {order.shipping?.email}</p>
            </div>
          </OrdersContainer>
        </>
      )}
    </StyledOrder>
  )
}

export default Order

const StyledOrder = styled.div`
  margin: 3rem;
  display: flex;
  justify-content: center;

  h3 {
    margin: 1.5rem 0 0.5rem 0;
  }
`

const OrdersContainer = styled.div`
  max-width: 500px;
  width: 100%;
  height: auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
`

const Items = styled.div`
  span {
    margin-right: 1.5rem;
    &:first-child {
      font-weight: bold;
    }
  }
`

const Item = styled.li`
  margin-left: 0.5rem;
  margin-bottom: 0.5rem;
`

const Pending = styled.span`
  color: rgb(253, 181, 40);
  background: rgb(253, 181, 40, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
const Dispatched = styled.span`
  color: rgb(38, 198, 249);
  background-color: rgb(38, 198, 249, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`

const Delivered = styled.span`
  color: rgb(102, 108, 255);
  background-color: rgba(102, 108, 255, 0.12);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 14px;
`
