import type { ButtonComponent as ButtonComponentType } from '@/types'
import Link from 'next/link'
import { styled, css } from '@/styles'

const ButtonComponent: ButtonComponentType = ({ isSubmit, href = '#', className, text }) => {
  return (
    <span className={className}>
      {isSubmit ? (
        <input type='submit' value={text} className='btn' />
      ) : (
        <Link href={href} role='button' className='btn'>
          {text}
        </Link>
      )}
    </span>
  )
}

const Button = styled(ButtonComponent)`
  display: inline-block;

  .btn {
    cursor: pointer;
    user-select: none;
    text-decoration: none;
    text-transform: capitalize;
    padding: 10px 30px;
    border-radius: 200px;
    font-weight: 500;
    outline: none;
    transition: background-color 500ms;
    border: 2px solid var(--color-primary);

    ${({ isFull }) => {
      return css`
        background-color: ${isFull ? 'var(--color-primary)' : 'transparent'};
        color: ${isFull ? 'var(--color-white)' : 'var(--color-primary)'};

        :hover,
        :active {
          background-color: ${isFull ? 'var(--color-dark-primary)' : 'var(--color-primary)'};
          color: ${!isFull && 'var(--color-white)'};
        }
      `
    }}
  }
`

Button.defaultProps = {
  isFull: false,
  isSubmit: false,
}

export default Button
