import type { Component } from '@/types'
import { useState } from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, boolean, object, type ObjectSchema } from 'yup'
import { Button, Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import Toast from '../Toast'

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
  newsletter: false,
  message: '',
}

const FormComponent: Component = (props) => {
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

  return (
    <>
      <form aria-label='Send a message' onSubmit={handleSubmit(onSubmit)} noValidate {...props}>
        <Grid.Row>
          <Grid.Col isOneThird>
            <label htmlFor='name'>Name</label>
          </Grid.Col>
          <Grid.Col isTwoThirds>
            <input
              type='text'
              id='name'
              placeholder='your name'
              spellCheck={false}
              autoCorrect='off'
              className='field'
              {...register('name')}
            />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col isOneThird>
            <label htmlFor='email'>Email</label>
          </Grid.Col>
          <Grid.Col isTwoThirds>
            <input type='email' id='email' placeholder='your email' className='field' {...register('email')} />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col isOneThird>
            <label htmlFor='newsletter'>Newsletter?</label>
          </Grid.Col>
          <Grid.Col isTwoThirds>
            <input type='checkbox' id='newsletter' className='check' defaultChecked {...register('newsletter')} />
            Yes, Please
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col isOneThird>
            <label htmlFor='message'>Drop us a line</label>
          </Grid.Col>
          <Grid.Col isTwoThirds>
            <textarea id='message' placeholder='your message' className='field' {...register('message')} />
          </Grid.Col>
        </Grid.Row>
        <Grid.Row>
          <Grid.Col isOneThird />
          <Grid.Col isTwoThirds>
            <Button text='Send it!' isSubmit />
          </Grid.Col>
        </Grid.Row>
        <Toast isOpen={isSubmitSuccessful}>
          <p>{formValues.name}</p>
          <p>{formValues.email}</p>
          <p>{formValues.newsletter ? 'yes' : 'no'}</p>
          <p>{formValues.message}</p>
        </Toast>
      </form>
    </>
  )
}

const Form = styled(FormComponent)`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  color: var(--color-grey);

  ${mediaQuery('sm')} {
    width: 70%;
  }

  ${mediaQuery('xs')} {
    width: 90%;
  }

  label {
    user-select: none;

    ${mediaQuery('xs')} {
      margin-top: 5px;

      ::after {
        content: ':';
      }
    }
  }

  .field {
    width: 95%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: var(--color-white);

    ::placeholder {
      text-transform: capitalize;
      opacity: 0.7;
    }

    :is(textarea) {
      height: 100px;
      resize: none;
    }
  }

  .check {
    margin: 10px 5px 10px 0;

    ${mediaQuery('xs')} {
      margin-top: 2px;
    }
  }
`

export default Form
