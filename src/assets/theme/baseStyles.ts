import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import { theme } from './theme'

export const BaseStyles = createGlobalStyle`
  ${ reset }
    /* http://meyerweb.com/eric/tools/css/reset/ 
       v2.0 | 20110126
       License: none (public domain)
    */
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

  #root {
    min-height : 100%;
  }

  body, html {
    height : 100%;
    overflow: initial;
    padding: 0;
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

  ol, ul {
    list-style : none;
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

  input::-ms-clear,
  input::-ms-reveal {
    display : none;
    height  : 0;
    width   : 0;
  }

  .hidden {
    position : absolute;
    width    : 0;
    height   : 0;
    opacity  : 0;
    padding  : 0;
    margin   : 0;
    border   : none;
    outline  : none;
  }

  .disabled {
    opacity : .7;
    cursor  : default;
  }

  fieldset {
    min-width : 0;
    max-width : 100%;
    width     : 100%;
  }

  *:focus {
    outline : none;
  }

  fieldset:disabled .MuiInput-underline::before {
    border-bottom : none !important;
  }

  .MuiTableRow-head .MuiTableCell-head {
    white-space : pre;
  }

  .MuiPickersDay-dayDisabled {
    opacity : .5;
  }

  .padding-0 {
    padding : 0 !important;
  }

  .not-implemented {
    position : relative;
    z-index  : 1;
  }

  .not-implemented:before {
    content        : '';
    position       : absolute;
    top            : 0;
    left           : 0;
    z-index        : 9999;
    width          : 100%;
    height         : 100%;
    opacity        : .45;
    border-radius  : inherit;
    pointer-events : none;
    background     : repeating-linear-gradient(135deg, #d0d0d0, #d0d0d0 10px, #ffffff00 10px, #ffffff00 20px);
  }

  .not-implemented:after {
    display : block;
    content : "";
    clear   : both;
  }

  .ReactInputVerificationCode__container .ReactInputVerificationCode__item.is-active {
    box-shadow : inset 0 0 0 2px #547cd3 !important;
  }

  :root {
    --ReactInputVerificationCode-itemWidth   : 40px !important;
    --ReactInputVerificationCode-itemHeight  : 40px !important;
    --ReactInputVerificationCode-itemSpacing : 12px !important;
  }

  .ReactInputVerificationCode__item {
    font-size        : 1rem !important;
    border           : solid 2px transparent;
    background-color : #e7efff;
    box-shadow       : none !important;
    font-weight      : normal !important;
  }

  .ReactInputVerificationCode__container {
    width  : 100%;
    margin : 13px 0 28px 0;
  }

  .MuiInputAdornment-root .MuiSvgIcon-root {
    fill    : #272932;
    width   : 16px;
    opacity : .7;
  }

  .carousel .control-dots .dot {
    background : #000;
    box-shadow : none;
    opacity    : .6;
  }

  p {
    line-height : 1.57;
  }

  .react-daterange-picker {
    position : absolute;
    width    : 100%;
    z-index  : 9;
  }

  .react-daterange-picker__calendar .react-calendar {
    width         : 280px;
    flex-grow     : 0;
    padding       : 17px 16px 18px 14px;
    box-shadow    : 0 0 8px 0 rgb(0 0 0 / 12%);
    border        : none;
    background    : #fafafa;
    border-radius : 9px;
  }

  .react-calendar__month-view__weekdays abbr {
    text-decoration : none;
    color           : #8f9296;
  }

  .react-calendar__navigation button {
    min-width : 30px;
  }

  .react-calendar__tile--active {
    background : #8fadf1;
  }

  .react-calendar__tile--hasActive {
    color : #fff;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus,
  .react-calendar__tile--now {
    background-color : #e4572e !important;
    color            : #fff;
  }

  .react-calendar__tile:enabled:hover:not(.react-calendar__tile--range),
  .react-calendar__tile:enabled:focus:not(.react-calendar__tile--range) {
    border-radius    : 100%;
    background-color : #7e9ce0;
    color            : #fff;
  }

  .react-calendar__tile--now:not(.react-calendar__tile--range) {
    border-radius : 100%;
  }

  .react-calendar__year-view,
  .react-calendar__decade-view {
    padding : 0 20px;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding-left  : 0;
    padding-right : 0;
  }

  .react-calendar__tile--range {
    border-radius : 0;
  }

  .react-calendar__tile--rangeStart {
    border-top-left-radius    : 100%;
    border-bottom-left-radius : 100%;
  }

  .react-calendar__tile--rangeEnd {
    border-top-right-radius    : 100%;
    border-bottom-right-radius : 100%;
  }

  .react-daterange-picker__wrapper {
    display       : none;
    height        : 40px;
    font-weight   : 400;
    border-radius : 9px;
    border        : dashed 1px ${ theme.colors.primary };
    padding       : 0 12px;
  }

  .react-daterange-picker__inputGroup__input {
    color : #272932;
  }

  .react-daterange-picker__calendar-button {
    order : -1;
  }

  .class-font-colour-gray {
    color : rgba(0, 0, 0, 0.38);
  }

  .MuiPickersModal-dialogRoot .MuiButton-textPrimary {
    padding : 10px 32px;
  }

  .MuiPickersBasePicker-container.MuiPickersBasePicker-containerLandscape {
    padding-left : 150px;
  }

  .MuiPickersDatePickerRoot-toolbarLandscape,
  .MuiPickersTimePickerToolbar-toolbarLandscape {
    position : absolute;
    left     : 0;
    height   : 100%;
  }

  .MuiPickersTimePickerToolbar-toolbarLandscape .MuiTypography-h3 {
    font-size   : 36px;
    font-weight : 400;
  }

  .MuiPickersTimePickerToolbar-hourMinuteLabelAmpmLandscape {
    margin : auto auto 0;
  }

  .MuiPickersModal-dialogRoot .MuiDialogActions-root {
    justify-content : space-around;
    padding         : 20px 32px;
    width           : calc(100% - 150px);
    align-self      : flex-end;
  }
`
