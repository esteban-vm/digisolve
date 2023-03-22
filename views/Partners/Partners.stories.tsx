import type { Meta } from '@storybook/react'
import { styled } from '@/styles'
import Partners from './Partners'

const Wrapper = styled.div`
  width: 100%;
  background-color: var(--color-white);
`

export default {
  component: Partners,
  title: 'Views/Partners',
  decorators: [
    (Story, context) => {
      return (
        <Wrapper>
          <Story {...context} />
        </Wrapper>
      )
    },
  ],
} as Meta<typeof Partners>

export const PartnersView = () => <Partners />
