import type { ButtonComponent as ButtonComponentType } from '@/types'
import Link from 'next/link'
import { styled, css } from '@/styles'

const ButtonComponent: ButtonComponentType = ({ href = '#', ...rest }) => {
  return <Link href={href} {...rest} />
}

const Button = styled(ButtonComponent)`
  :link,
  :visited {
    text-decoration: none;
    text-transform: capitalize;
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

          :hover,
          :active {
            background-color: var(--color-dark-primary);
          }
        `
      } else {
        return css`
          border: 2px solid var(--color-primary);
          color: var(--color-primary);

          :hover,
          :active {
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
  onClick(event) {
    event.preventDefault()
  },
}

export default Button
