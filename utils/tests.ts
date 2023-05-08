import type { ReactElement } from 'react'
import { create } from 'react-test-renderer'

const customCreate = (element: ReactElement) => create(element).toJSON()
export { customCreate as create }

export * from '@testing-library/react'
export * from 'jest-axe'
export { default as userEvent } from '@testing-library/user-event'
