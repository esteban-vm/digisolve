import { render, cleanup, screen, create } from '@/tests'
import ContactForm from './ContactForm'

describe('🧪 CONTACT FORM:', () => {
  describe('display tests:', () => {
    let parent: HTMLElement

    beforeEach(() => {
      render(<ContactForm />)
      parent = screen.getByTestId('form')
    })

    afterEach(cleanup)

    it('should display a text field for name', () => {
      const field = screen.getByPlaceholderText(/^your name$/i)
      expect(field).toBeInTheDocument()
      expect(field).toBeVisible()
      expect(parent).toContainElement(field)
    })

    it('should display an email field', () => {
      const field = screen.getByPlaceholderText(/^your email$/i)
      expect(field).toBeInTheDocument()
      expect(field).toBeVisible()
      expect(parent).toContainElement(field)
    })

    it('should display a checkbox for newsletter', () => {
      const checkbox = screen.getByRole('checkbox', { name: /^newsletter\?$/i })
      expect(checkbox).toBeInTheDocument()
      expect(checkbox).toBeVisible()
      expect(parent).toContainElement(checkbox)
    })

    it('should display a text area for message', () => {
      const textArea = screen.getByPlaceholderText(/^your message$/i)
      expect(textArea).toBeInTheDocument()
      expect(textArea).toBeVisible()
      expect(parent).toContainElement(textArea)
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(<ContactForm />)
      expect(tree).toMatchSnapshot()
    })
  })
})
