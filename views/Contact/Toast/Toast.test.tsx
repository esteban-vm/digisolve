import { render, cleanup, screen, create } from '@/tests'
import Toast from './Toast'

describe('🧪 TOAST:', () => {
  describe('display tests:', () => {
    beforeEach(() => {
      render(
        <Toast isOpen>
          <p>Test</p>
        </Toast>
      )
    })

    afterEach(cleanup)

    it('should be accessible', () => {
      const toast = screen.getByRole('dialog', { hidden: true })
      expect(toast).toBeInTheDocument()
    })

    describe('should be displayed:', () => {
      it('the heading', () => {
        const heading = screen.getByRole('heading', {
          name: /^submitted successfully$/i,
          level: 2,
          hidden: true,
        })

        expect(heading).toBeInTheDocument()
      })

      it('the icon', () => {
        const icon = screen.getByRole('img', { hidden: true })
        expect(icon).toBeInTheDocument()
      })

      it('the button', () => {
        const button = screen.getByRole('button', { name: /^ok$/i, hidden: true })
        expect(button).toBeInTheDocument()
      })

      it('children elements', () => {
        const paragraph = screen.getByText(/^test$/i)
        expect(paragraph).toBeInTheDocument()
      })
    })
  })

  describe('style tests:', () => {
    it('should render with correct styles', () => {
      const tree = create(
        <Toast isOpen>
          <p>Test</p>
        </Toast>
      )

      expect(tree).toMatchSnapshot()
    })
  })
})
