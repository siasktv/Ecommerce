// @mui
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'
import { Badge, Drawer, IconButton } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

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

export default function CartMenu({
  openCart,
  onOpenCart,
  onCloseCart,
}: CartMenuProps) {
  const cartQuantity = useAppSelector((state) => state.cart.cartTotalQuantity)

  return (
    <>
      <Badge
        showZero
        badgeContent={cartQuantity}
        color="error"
        max={5}
        onClick={onOpenCart}
        // invisible={cartQuantity === 0}
        sx={{
          '& .MuiBadge-badge': {
            right: 5,
            top: 5,
            minWidth: '13px',
          },
        }}
      >
        <IconButton sx={{ color: '#127FFF' }}>
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
      ></Drawer>
    </>
  )
}
