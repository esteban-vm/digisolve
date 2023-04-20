import { render, cleanup, screen, create, userEvent } from '@/tests'
import Form from './Form'

describe('🧪 FORM:', () => {
  describe('display tests:', () => {
    beforeEach(() => {
      render(<Form />)
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const form = screen.getByRole('form', { name: /^send a message$/i })
      expect(form).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the field for name', () => {
        const nameField = screen.getByPlaceholderText(/^your name$/i)
        expect(nameField).toBeInTheDocument()
        expect(nameField).toBeVisible()
        expect(nameField).toHaveAccessibleName(/^name$/i)
      })

      it('the field for email', () => {
        const emailField = screen.getByPlaceholderText(/^your email$/i)
        expect(emailField).toBeInTheDocument()
        expect(emailField).toBeVisible()
        expect(emailField).toHaveAccessibleName(/^email$/i)
      })

      it('the checkbox for newsletter', () => {
        const checkbox = screen.getByRole('checkbox', { name: /^newsletter\?$/i })
        expect(checkbox).toBeInTheDocument()
        expect(checkbox).toBeVisible()
      })

      it('the text box for message', () => {
        const messageField = screen.getByPlaceholderText(/^your message$/i)
        expect(messageField).toBeInTheDocument()
        expect(messageField).toBeVisible()
        expect(messageField).toHaveAccessibleName(/^drop us a line$/i)
      })
    })
  })

  describe('submit tests:', () => {
    beforeEach(() => {
      render(<Form />)
    })

    afterEach(cleanup)

    it('should fail with all fields empty', async () => {
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.click(submitButton)
      const notification = screen.queryByRole('alert')
      const nameField = screen.getByPlaceholderText(/^your name$/i)
      expect(notification).not.toBeInTheDocument()
      expect(nameField).toHaveFocus()
    })

    it('should succeed with all fields full', async () => {
      const nameField = screen.getByPlaceholderText(/^your name$/i)
      const emailField = screen.getByPlaceholderText(/^your email$/i)
      const messageField = screen.getByPlaceholderText(/^your message$/i)
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(messageField, 'test message')
      await userEvent.click(submitButton)
      const notification = await screen.findByRole('alert')
      expect(notification).toBeInTheDocument()
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<Form />)
      expect(tree).toMatchSnapshot()
    })
  })
})
