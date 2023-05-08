import type { PropsWithChildren, PropsWithClassName } from '@/types'
import { forwardRef } from 'react'

type ColProps = PropsWithChildren<
  PropsWithClassName<
    Partial<{
      /** class name: span_1_of_2 */
      isHalf: boolean
      /** class name: span_2_of_2 */
      isFull: boolean
      /** class name: span_1_of_3 */
      isOneThird: boolean
      /** class name: span_2_of_3 */
      isTwoThirds: boolean
      /** class name: span_1_of_4 */
      isOneQuarter: boolean
      /** class name: span_3_of_4 */
      isThreeQuarters: boolean
    }>
  >
>

const Col = forwardRef<HTMLDivElement, ColProps>(({ children, className = '', ...sizes }, ref) => {
  const span = sizes.isHalf
    ? 'span_1_of_2'
    : sizes.isFull
    ? 'span_2_of_2'
    : sizes.isOneThird
    ? 'span_1_of_3'
    : sizes.isTwoThirds
    ? 'span_2_of_3'
    : sizes.isOneQuarter
    ? 'span_1_of_4'
    : sizes.isThreeQuarters
    ? 'span_3_of_4'
    : ''

  return (
    <div className={`col ${span} ${className}`} role='presentation' ref={ref}>
      {children}
    </div>
  )
})

Col.displayName = 'Col'

export default Col
