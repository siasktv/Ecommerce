import React from 'react'
import typography from './typography'
import GlobalStyles from './globalStyles'
import { ThemeProvider, createTheme } from '@mui/material/styles'
interface Props {
  children: React.ReactNode
}

const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: typography.fontFamily,
      h1: typography.h1,
      h2: typography.h2,
      h3: typography.h3,
      h4: typography.h4,
      h5: typography.h5,
      h6: typography.h6,
      subtitle1: typography.subtitle1,
      subtitle2: typography.subtitle2,
      body1: typography.body1,
      body2: typography.body2,
      caption: typography.caption,
      overline: typography.overline,
      button: typography.button,
      // add more styles as needed
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default MuiThemeProvider
