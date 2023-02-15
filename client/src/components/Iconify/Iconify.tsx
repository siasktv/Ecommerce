import * as PropTypes from 'prop-types'
import { Validator } from 'prop-types'
import * as React from 'react'
import { Icon } from '@iconify/react'
import { Box, BoxProps } from '@mui/material'

interface IconifyProps extends BoxProps {
  icon: string | React.ReactElement<string>
  width?: number | string
}

const Iconify = React.forwardRef<HTMLDivElement, IconifyProps>(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
)

Iconify.propTypes = {
  sx: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]) as Validator<
    React.ReactElement<string> | string
  >,
}

export default Iconify
