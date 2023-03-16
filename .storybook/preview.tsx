import React from 'react'
import type { Preview } from '@storybook/react'
import { Global, globalStyles } from '../utils/styles'

const preview: Preview = {
  parameters: {
    backgrounds: { default: 'dark' },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story, context) => {
      return (
        <>
          <Global styles={globalStyles} />
          <Story {...context} />
        </>
      )
    },
  ],
}

export default preview
