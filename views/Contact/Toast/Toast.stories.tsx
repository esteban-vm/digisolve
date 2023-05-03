import type { Meta } from '@/stories'
import Toast from './Toast'

export default {
  component: Toast,
  title: 'Views/Contact/Toast',
  parameters: {
    layout: 'centered',
    viewport: {
      disable: true,
    },
  },
} as Meta<typeof Toast>

export const Example = () => {
  return (
    <Toast isOpen>
      <p>Test</p>
    </Toast>
  )
}
