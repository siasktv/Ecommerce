import axios from 'axios'
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
  const handleCheckout = (cartItems: CartItem[]) => {
    axios
      .post('http://localhost:3001/stripe/create-checkout-session', cartItems)
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url
        }
      })
      .catch((err) => console.log(err.message))
  }
  return (
    <>
      <button onClick={() => handleCheckout(cartItems)}>Check out</button>
    </>
  )
}
export default PayButton
