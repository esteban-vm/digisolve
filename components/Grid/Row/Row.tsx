import type { ComponentWithChildren } from '@/types'

const Row: ComponentWithChildren = ({ children, className = '' }) => {
  return (
    <div className={`row ${className}`} role='presentation'>
      {children}
    </div>
  )
}

export default Row
