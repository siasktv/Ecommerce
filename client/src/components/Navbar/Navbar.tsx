import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useState } from 'react'
import { Badge, Box, IconButton } from '@mui/material'
import { Person, ShoppingCart } from '@mui/icons-material'
import DiamondIcon from '@mui/icons-material/Diamond'
import { useNavigate } from 'react-router-dom'
import CartMenu from '../Cart/CartMenu'
import shades from '../../theme'
// import { setIsCartOpen } from '../../state'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      sx={{ backgroundColor: '#F5F5F5' }}
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          onClick={() => navigate('/')}
          sx={{ '&:hover': { cursor: 'pointer' } }}
          // color={shades.secondary[500]}
          color="black"
        >
          <DiamondIcon />
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="10px"
          zIndex="2"
        >
          <IconButton sx={{ color: 'black' }}>
            <Person />
          </IconButton>
          <CartMenu
            openCart={openCart}
            onOpenCart={handleOpenCart}
            onCloseCart={handleCloseCart}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
