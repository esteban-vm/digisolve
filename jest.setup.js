import '@testing-library/jest-dom/extend-expect'
import 'jest-axe/extend-expect'
import { matchers } from '@emotion/jest'

expect.extend(matchers)

beforeAll(() => {
  window.matchMedia = jest.fn()
  HTMLDialogElement.prototype.show = jest.fn()
  HTMLDialogElement.prototype.showModal = jest.fn()
  HTMLDialogElement.prototype.close = jest.fn()
})
