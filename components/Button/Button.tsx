import type { ButtonComponent as ButtonComponentType } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

const ButtonComponent: ButtonComponentType = ({ href = '#', className, role, children }) => {
  return (
    <span className={className}>
      <Link href={href} role={role}>
        {children}
      </Link>
    </span>
  )
}

const Button = styled(ButtonComponent)`
  display: inline-block;

  a {
    :link,
    :visited {
      text-decoration: none;
      text-transform: capitalize;
      padding: 10px 30px;
      border-radius: 200px;
      font-weight: 500;
      outline: none;
      transition: background-color 500ms;
      border: 2px solid var(--color-primary);

      background-color: ${({ isFull }) => isFull && 'var(--color-primary)'};
      color: ${({ isFull }) => (isFull ? 'var(--color-white)' : 'var(--color-primary)')};

      :hover,
      :active {
        background-color: ${({ isFull }) => (isFull ? 'var(--color-dark-primary)' : 'var(--color-primary)')};
        color: ${({ isFull }) => !isFull && 'var(--color-white)'};
      }
    }
  }
`

Button.defaultProps = {
  isFull: false,
  role: 'button',
}

export default Button
