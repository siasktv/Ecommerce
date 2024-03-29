import styled from 'styled-components'
import Widget from './summary-components/Widget'
import { FaUsers, FaChartBar, FaClipboard } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Chart from './summary-components/Chart'
import Transactions from './summary-components/Transactions'
import AllTimeData from './summary-components/AllTimeData'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { usersFetch } from '../../features/users/usersSlice'
import { ordersFetch } from '../../features/orders/ordersSlice'
import { productsFetch } from '../../features/products/productsSlice'
import { url } from '../../features/api'

const Summary = () => {
  const { products } = useAppSelector((state) => state.products)
  const { list } = useAppSelector((state) => state.orders)
  const allUsers = useAppSelector((state) => state.users.list)

  const dispatch = useAppDispatch()

  interface Data {
    _id: number
    total: number
  }

  const [users, setUsers] = useState<Data[]>([])
  const [orders, setOrders] = useState<Data[]>([])
  const [earning, setEarnings] = useState<Data[]>([])
  const [usersPerc, setUsersPerc] = useState(0)
  const [ordersPerc, setOrdersPerc] = useState(0)
  const [earningPerc, setEarningsPerc] = useState(0)

  function compare(a: Data, b: Data) {
    if (a._id < b._id) {
      return 1
    }
    if (a._id > b._id) {
      return -1
    }
    return 0
  }

  useEffect(() => {
    dispatch(usersFetch())
    dispatch(ordersFetch())
    dispatch(productsFetch())
  }, [dispatch])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/users/stats`)

        res.data.sort(compare)
        setUsers(res.data)
        setUsersPerc(
          ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
        )
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orders/stats`)
        res.data.sort(compare)
        setOrders(res.data)

        if (res.data && res.data[0] && res.data[1]) {
          setOrdersPerc(
            ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
          )
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(`${url}/orders/income`)

        res.data.sort(compare)
        setEarnings(res.data)

        if (res.data && res.data[0] && res.data[1]) {
          setEarningsPerc(
            ((res.data[0].total - res.data[1].total) / res.data[1].total) * 100
          )
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])

  interface StatsData {
    icon: React.ReactNode
    digits: number
    isMoney: boolean
    title: string
    color: string
    bgcolor: string
    percentage: number
  }

  const data: StatsData[] = [
    {
      icon: <FaUsers />,
      digits: users[0]?.total,
      isMoney: false,
      title: 'Users',
      color: 'rgb(102, 108, 255)',
      bgcolor: 'rgba(102, 108, 255, 0.12)',
      percentage: usersPerc,
    },
    {
      icon: <FaClipboard />,
      digits: orders[0]?.total,
      isMoney: false,
      title: 'Orders',
      color: 'rgb(38, 198, 249)',
      bgcolor: 'rgba(38, 198, 249, 0.12)',
      percentage: ordersPerc,
    },
    {
      icon: <FaChartBar />,
      digits: earning[0]?.total ? Number(earning[0]?.total) / 100 : 0,
      isMoney: true,
      title: 'Earnings',
      color: 'rgb(253, 181, 40)',
      bgcolor: 'rgba(253, 181, 40, 0.12)',
      percentage: earningPerc,
    },
  ]

  return (
    <StyledSummary>
      <MainStats>
        <Overview>
          <Title>
            <h2>Overview</h2>
            <p>How your shop is perfoming compared to the previous month.</p>
          </Title>
          <WidgetWrapper>
            {data?.map((data, index) => (
              <Widget data={data} key={index} />
            ))}
          </WidgetWrapper>
        </Overview>
        <Chart />
      </MainStats>
      <SideStats>
        <Transactions />
        <AllTimeData allUsers={allUsers} orders={list} products={products} />
      </SideStats>
    </StyledSummary>
  )
}

export default Summary

const StyledSummary = styled.div`
  width: 100%;
  display: flex;
`

const MainStats = styled.div`
  flex: 2;
  width: 100%;
`

const Title = styled.div`
  p {
    font-size: 14px;
    color: rgba(234, 234, 255, 0.68);
  }
`

const Overview = styled.div`
  background: rgb(48, 51, 78);
  color: rgba(234, 234, 255, 0.87);
  width: 100%;
  padding: 1.5rem;
  height: 170px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const WidgetWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const SideStats = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  width: 100%;
`
