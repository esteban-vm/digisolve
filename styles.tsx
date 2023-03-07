import { Global, css } from '@emotion/react'

const styles = css`
  @import url('/css/fluid.css');
  @import url('/css/normalize.min.css');

  @font-face {
    font-family: 'Work Sans';
    src: local('Work Sans'), url('/fonts/WorkSans-VariableFont_wght.ttf');
  }

  :root {
    --primary-color: #ed07b7;
    --primary-color-dark: #bd0592;
    --secondary-color: #6920b0;
    --light-color: #acdaff;
    --dark-color: #555;
  }

  html,
  body {
    background-color: #fff;
    color: #000;
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

export const Globals = () => <Global styles={styles} />
export * from '@emotion/react'
export { default as styled } from '@emotion/styled'
