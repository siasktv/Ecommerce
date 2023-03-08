import * as React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import HelpIcon from '@mui/icons-material/Help'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuIcon from '@mui/icons-material/Menu'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { logoutUser } from '../../features/users/authSlice'
import {
  ClickAwayListener,
  Divider,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'

const lightColor = 'rgba(255, 255, 255, 0.7)'

function Header(props: { onDrawerToggle: any; label; selectedTab }) {
  const { onDrawerToggle } = props
  const { label } = props
  const { selectedTab } = props
  const auth = useAppSelector((state) => state.auth)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

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
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="/search"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go to shop
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                sx={{ p: 0.5 }}
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? 'composition-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                <Avatar alt="My Avatar">
                  {auth.name ? auth.name.slice(0, 1) : ''}
                </Avatar>
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
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleLogoutUser}>
                              Logout
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Metrics
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Tabs value={selectedTab} textColor="inherit" textColor="inherit">
          {label.map(({ id }) => (
            <Tab key={id} label={id} />
          ))}
        </Tabs>
      </AppBar>
    </React.Fragment>
  )
}

export default Header
