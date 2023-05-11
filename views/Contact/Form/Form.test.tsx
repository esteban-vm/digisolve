import { render, cleanup, screen, create, userEvent, axe } from '@/tests'
import { mediaQuery } from '@/styles'
import Form from './Form'

describe('🧪 FORM:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Form />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
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

    it('should fail with name empty', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(messageField, 'test message')
      await userEvent.click(submitButton)
      const errorFeedback = screen.getByText(/^your name is required$/i)
      expect(nameField).toHaveFocus()
      expect(errorFeedback).toBeInTheDocument()
    })

    it('should fail with email empty', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(messageField, 'test message')
      await userEvent.click(submitButton)
      const errorFeedback = screen.getByText(/^your email is required$/i)
      expect(emailField).toHaveFocus()
      expect(errorFeedback).toBeInTheDocument()
    })

    it('should fail with message empty', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(emailField, 'test@example.com')
      await userEvent.click(submitButton)
      const errorFeedback = screen.getByText(/^your message is required$/i)
      expect(messageField).toHaveFocus()
      expect(errorFeedback).toBeInTheDocument()
    })

    it('should fail with email invalid', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(emailField, 'wrong email')
      await userEvent.type(messageField, 'test message')
      await userEvent.click(submitButton)
      const errorFeedback = screen.getByText(/^your email must be valid$/i)
      expect(emailField).toHaveFocus()
      expect(errorFeedback).toBeInTheDocument()
    })

    it('should fail with bad words in message', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(messageField, 'sh1t')
      await userEvent.click(submitButton)
      const errorFeedback = screen.getByText(/^please, don't use bad words$/i)
      expect(messageField).toHaveFocus()
      expect(errorFeedback).toBeInTheDocument()
    })

    it('should succeed with all fields full and valid', async () => {
      const [nameField, emailField, messageField] = screen.getAllByRole('textbox')
      const submitButton = screen.getByRole('button', { name: /^send it\!$/i })
      await userEvent.type(nameField, 'John Doe')
      await userEvent.type(emailField, 'test@example.com')
      await userEvent.type(messageField, 'test message')
      await userEvent.click(submitButton)
      const toast = screen.getByRole('dialog', { hidden: true })
      expect(toast).toBeInTheDocument()
    })
  })

  describe('style tests:', () => {
    let tree: ReturnType<typeof create>

    beforeEach(() => {
      tree = create(<Form />)
    })

    it('should render with correct styles', () => {
      expect(tree).toMatchSnapshot()
    })

    describe('should have correct styles on:', () => {
      it('extra small screen devices', () => {
        const media = mediaQuery('xs')
        expect(tree).toHaveStyleRule('width', '90%', { media })
        expect(tree).toHaveStyleRule('margin-top', '5px', { target: 'label', media })
        expect(tree).toHaveStyleRule('margin-top', '2px', { target: '.check', media })
      })

      it('small screen devices', () => {
        expect(tree).toHaveStyleRule('width', '70%', { media: mediaQuery('sm') })
      })
    })
  })
})
