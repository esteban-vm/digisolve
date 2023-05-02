import type { Component, PropsWithLink } from '@/types'
import { animateScroll as scroll, scroller } from 'react-scroll'
import { styled, css } from '@/styles'

type ButtonProps = { text: string } & Omit<PropsWithLink<{ submit?: boolean }>, 'id'>

const ButtonComponent: Component<ButtonProps> = ({ text, link, submit, className }) => {
  const makeScroll = () => {
    if (link) scroller.scrollTo(link, { smooth: 'easeInQuint' })
    else scroll.scrollToTop({ smooth: 'easeOutQuint' })
  }

  return (
    <button type={submit ? 'submit' : 'button'} onClick={submit ? undefined : makeScroll} className={className}>
      {text}
    </button>
  )
}

type StyledButtonProps = { full?: boolean }

const Button = styled(ButtonComponent)<StyledButtonProps>`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  text-transform: capitalize;
  padding: 10px 30px;
  border-radius: 200px;
  font-weight: 500;
  outline: none;
  transition: background-color 500ms;
  border: 2px solid var(--color-primary);

  ${({ full, submit }) => {
    const isFull = full || submit

    return css`
      background-color: ${isFull ? 'var(--color-primary)' : 'transparent'};
      color: ${isFull ? 'var(--color-white)' : 'var(--color-primary)'};

      :hover {
        background-color: ${isFull ? 'var(--color-dark-primary)' : 'var(--color-primary)'};
        color: ${!isFull && 'var(--color-white)'};
      }
    `
  }}
`

export default Button
