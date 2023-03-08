import type { Meta } from '@storybook/react'
import About from './About'

export default {
  component: About,
  title: 'Views/About',
  decorators: [
    (Story, context) => {
      return (
        <div style={{ width: '100vw', backgroundColor: 'white' }}>
          <Story {...context} />
        </div>
      )
    },
  ],
} as Meta<typeof About>

export const AboutExample = () => <About />
