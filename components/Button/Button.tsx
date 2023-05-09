import type { Component, PropsWithLink } from '@/types'
import { animateScroll as scroll, scroller } from 'react-scroll'
import { styled, css } from '@/styles'

type ButtonProps = Omit<PropsWithLink<{ text: string; isSubmit?: boolean; onClick?: () => void }>, 'id'>

const ButtonComponent: Component<ButtonProps> = ({ text, isSubmit, onClick, link, className }) => {
  const clickHandler = () => {
    if (onClick) {
      onClick()
    } else {
      if (link) scroller.scrollTo(link, { smooth: 'easeInQuint' })
      else scroll.scrollToTop({ smooth: 'easeOutQuint' })
    }
  }

  return (
    <button type={isSubmit ? 'submit' : 'button'} onClick={isSubmit ? undefined : clickHandler} className={className}>
      {text}
    </button>
  )
}

type StyledButtonProps = { isFull?: boolean }

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

  ${({ isFull, isSubmit }) => {
    const shouldBeFull = isFull || isSubmit

    return css`
      background-color: ${shouldBeFull ? 'var(--color-primary)' : 'transparent'};
      color: ${shouldBeFull ? 'var(--color-white)' : 'var(--color-primary)'};

      :hover {
        background-color: ${shouldBeFull ? 'var(--color-dark-primary)' : 'var(--color-primary)'};
        color: ${!shouldBeFull && 'var(--color-white)'};
      }
    `
  }}
`

export default Button
