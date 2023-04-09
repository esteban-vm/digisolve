import { render, cleanup, screen } from '@/tests'
import Row from './Row'

describe('🧪 ROW:', () => {
  describe('style tests:', () => {
    it('should have correct class name', () => {
      render(<Row>&nbsp;</Row>)
      const rowElement = screen.getByRole('presentation')
      expect(rowElement).toHaveClass('row')
      cleanup()
    })
  })
})
