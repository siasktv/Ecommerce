import { useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector, useAppDispatch } from '../../../app/hooks'

const AllTimeData = ({ allUsers, orders, products }) => {
  console.log(orders)
  //fix this component
  return (
    <Main>
      <h3>All Data</h3>
      <Info>
        <Title>Users</Title>
        <Data>{allUsers.length}</Data>
      </Info>
      <Info>
        <Title>Products</Title>
        <Data>{products.length}</Data>
      </Info>
      <Info>
        <Title>Orders</Title>
        <Data>{orders.length}</Data>
      </Info>
    </Main>
  )
}

export default AllTimeData

const Main = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  margin-top: 1.5rem;
  border-radius: 5px;
  padding: 1rem;
  font-size: 14px;
`

const Info = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: 0.3rem;
  border-radius: 3px;
  background: rgba(38, 198, 249, 0.12);

  &:nth-child(even) {
    background: rgba(102, 108, 255, 0.12);
  }
`
const Title = styled.div`
  flex: 1;
`
const Data = styled.div`
  flex: 1;
  font-weight: 700;
`
