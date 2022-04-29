import { createGlobalStyle } from 'styled-components'
import { reset }             from 'styled-reset'
import { theme }             from './theme'

export const BaseStyles = createGlobalStyle`
  ${ reset }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin         : 0;
    padding        : 0;
    border         : 0;
    font           : inherit;
    vertical-align : baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display : block;
  }
  ul,ol {
    list-style: initial;
  }
  ul{
    list-style-type: disc;
  }

  #root {
    min-height : 100%;
    height     : 100%;
  }

  body, html {
    height   : 100%;
    overflow : initial;
    padding  : 0;
  }

  html {
    user-select : none;
    padding-top : env(safe-area-inset-top);
  }

  body {
    line-height : 1;
  }

  b, strong {
    font-weight : 700;
  }
  
  blockquote, q {
    quotes : none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content : none;
  }

  table {
    border-collapse : collapse;
    border-spacing  : 0;
  }

  *, *:before, *:after {
    box-sizing : border-box;
  }

  body {
    font-family : "Open Sans Light", serif;
  }

  a {
    color           : ${ theme.colors.primary };
    text-decoration : none;
  }

  a:hover {
    color  : ${ theme.colors.action };
    cursor : pointer;
  }

  .disabled {
    opacity : .7;
    cursor  : default;
  }

  *:focus {
    outline : none;
  }
`
