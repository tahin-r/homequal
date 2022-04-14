import React, { useEffect }                  from 'react'
import { Header }                            from './app/Layout/Header'
import { ThemeProvider }                     from 'styled-components'
import { muiTheme }                          from './shared/styles/muiTheme'
import { theme }                             from './shared/styles/theme'
import { BaseStyles }                        from './shared/styles/baseStyles'
import { AppRoutes }                         from './shared/Routes'
import { BrowserRouter, useLocation }        from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'


function App() {

  const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={ { ...muiTheme, ...theme } }>
      <MuiThemeProvider theme={ muiTheme }>
        <ScrollToTop/>
          <BaseStyles/>
          <Header/>
          <AppRoutes/>
      </MuiThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
