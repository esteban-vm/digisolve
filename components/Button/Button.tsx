import type { ButtonComponent as ButtonComponentType } from '@/types'
import Link from 'next/link'
import { styled } from '@/styles'

const ButtonComponent: ButtonComponentType = ({ isSubmit, href = '#', className, text }) => {
  return (
    <span className={className}>
      {isSubmit ? (
        <input type='submit' value={text} />
      ) : (
        <Link href={href} role='button'>
          {text}
        </Link>
      )}
    </span>
  )
}

const Button = styled(ButtonComponent)`
  display: inline-block;

  a,
  input[type='submit'] {
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
    padding: 10px 30px;
    border-radius: 200px;
    font-weight: 500;
    outline: none;
    transition: background-color 500ms;
    border: 2px solid var(--color-primary);

    background-color: ${({ isFull }) => (isFull ? 'var(--color-primary)' : 'transparent')};
    color: ${({ isFull }) => (isFull ? 'var(--color-white)' : 'var(--color-primary)')};

    :hover,
    :active {
      background-color: ${({ isFull }) => (isFull ? 'var(--color-dark-primary)' : 'var(--color-primary)')};
      color: ${({ isFull }) => !isFull && 'var(--color-white)'};
    }
  }
`

Button.defaultProps = {
  isFull: false,
  isSubmit: false,
}

export default Button
