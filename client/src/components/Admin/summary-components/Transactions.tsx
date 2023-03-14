import styled from 'styled-components'
import { useEffect, useState } from 'react'
import axios from 'axios'
import moment from 'moment'
import { url } from '../../../features/api'

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

const Transactions = () => {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(false)

  console.log(orders)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const res = await axios.get(`${url}/orders/?new=true`)

        setOrders(res.data)
      } catch (err) {
        console.log(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <StyledTransactions>
      {isLoading ? (
        <p>Transctions loading...</p>
      ) : (
        <>
          <h3>Latest Transactions</h3>
          {orders?.map((order, index) => (
            <Transaction key={index}>
              <p>{order.shipping?.name}</p>
              <p>${(order.total / 100).toLocaleString()}</p>
              <p>{moment(order.createdAt).fromNow()}</p>
            </Transaction>
          ))}
        </>
      )}
    </StyledTransactions>
  )
}

export default Transactions

const StyledTransactions = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  padding: 1rem;
  border-radius: 5px;
`

const Transaction = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);

  p {
    flex: 1;
  }

  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`
