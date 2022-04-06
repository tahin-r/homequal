import { createTheme }       from '@material-ui/core/styles'
import { PaletteOptions }    from '@material-ui/core/styles/createPalette'
import { TypographyOptions } from '@material-ui/core/styles/createTypography'
import { Overrides }         from '@material-ui/core/styles/overrides'
import { theme }             from './theme'

const typography: TypographyOptions = {
  htmlFontSize  : 18,
  fontFamily    : 'Open Sans, serif',
  h1            : {
    fontWeight: 500,
  },
  h2            : {
    fontWeight: 500,
  },
  h3            : {
    fontWeight: 500,
  },
  h4            : {
    fontWeight: 400,
  },
  h5            : {
    fontWeight: 400,
  },
  h6            : {
    fontWeight: 300,
  },

  fontWeightBold: 500,
  fontWeightLight: 300,

}

const palette: PaletteOptions = {
  primary    : {
    main        : theme.colors.primary,
    light       : `${ theme.colors.primary }35`,
    contrastText: theme.colors.white,
  },
  secondary  : {
    main        : theme.colors.secondary,
    light       : `${ theme.colors.secondary }35`,
    contrastText: theme.colors.white,
  },
  error      : {
    main: theme.colors.error,
  },
  warning    : {
    main: theme.colors.warning,
  },
  info       : {
    main: theme.colors.info,
  },
  success    : {
    main: theme.colors.success,
  },
  common     : {
    black: theme.colors.black,
    white: theme.colors.white,
  },
  text       : {
    primary  : theme.colors.black,
    disabled : theme.colors.disabled,
    secondary: theme.colors.darkGrey,
    hint     : theme.colors.darkGrey,
  },
  background : {
    default: theme.colors.grey,
    paper  : theme.colors.white,
  },
  tonalOffset: 0.2,
}

const overrides: Overrides = {
// MuiTypography: {
//     body1: {
//       fontSize  : 14,
//       fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif'
//     },
//     body2: {
//       fontSize  : 16,
//       fontWeight: 700,
//       fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif'
//     },
//     h1   : {
//       fontFamily: 'Jost',
//       fontWeight: 500,
//     },
//     h3   : {
//       fontFamily                 : 'Jost',
//       fontSize                   : 20,
//       fontWeight                 : 500,
//       letterSpacing              : '0.4px',
//       color                      : '#2c3f69',
//       '@media (max-width: 768px)': {
//         fontSize: 16,
//       },
//     },
//     h4   : {
//       fontSize  : 'initial',
//       fontWeight: 'initial',
//       fontFamily: 'initial',
//       color     : 'initial'
//     },
//     h5   : {
//       fontFamily: 'initial'
//     },
//     h6   : {
//       fontSize  : 'initial',
//       fontWeight: 'initial',
//       color     : 'initial',
//     }
//   },
//   MuiBackdrop               : {
//     root: {
//       backgroundColor: 'rgb(0 0 0 / 70%)'
//     }
//   },
//   MuiButton                 : {
//     root             : {
//       padding      : '8px 16px',
//       textTransform: 'none',
//       fontSize     : 16,
//       letterSpacing: '.5px',
//       borderRadius : 8,
//       boxShadow    : 'none'
//     },
//     contained        : {
//       boxShadow       : 'none',
//       '&:hover'       : {
//         boxShadow: 'none',
//       },
//       '&.Mui-disabled': {
//         color  : 'rgb(255 255 255 / 70%)',
//         opacity: 0.5
//       }
//     },
//     outlined         : {
//       '&.Mui-disabled': {
//         border     : 'solid 2px #547cd3',
//         color      : '#547cd3',
//         borderWidth: 2,
//         opacity    : 0.5
//       }
//     },
//     containedPrimary : {
//       backgroundColor: '#547cd3',
//     },
//     outlinedPrimary  : {
//       color       : '#547cd3',
//       fontWeight  : 600,
//       padding     : '6px 18px',
//       borderRadius: 9,
//       border      : 'solid 2px #547cd3',
//       boxShadow   : '0 3px 8px 0 rgba(0, 0, 0, 0.06)',
//       '&:hover'   : {
//         borderWidth: 2
//       },
//     },
//     outlinedSizeLarge: {
//       padding: '5px 14px'
//     }
//   },
//   MuiSelect                 : {
//     root    : {
//       display      : 'flex',
//       padding      : '7px 15px',
//       textTransform: 'none',
//       boxSizing    : 'border-box',
//       alignItems   : 'center',
//       minHeight    : '40px !important'
//     },
//     select  : {
//       '&:focus': {
//         borderRadius: 8
//       }
//     },
//     outlined: {
//       borderRadius   : 9,
//       backgroundColor: '#fafafa',
//       boxShadow      : '0 0 8px 0 rgb(0 0 0 / 12%)'
//     },
//     icon    : {
//       marginRight: '5px'
//     }
//   },
//   MuiFormHelperText         : {
//     root: {
//       left      : 0,
//       bottom    : 0,
//       lineHeight: 1.3,
//       position  : 'absolute',
//       marginLeft: '0 !important',
//       transform : 'translate(0, 100%)',
//     }
//   },
//   MuiBadge                  : {
//     badge                        : {
//       fontFamily: 'Jost',
//       padding   : '0 3px 0 3px',
//       '& svg'   : {
//         maxWidth : '100%',
//         maxHeight: '100%',
//       }
//     },
//     anchorOriginTopRightRectangle: {
//       top  : 4,
//       right: 6,
//     },
//     colorSecondary               : {
//       backgroundColor: theme.colors.warning
//     }
//   },
//   MuiInputBase              : {
//     root : {
//       '&.Mui-error .MuiInputBase-input': {
//         borderColor: '#e42e2e',
//       },
//     },
//     input: {
//       fontSize    : 16,
//       border      : 'solid 2px transparent',
//       borderRadius: 6,
//
//       '&:focus': {
//         border         : 'solid 2px #547cd3',
//         boxShadow      : '0 0 2px #547cd3',
//         backgroundColor: '#fafafa'
//       }
//     }
//   },
//   MuiFormLabel              : {
//     root: {
//       '&.Mui-focused': {
//         color: '#272932',
//       }
//     }
//   },
//   MuiInputLabel             : {
//     root: {
//       color       : '#000000',
//       transform   : 'translate(14px, 14px) scale(1) !important',
//       margin      : '-10px -13px 25px',
//       fontSize    : 13,
//       fontFamily  : 'Lato, Roboto, Helvetica, Arial, sans-serif',
//       fontWeight  : 'normal',
//       borderRadius: 6,
//     }
//   },
//   MuiPaper                  : {
//     root      : {
//       // overflow: 'hidden'
//     },
//     rounded   : {
//       borderRadius: 8
//     },
//     elevation1: {
//       boxShadow: '0px 3px 5px -1px rgb(0 0 0 / 1%), 0px 5px 8px 0px rgb(0 0 0 / 5%), 0px 1px 14px 0px rgb(0 0 0 / 6%)'
//     }
//   },
//   MuiInputAdornment         : {
//     root: {
//       '.MuiSvgIcon-root': {
//         fill: '#000'
//       }
//     }
//   },
//   MuiOutlinedInput          : {
//     root          : {
//       borderRadius: 9,
//       color       : '#272932',
//       marginTop   : 30,
//     },
//     input         : {
//       height   : 40,
//       padding  : '10px 15px',
//       boxSizing: 'border-box'
//     },
//     notchedOutline: {
//       visibility: 'hidden'
//     },
//     adornedEnd    : {
//       paddingRight: 5
//     },
//     multiline     : {
//       padding: 0
//     },
//     inputMultiline: {
//       padding  : '12px 14px',
//       minHeight: 80
//     }
//   },
//   MuiToolbar                : {
//     root: {
//       height         : 72,
//       justifyContent : 'space-between',
//       color          : theme.colors.white,
//       backgroundColor: theme.colors.primary,
//     }
//   },
//   MuiListItemIcon           : {
//     root: {
//       maxWidth: 40
//     }
//   },
//   MuiIconButton             : {
//     label: {
//       maxHeight: '100%',
//     }
//   },
//   MuiTab                    : {
//     root   : {
//       minHeight : 38,
//       minWidth  : '0 !important',
//       fontFamily: 'Jost',
//       padding   : '6px 15px',
//       maxWidth  : 300,
//       whiteSpace: 'nowrap'
//     },
//     wrapper: {
//       fontSize                    : 16,
//       lineHeight                  : '22px',
//       color                       : theme.colors.info,
//       '@media (min-width: 768px)' : {
//         fontSize: 18,
//       },
//       '@media (min-width: 1024px)': {
//         fontSize: 20,
//       }
//     }
//   },
//   MuiTabs                   : {
//     root         : {
//       minHeight   : 40,
//       marginBottom: 32
//     },
//     scrollButtons: {
//       '&.Mui-disabled': {
//         display: 'none'
//       }
//     }
//   },
//   MuiListItem               : {
//     root     : {
//       paddingTop   : 10,
//       paddingBottom: 10,
//
//       '&.Mui-selected, &.Mui-selected:hover': {
//         backgroundColor: '#e7efff'
//       }
//     },
//     dense    : {
//       paddingTop   : 14,
//       paddingBottom: 14,
//
//       '& .MuiTypography-root': {
//         fontSize: 18,
//         color   : theme.colors.black
//       }
//     },
//     container: {
//       borderBottom  : '1px solid #e9e9e9',
//       '&:last-child': {
//         borderBottom: 'none'
//       }
//     },
//     gutters  : {
//       paddingLeft : 11,
//       paddingRight: 11
//     }
//   },
//   MuiListItemSecondaryAction: {
//     root: {
//       fontWeight: 700,
//       fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif'
//     }
//   },
//   MuiDivider                : {
//     root: {
//       backgroundColor: '#e9e9e9',
//       margin         : '25px 0'
//     }
//   },
//   MuiFormControlLabel       : {
//     root               : {
//       marginLeft : 0,
//       marginRight: 0,
//     },
//     labelPlacementStart: {
//       marginLeft: 0,
//
//       '& .MuiTypography-root': {
//         marginRight: 15
//       }
//     }
//   },
//   MuiCollapse               : {
//     wrapper: {
//       justifyContent: 'flex-end'
//     }
//   },
//   MuiDialogTitle            : {
//     root: {
//       padding: '24px 32px',
//     }
//   },
//   MuiDialogActions          : {
//     root: {
//       padding: '24px 32px'
//     }
//   },
//   MuiListItemAvatar         : {
//     root: {
//       marginTop: '0 !important'
//     }
//   },
//   MuiMenu                   : {
//     list: {
//       minWidth: '100px'
//     }
//   }
}

export const muiTheme = createTheme({
  typography,
  overrides,
  palette,
})
