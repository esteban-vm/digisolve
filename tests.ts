import type { ReactElement } from 'react'
import { create, type ReactTestRendererJSON, type TestRendererOptions } from 'react-test-renderer'

const customCreate = (ui: ReactElement, options?: TestRendererOptions) => {
  return create(ui, options).toJSON() as ReactTestRendererJSON
}

export { customCreate as create }
export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
