import React                                 from 'react'
import { Header }                            from './app/Layout/Header'
import { ThemeProvider }                     from 'styled-components'
import { muiTheme }                          from './shared/styles/muiTheme'
import { theme }                             from './shared/styles/theme'
import { BaseStyles }                        from './shared/styles/baseStyles'
import { AppRoutes }                         from './shared/Routes'
import { BrowserRouter }                     from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'


function App() {

  return (
    <>
      <BrowserRouter>
        <MuiThemeProvider theme={ muiTheme }>
          <ThemeProvider theme={ { ...muiTheme, ...theme } }>
            <BaseStyles/>
            <Header/>
            <AppRoutes/>
          </ThemeProvider>
        </MuiThemeProvider>
      </BrowserRouter>
    </>
  )
}

export default App
