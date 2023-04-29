import type { Component, PropsWithChildren } from '@/types'

const Row: Component<PropsWithChildren> = ({ children, className = '' }) => {
  return (
    <div className={`row ${className}`} role='presentation'>
      {children}
    </div>
  )
}

export default Row
