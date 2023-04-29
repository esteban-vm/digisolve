import { render, cleanup, screen } from '@/tests'
import Col from './Col'

describe('🧪 COL:', () => {
  describe('style tests:', () => {
    describe('should have class name:', () => {
      afterEach(cleanup)

      it('span_1_of_2', () => {
        render(<Col isHalf />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_1_of_2')
      })

      it('span_2_of_2', () => {
        render(<Col isFull />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_2_of_2')
      })

      it('span_1_of_3', () => {
        render(<Col isOneThird />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_1_of_3')
      })

      it('span_2_of_3', () => {
        render(<Col isTwoThirds />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_2_of_3')
      })

      it('span_1_of_4', () => {
        render(<Col isOneQuarter />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_1_of_4')
      })

      it('span_3_of_4', () => {
        render(<Col isThreeQuarters />)
        const colElement = screen.getByRole('presentation')
        expect(colElement).toHaveClass('span_3_of_4')
      })
    })
  })
})
