import { renderHook } from '@/tests'
import useForm from './useForm'

describe('🧪 USE FORM:', () => {
  let result: { current: ReturnType<typeof useForm> }

  beforeEach(() => {
    void ({ result } = renderHook(useForm))
  })

  it('should return default form values', () => {
    expect(result.current.values).toHaveProperty('name', '')
    expect(result.current.values).toHaveProperty('email', '')
    expect(result.current.values).toHaveProperty('newsletter', true)
    expect(result.current.values).toHaveProperty('message', '')
  })

  it('should return form fields', () => {
    for (const field in result.current.fields) {
      expect(result.current.fields).toHaveProperty(`${field}.name`, field)
    }
  })

  it('should return submit function', () => {
    expect(typeof result.current.submit).toBe('function')
  })

  it('should return a success property', () => {
    expect(typeof result.current.isSuccess).toBe('boolean')
  })
})
