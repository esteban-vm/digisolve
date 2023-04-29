import type { Component, PropsWithLink } from '@/types'
import Link from 'next/link'
import { styled, css } from '@/styles'

type ButtonProps = { text: string } & Omit<PropsWithLink<{ isSubmit?: boolean }>, 'id'>

const ButtonComponent: Component<ButtonProps> = ({ text, link = '#', isSubmit, className }) => {
  return (
    <span className={className}>
      {isSubmit ? (
        <input type='submit' value={text} />
      ) : (
        <Link href={link} role='button'>
          {text}
        </Link>
      )}
    </span>
  )
}

type StyledButtonProps = { isFull?: boolean }

const Button = styled(ButtonComponent)<StyledButtonProps>`
  display: inline-block;

  input[type='submit'],
  a {
    cursor: pointer;
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

export default Button
