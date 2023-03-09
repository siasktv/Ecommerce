import { useAppDispatch, useAppSelector } from '../../app/hooks'
import PropTypes from 'prop-types'
import {
  Badge,
  Drawer,
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useSelector, useDispatch } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styled from '@emotion/styled'
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  clearCart,
  getTotals,
} from '../../features/cart/cartSlice'
import PayButton from '../Checkout/PayButton'
import { useNavigate } from 'react-router-dom'

type CartMenuProps = {
  openCart?: boolean
  onOpenCart?: () => void
  onCloseCart?: () => void
}

CartMenu.propTypes = {
  openCart: PropTypes.bool,
  onOpenCart: PropTypes.func,
  onCloseCart: PropTypes.func,
}

const FlexBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default function CartMenu({
  openCart,
  onOpenCart,
  onCloseCart,
}: CartMenuProps) {
  const navigate = useNavigate()
  const cartItems = useAppSelector((state) => state.cart.cartItems)

  const cartTotalAmount = useAppSelector((state) => state.cart.cartTotalAmount)

  const cartTotalQuantity = useAppSelector(
    (state) => state.cart.cartTotalQuantity
  )

  const auth = useAppSelector((state) => state.auth)

  const handleRemoveFromCart = (item: {
    _id: string
    name: string
    price: number
    description: string
    image: string
    cartQuantity: number
  }) => {
    dispatch(removeFromCart(item))
    dispatch(getTotals())
  }

  const handleDecreaseQuantity = (item: {
    _id: string
    name: string
    price: number
    description: string
    image: string
    cartQuantity: number
  }) => {
    dispatch(decreaseCart(item))
    dispatch(getTotals())
  }

  const handleIncreaseQuantity = (item: {
    _id: string
    name: string
    price: number
    description: string
    image: string
    cartQuantity: number
  }) => {
    dispatch(addToCart(item))
    dispatch(getTotals())
  }

  const dispatch = useAppDispatch()

  return (
    <>
      <Badge
        showZero
        badgeContent={cartTotalQuantity}
        color="error"
        max={5}
        onClick={onOpenCart}
        invisible={cartTotalQuantity === 0}
        sx={{
          '& .MuiBadge-badge': {
            right: 5,
            top: 5,
            minWidth: '13px',
          },
        }}
      >
        <IconButton sx={{ color: 'white' }}>
          <ShoppingCart />
        </IconButton>
      </Badge>

      <Drawer
        anchor="right"
        open={openCart}
        onClose={onCloseCart}
        PaperProps={{
          sx: { width: 350, border: 'none', overflow: 'hidden' },
        }}
      >
        <Box padding="30px" overflow="auto" height="100%">
          {/* HEADER */}
          <FlexBox mb="15px">
            <Typography>SHOPPING BAG ({cartTotalQuantity})</Typography>
          </FlexBox>
          <Divider variant="fullWidth" />
          {/* CART LIST */}
          <Box>
            {cartItems?.map((item) => (
              <Box key={item._id}>
                <FlexBox p="15px 0">
                  <Box flex="1 1 40%">
                    <img
                      alt={item?.name}
                      width="123px"
                      height="164px"
                      src={item.image}
                    />
                  </Box>
                  <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                      <Typography fontWeight="bold">{item.name}</Typography>
                      <IconButton onClick={() => handleRemoveFromCart(item)}>
                        <CloseIcon />
                      </IconButton>
                    </FlexBox>
                    <Typography>{item.description}</Typography>
                    <FlexBox m="15px 0">
                      <Box
                        display="flex"
                        alignItems="center"
                        border={'1.5px solid black'}
                      >
                        <IconButton
                          onClick={() => handleDecreaseQuantity(item)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{item.cartQuantity}</Typography>
                        <IconButton
                          onClick={() => handleIncreaseQuantity(item)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>
                      <Typography fontWeight="bold">
                        ${(item.price * item.cartQuantity).toFixed(2)}
                      </Typography>
                    </FlexBox>
                  </Box>
                </FlexBox>
                <Divider />
              </Box>
            ))}
          </Box>
          <Box m="20px 0">
            <FlexBox m="20px 0">
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${cartTotalAmount}</Typography>
            </FlexBox>
            {/* <Button
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
            > */}

            {auth._id ? (
              <PayButton cartItems={cartItems} />
            ) : (
              <Button
                sx={{
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
                onClick={() => navigate('/login')}
              >
                Login to checkout
              </Button>
            )}

            {/* <PayButton cartItems={cartItems} /> */}
            {/* </Button> */}
          </Box>
        </Box>
      </Drawer>
    </>
  )
}
