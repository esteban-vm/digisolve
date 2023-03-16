import { styled, css } from '@/utils/styles'

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
          background-color: var(--color-primary);
          color: var(--color-white);

          &:hover,
          &:active {
            background-color: var(--color-dark-primary);
          }
        `
      } else {
        return css`
          border: 2px solid var(--color-primary);
          color: var(--color-primary);

          &:hover,
          &:active {
            background-color: var(--color-primary);
            color: var(--color-white);
          }
        `
      }
    }};
  }
`

Button.defaultProps = {
  isFull: false,
  role: 'button',
  href: 'javascript:void(0)',
}

export default Button
