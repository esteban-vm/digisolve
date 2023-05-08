import type { PropsWithChildren, PropsWithClassName } from '@/types'
import { forwardRef } from 'react'

type RowProps = PropsWithChildren<PropsWithClassName>

const Row = forwardRef<HTMLDivElement, RowProps>(({ children, className = '' }, ref) => {
  return (
    <div className={`row ${className}`} role='presentation' ref={ref}>
      {children}
    </div>
  )
})

Row.displayName = 'Row'

export default Row
