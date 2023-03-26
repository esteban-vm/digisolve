import type { ButtonComponent as ButtonComponentType } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

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

    background-color: ${({ isFull }) => isFull && 'var(--color-primary)'};
    color: ${({ isFull }) => (isFull ? 'var(--color-white)' : 'var(--color-primary)')};
    border: ${({ isFull }) => !isFull && '2px solid var(--color-primary)'};

    :hover,
    :active {
      background-color: ${({ isFull }) => (isFull ? 'var(--color-dark-primary)' : 'var(--color-primary)')};
      color: ${({ isFull }) => !isFull && 'var(--color-white)'};
    }
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
