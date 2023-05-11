import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, boolean, object, type ObjectSchema } from 'yup'
import { isClean } from '@/helpers'

type FormValues = {
  name: string
  email: string
  newsletter: boolean
  message: string
}

const requiredMsg = 'Your ${path} is required'

const validationSchema: ObjectSchema<FormValues> = object().shape({
  name: string().trim().required(requiredMsg),
  email: string().trim().email('Your ${path} must be valid').required(requiredMsg),
  newsletter: boolean().default(true),
  message: string().trim().required(requiredMsg).test({ test: isClean, message: "Please, don't use bad words" }),
})

const defaultValues: FormValues = {
  name: '',
  email: '',
  newsletter: true,
  message: '',
}

const useCustomForm = () => {
  const [formValues, setFormValues] = useState(defaultValues)

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({ resolver: yupResolver(validationSchema), defaultValues })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setFormValues({ ...formValues, ...data })
    reset()
  }

  return {
    values: formValues,
    errors,
    fields: {
      name: register('name'),
      email: register('email'),
      newsletter: register('newsletter'),
      message: register('message'),
    },
    submit: handleSubmit(onSubmit),
    isSuccess: isSubmitSuccessful,
  }
}

export default useCustomForm
