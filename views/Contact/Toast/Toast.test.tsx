import { render, cleanup, screen, create, axe } from '@/tests'
import Toast from './Toast'

describe('🧪 TOAST:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(
        <Toast isOpen>
          <p>Test</p>
        </Toast>
      ))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    describe('should be rendered:', () => {
      it('the title', () => {
        const title = screen.getByRole('heading', {
          name: /^submitted successfully$/i,
          level: 2,
          hidden: true,
        })

        expect(title).toBeInTheDocument()
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
