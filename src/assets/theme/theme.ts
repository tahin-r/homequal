export type TThemeColor =
  | 'primary'
  | 'primaryDark'
  | 'secondary'
  | 'action'
  | 'disabled'
  | 'error'
  | 'warning'
  | 'info'
  | 'attention'
  | 'success'
  | 'white'
  | 'black'
  | 'grey'
  | 'lightGrey'
  | 'darkGrey';

export interface ITheme {
  colors: {
    [key in TThemeColor]: string;
  };
}

export const theme: ITheme = {
  colors: {
    primary    : 'rgb(237,31,138)',
    primaryDark: 'rgb(126,17,74)',
    secondary  : '#f3ece7',
    action     : '#69818b',
    disabled   : '#606060',
    error      : '#f44336',
    warning    : '#e4572e',
    info       : '#2c3f69',
    attention  : '#fac05e',
    success    : '#55bd59',
    black      : '#272932',
    white      : '#ffffff',
    grey       : 'rgba(147,146,146,0.25)',
    lightGrey  : 'rgba(211,211,211,0.42)',
    darkGrey   : '#adacac',
  },
}
