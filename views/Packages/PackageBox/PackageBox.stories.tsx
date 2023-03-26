import type { Meta, StoryObj } from '@storybook/react'
import { styled } from '@/styles'
import { packages } from '../Packages'
import PackageBox from './PackageBox'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75vw;
`

export default {
  argTypes: {
    benefits: {
      control: false,
    },
  },
  component: PackageBox,
  title: 'Views/Packages/Packages',
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
    layout: 'centered',
  },
} as Meta<typeof PackageBox>

const [package1, package2, package3] = packages

export const PackageExample1: StoryObj<typeof PackageBox> = { args: package1 }
export const PackageExample2: StoryObj<typeof PackageBox> = { args: package2 }
export const PackageExample3: StoryObj<typeof PackageBox> = { args: package3 }
