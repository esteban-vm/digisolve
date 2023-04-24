import type { Meta } from '@/stories'
import { uuid } from '@/helpers'
import { styled } from '@/styles'
import links from '@/Header/links'
import NavLink from './NavLink'

const Wrapper = styled.div`
  width: 100vw;
  height: 120px;
  background-image: linear-gradient(var(--color-overlay1), var(--color-overlay2)), url('/img/header-img.jpg');
  background-size: cover;
  background-position: top;

  ul {
    float: right;
    margin-top: 70px;
  }
`

export default {
  component: NavLink,
  title: 'Views/Header/Nav Links',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
  parameters: {
    backgrounds: {
      disable: true,
    },
    viewport: {
      disable: true,
    },
  },
} as Meta<typeof NavLink>

export const Example = () => {
  return (
    <ul>
      {links.map((link) => (
        <NavLink key={uuid()} {...link} />
      ))}
    </ul>
  )
}
