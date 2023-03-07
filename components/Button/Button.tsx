import { styled, css } from '@/styles'

type ButtonProps = {
  /** Is full or not */
  isFull?: boolean
}

const Button = styled.a<ButtonProps>`
  &:link,
  &:visited {
    text-decoration: none;
    padding: 10px 30px;
    border-radius: 200px;
    font-weight: 500;
    outline: none;
    transition: background-color 500ms;

    ${({ isFull }) => {
      if (isFull) {
        return css`
          background-color: var(--primary-color);
          color: #fff;

          &:hover,
          &:active {
            background-color: var(--primary-color-dark);
          }
        `
      }
    }};
  }
`

export default Button
