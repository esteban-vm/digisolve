import { render, cleanup, screen, create, userEvent } from '@/tests'
import ContactForm from './ContactForm'

describe('🧪 CONTACT FORM:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<ContactForm />)
      parent = screen.getByRole('form')
    })

    afterEach(cleanup)

    it('should display a text field for name', () => {
      const nameField = screen.getByPlaceholderText(/^your name$/i)
      expect(nameField).toBeInTheDocument()
      expect(nameField).toBeVisible()
      expect(parent).toContainElement(nameField)
    })

    it('should display an email field', () => {
      const emailField = screen.getByPlaceholderText(/^your email$/i)
      expect(emailField).toBeInTheDocument()
      expect(emailField).toBeVisible()
      expect(parent).toContainElement(emailField)
    })

    it('should display a checkbox for newsletter', () => {
      const checkbox = screen.getByRole('checkbox', { name: /^newsletter\?$/i })
      expect(checkbox).toBeInTheDocument()
      expect(checkbox).toBeVisible()
      expect(parent).toContainElement(checkbox)
    })

    it('should display a text area for message', () => {
      const messageField = screen.getByPlaceholderText(/^your message$/i)
      expect(messageField).toBeInTheDocument()
      expect(messageField).toBeVisible()
      expect(parent).toContainElement(messageField)
    })
  })

  describe('submit tests:', () => {
    beforeEach(() => {
      render(<ContactForm />)
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
      const tree = create(<ContactForm />)
      expect(tree).toMatchSnapshot()
    })
  })
})
