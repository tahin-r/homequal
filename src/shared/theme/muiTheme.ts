import { createTheme } from '@material-ui/core/styles'
import { PaletteOptions } from '@material-ui/core/styles/createPalette'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { theme } from './theme'
import createBreakpoints from '@material-ui/core/styles/createBreakpoints'

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536
  }
})

const typography: TypographyOptions = {
  htmlFontSize: 20,
  fontFamily: 'Open Sans, serif',
  h1: {
    fontWeight: 500
  },
  h2: {
    fontWeight: 500
  },
  h3: {

    fontWeight: 500
  },
  h4: {
    fontWeight: 500,
    fontSize: '2rem',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: '3rem'
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: '4rem'
    }
  },
  h5: {
    fontWeight: 400,
    fontSize: '1.5rem',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: '1.7rem'
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: '1.9rem'
    }
  },
  h6: {
    fontWeight: 300,
    fontSize: '1.2rem',
    [`@media screen and (min-width: ${breakpoints.values?.md}px)`]: {
      fontSize: '1.4rem'
    },
    [`@media screen and (min-width: ${breakpoints.values?.xl}px)`]: {
      fontSize: '1.6rem'
    }
  },
  fontWeightBold: 500,
  fontWeightLight: 300
}

const palette: PaletteOptions = {
  primary: {
    main: theme.colors.primary,
    light: `${theme.colors.primary}35`,
    contrastText: theme.colors.white
  },
  secondary: {
    main: theme.colors.secondary,
    light: `${theme.colors.secondary}35`,
    contrastText: theme.colors.white
  },
  error: {
    main: theme.colors.error
  },
  warning: {
    main: theme.colors.warning
  },
  info: {
    main: theme.colors.info
  },
  success: {
    main: theme.colors.success
  },
  common: {
    black: theme.colors.black,
    white: theme.colors.white
  },
  text: {
    primary: theme.colors.black,
    disabled: theme.colors.disabled,
    secondary: theme.colors.darkGrey,
    hint: theme.colors.darkGrey
  },
  background: {
    default: theme.colors.grey,
    paper: theme.colors.white
  },
  tonalOffset: 0.2
}

export const muiTheme = createTheme({
  breakpoints,
  typography,
  palette
})
