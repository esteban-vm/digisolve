import { renderHook } from '@/tests'
import useForm from './useForm'

describe('🧪 USE FORM:', () => {
  let result: { current: ReturnType<typeof useForm> }

  beforeEach(() => {
    void ({ result } = renderHook(useForm))
  })

  it('should return default form values', () => {
    const { values } = result.current
    expect(values).toHaveProperty('name', '')
    expect(values).toHaveProperty('email', '')
    expect(values).toHaveProperty('newsletter', true)
    expect(values).toHaveProperty('message', '')
  })

  it('should return form errors', () => {
    const { errors } = result.current
    expect(errors).toBeDefined()
    expect(errors.name).toBeUndefined()
    expect(errors.email).toBeUndefined()
    expect(errors.message).toBeUndefined()
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
