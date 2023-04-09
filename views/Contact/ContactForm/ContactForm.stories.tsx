import { type Meta, within, userEvent } from '@/stories'
import { styled } from '@/styles'
import ContactForm from './ContactForm'

const Wrapper = styled.div`
  padding: 3rem 0;
  width: 60vw;
  background-color: var(--color-white);
`

export default {
  component: ContactForm,
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
  },
  play({ canvasElement }) {
    const canvas = within(canvasElement)
    const textField = canvas.getByPlaceholderText(/^your name$/i)
    const emailField = canvas.getByPlaceholderText(/^your email$/i)
    const messageArea = canvas.getByPlaceholderText(/^your message$/i)
    userEvent.type(textField, 'John Doe')
    userEvent.type(emailField, 'test@example.com')
    userEvent.type(messageArea, 'Test message')
  },
} as Meta<typeof ContactForm>

export const Example = () => <ContactForm />
