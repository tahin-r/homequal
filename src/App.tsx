import React, { useEffect, useState } from 'react'
import { Header } from './app/Layout/Header'
import { ThemeProvider } from 'styled-components'
import { muiTheme } from './shared/theme/muiTheme'
import { theme } from './shared/theme/theme'
import { BaseStyles } from './shared/theme/baseStyles'
import { AppRoutes } from './shared/Routes'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { FormikContext } from './shared/FormikContext'

function App () {
  const ScrollToTop = () => {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }
  const [currentFormikValues, setCurrentFormikValues] = useState({})
  const saveCurrentFormikValues = (values: {}) => {
    setCurrentFormikValues(values)
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={ { ...muiTheme, ...theme } }>
        <MuiThemeProvider theme={ muiTheme }>
          <FormikContext.Provider value={{ currentFormikValues: currentFormikValues, saveCurrentFormikValues }}>
            <ScrollToTop/>
            <BaseStyles/>
            <Header/>
            <AppRoutes/>
          </FormikContext.Provider>
        </MuiThemeProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
