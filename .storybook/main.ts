import type { StorybookConfig } from '@/stories'

const config: StorybookConfig = {
  stories: ['../(components|views)/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
  ],
  framework: '@storybook/nextjs',
  docs: { autodocs: 'tag' },
  staticDirs: ['../public'],
}

export default config
