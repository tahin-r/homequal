import React                from 'react';
import { Header }           from './app/Layout/Header';
import { HashRouter }       from 'react-router-dom';
import { Dashboard }        from './app/Modules/Dashboard/Dashboard';
import { MuiThemeProvider } from '@material-ui/core';
import { ThemeProvider }    from 'styled-components';
import { muiTheme }         from './shared/styles/muiTheme';
import { theme }            from './shared/styles/theme';
import { BaseStyles }       from './shared/styles/baseStyles';

function App() {

  return (
    <>
      <Header/>
      <HashRouter>
        <MuiThemeProvider theme={ muiTheme }>
          <ThemeProvider theme={ { ...muiTheme, ...theme } }>
            <BaseStyles/>
            <Dashboard/>
          </ThemeProvider>
        </MuiThemeProvider>
      </HashRouter>
    </>
  )
}

export default App
