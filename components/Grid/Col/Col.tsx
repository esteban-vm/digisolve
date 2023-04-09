import type { ColComponent } from '@/types'

const Col: ColComponent = ({ children, ...sizes }) => {
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
    <div className={`col ${span}`} role='presentation'>
      {children}
    </div>
  )
}

Col.defaultProps = {
  isHalf: false,
  isFull: false,
  isOneThird: false,
  isTwoThirds: false,
  isOneQuarter: false,
  isThreeQuarters: false,
}

export default Col
