import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('/css/fluid.css');
  @import url('/css/normalize.min.css');

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans'), url('/fonts/WorkSans-VariableFont_wght.ttf');
  }

  :root {
    --color-magenta: #ed07b7;
    --color-dark-magenta: #bd0592;
    --color-purple: #6920b0;
    --color-sky-blue: #acdaff;
    --color-grey: #555;
    --color-light-grey: #f4f4f4;
    --color-white: #fff;
    --color-black: #000;
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
`

export * from '@emotion/react'
export { default as styled } from '@emotion/styled'
