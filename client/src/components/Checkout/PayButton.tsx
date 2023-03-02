import axios from 'axios'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../app/hooks'

interface CartItem {
  _id: string
  name: string
  price: number
  description: string
  image: string
  cartQuantity: number
}

type PayButtonProps = {
  cartItems: CartItem[]
}

const PayButton = ({ cartItems }: PayButtonProps) => {
  const user = useAppSelector((state) => state.auth)

  const handleCheckout = () => {
    axios
      .post('http://localhost:3001/stripe/create-checkout-session', {
        cartItems,
        userId: user._id,
      })
      .then((res) => {
        console.log('respuesta', res)
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <>
      <Button
        sx={{
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 2,
          minWidth: '100%',
          padding: '20px 40px',
          m: '20px 0',
          '&:hover': {
            backgroundColor: 'white',
            color: 'black',
            border: '2px solid black',
          },
        }}
        onClick={() => handleCheckout()}
      >
        Check out
      </Button>
    </>
  )
}
export default PayButton
