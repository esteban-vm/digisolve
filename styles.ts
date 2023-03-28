import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('/css/fluid.css');
  @import url('/css/normalize.min.css');

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans'), url('/fonts/WorkSans-VariableFont_wght.ttf');
  }

  :root {
    --color-primary: #ed07b7;
    --color-dark-primary: #bd0592;
    --color-secondary: #6920b0;
    --color-tertiary: #acdaff;

    --color-white: #fff;
    --color-grey: #555;
    --color-black: #000;

    --color-light: #f4f4f4;
    --color-lighter: #fcfcfc;

    --color-overlay1: #0000004d;
    --color-overlay2: #000000b3;
    --color-overlay3: #00000080;
    --color-overlay4: #000000cc;

    --color-shadow: #efefefef;
  }

  html,
  body {
    background-color: var(--color-white);
    color: var(--color-black);
    text-rendering: optimizeLegibility;
    font-size: 16px;
    font-family: 'Work Sans', Arial, sans-serif;
    font-weight: 300;
  }

  .row {
    max-width: 1140px;
    margin: 0 auto;
  }

  .clear_fix {
    zoom: 1;

    ::after {
      content: '';
      display: table;
      clear: both;
      visibility: hidden;
    }
  }
`

export * from '@emotion/react'
export { default as styled } from '@emotion/styled'
