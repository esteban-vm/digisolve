import { css } from '@emotion/react'

export const globalStyles = css`
  @import url('/css/fluid.min.css');
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

    --color-dark: #888;
    --color-darker: #333;

    --color-overlay1: #0000004d;
    --color-overlay2: #000000b3;
    --color-overlay3: #00000080;
    --color-overlay4: #000000cc;

    --color-shadow: #efefefef;

    --color-facebook: #3b5998;
    --color-twitter: #00aced;
    --color-google-plus: #dd4b39;
    --color-youtube: #f00;
    --color-instagram: #517fa4;
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

  * {
    :focus {
      outline: none;
    }

    ::selection {
      background-color: var(--color-primary);
      color: var(--color-light);
    }
  }

  .section {
    &__heading {
      font-size: 250%;
      text-transform: capitalize;
      color: var(--color-black);
      margin-bottom: 20px;
      margin-top: 150px;
    }

    &__subheading {
      font-size: 150%;
      color: var(--color-grey);
      font-weight: 300;
      margin-bottom: 30px;
      line-height: 1.5;

      ::after {
        content: ' ';
        display: block;
        height: 2px;
        width: 100px;
        background-color: var(--color-primary);
        margin: 30px auto 0;
      }
    }
  }
`

export * from '@emotion/react'
export { default as styled } from '@emotion/styled'