import { type Preview, MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from '@/stories'
import { Global, globalStyles, breakPoints } from '@/styles'
import '@/icons'

/** Custom viewports based on break points */
const CUSTOM_VIEWPORTS: typeof MINIMAL_VIEWPORTS = {
  large: {
    name: 'Large devices',
    styles: { height: '100%', width: breakPoints.lg },
    type: 'other',
  },
  medium: {
    name: 'Medium devices',
    styles: { height: '100%', width: breakPoints.md },
    type: 'other',
  },
  small: {
    name: 'Small devices',
    styles: { height: '100%', width: breakPoints.sm },
    type: 'other',
  },
  extraSmall: {
    name: 'Extra small devices',
    styles: { height: '100%', width: breakPoints.xs },
    type: 'other',
  },
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
    },
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
