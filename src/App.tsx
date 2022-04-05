import React, { useEffect } from 'react'
import { Header }           from './app/Layout/Header'
import { ThemeProvider }                     from 'styled-components'
import { muiTheme }                          from './shared/styles/muiTheme'
import { theme }                             from './shared/styles/theme'
import { BaseStyles }                        from './shared/styles/baseStyles'
import { AppRoutes }                         from './shared/Routes'
import { BrowserRouter, useLocation }        from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'


function App() {
  const  ScrollToTop =() => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return (
    <>
      <BrowserRouter>
        <MuiThemeProvider theme={ muiTheme }>
          <ScrollToTop/>
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
