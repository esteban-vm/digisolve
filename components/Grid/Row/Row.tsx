import type { RowComponent } from '@/types'

const Row: RowComponent = ({ children }) => {
  return (
    <div className='row' role='presentation'>
      {children}
    </div>
  )
}

export default Row
