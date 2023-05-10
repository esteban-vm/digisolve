import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, boolean, object, type ObjectSchema } from 'yup'

type FormValues = {
  name: string
  email: string
  newsletter: boolean
  message: string
}

const validationSchema: ObjectSchema<FormValues> = object().shape({
  name: string().trim().required(),
  email: string().trim().email().required(),
  newsletter: boolean().default(true),
  message: string().trim().required(),
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
    formState: { isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(validationSchema), defaultValues })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setFormValues({ ...formValues, ...data })
    reset()
  }

  return {
    values: formValues,
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
