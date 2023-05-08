import { render, cleanup, screen, axe } from '@/tests'
import Icon from './Icon'

describe('🧪 ICON:', () => {
  describe('render tests:', () => {
    let container: HTMLElement

    beforeEach(() => {
      void ({ container } = render(<Icon name='check' />))
    })

    afterEach(cleanup)

    it('should be accessible', async () => {
      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('the icon should be rendered', () => {
      const icon = screen.getByRole('img', { hidden: true })
      expect(icon).toBeInTheDocument()
      expect(icon).toBeVisible()
    })
  })
})
