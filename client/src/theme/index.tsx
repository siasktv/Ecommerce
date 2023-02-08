import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles"

interface Props {
    children: React.ReactNode
}

const MuiThemeProvider: React.FC<Props> = ({children}) => {
    const theme = createTheme({});
  
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiThemeProvider;