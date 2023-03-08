import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { logoutUser } from '../../features/users/authSlice'
import React, { useState } from 'react'
import {
  Badge,
  Box,
  IconButton,
  Button,
  Link,
  Typography,
  Divider,
} from '@mui/material'
import { Person, ShoppingCart } from '@mui/icons-material'
import DiamondIcon from '@mui/icons-material/Diamond'
import { useNavigate } from 'react-router-dom'
import CartMenu from '../Cart/CartMenu'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

function Navbar() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const auth = useAppSelector((state) => state.auth)

  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<HTMLButtonElement>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }
    setOpen(false)
  }

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    } else if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  const [openCart, setOpenCart] = useState(false)

  const handleOpenCart = () => {
    setOpenCart(true)
  }

  const handleCloseCart = () => {
    setOpenCart(false)
  }

  const handleNavigate = () => {
    navigate('/login')
  }

  const handleLogoutUser = () => {
    dispatch(logoutUser())
    console.log(auth)
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="85px"
      sx={{ backgroundColor: 'white', borderBottom: '1px solid #E0E0E0' }}
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
    >
      <Box
        width="90%"
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
          {auth._id ? (
            <>
              <IconButton
                sx={{ color: 'black' }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Person />
              </IconButton>
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === 'bottom-start'
                          ? 'left top'
                          : 'left bottom',
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={open}
                          id="composition-menu"
                          aria-labelledby="composition-button"
                          onKeyDown={handleListKeyDown}
                        >
                          <MenuItem>
                            <Typography>{auth.name}</Typography>
                          </MenuItem>
                          <MenuItem>
                            <Typography>{auth.email}</Typography>
                          </MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>My account</MenuItem>
                          <MenuItem onClick={handleLogoutUser}>Logout</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          ) : (
            <Button onClick={handleNavigate} variant="outlined">
              Login
            </Button>
          )}

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
