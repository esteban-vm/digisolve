import { type Meta, within, userEvent } from '@/stories'
import { styled } from '@/styles'
import Form from './Form'

const Wrapper = styled.div`
  padding: 3rem 0;
  width: 60vw;
  background-color: var(--color-white);
  text-align: center;
`

export default {
  component: Form,
  title: 'Views/Contact/Form',
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
    viewport: {
      disable: true,
    },
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const textField = canvas.getByPlaceholderText(/^your name$/i)
    const emailField = canvas.getByPlaceholderText(/^your email$/i)
    const messageField = canvas.getByPlaceholderText(/^your message$/i)
    userEvent.type(textField, 'John Doe')
    userEvent.type(emailField, 'test@example.com')
    userEvent.type(messageField, 'Test message')
  },
} as Meta<typeof Form>

export const Example = () => <Form />
