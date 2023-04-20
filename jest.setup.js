import '@testing-library/jest-dom/extend-expect'
import { matchers } from '@emotion/jest'
import { Crypto } from '@peculiar/webcrypto'
import '@/icons'

expect.extend(matchers)

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

const cryptoModule = new Crypto()

Object.defineProperty(window, 'crypto', {
  get() {
    return cryptoModule
  },
})
