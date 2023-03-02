import { useState } from 'react'
import { Menu, Button, MenuItem, Typography } from '@mui/material'
import { sortedByPrice } from '../../features/products/productsSlice'
import { useAppDispatch } from '../../app/hooks'

const SORT_BY_OPTIONS = [
  // { value: 'newest', label: 'Newest' },
  { value: 'priceDesc', label: 'Price: High-Low' },
  { value: 'priceAsc', label: 'Price: Low-High' },
]

const ProductSort = () => {
  const [open, setOpen] = useState(null)
  const dispatch = useAppDispatch()

  const handleOpen = (event: any) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  function handlePrice(e: any) {
    dispatch(sortedByPrice(e.target.value))
  }

  return (
    <>
      {/* <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        // endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Sort By:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}
        >
         option
        </Typography>
      </Button> */}
      <select
        // keepMounted
        // anchorEl={open}
        // open={Boolean(open)}
        // onClose={handleClose}
        // anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        // transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        onChange={handlePrice}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <option
            key={option.value}
            // selected={option.value === 'newest'}
            // onClick={handleClose}
            // sx={{ typography: 'body2' }}
          >
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}

export default ProductSort
