import type { Component } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Button, Grid } from '@/components'
import { styled } from '@/styles'

const validationSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  newsletter: yup.boolean().default(true),
  message: yup.string().trim().required(),
})

type FormFields = {
  name: string
  email: string
  newsletter: boolean
  message: string
}

const ContactFormComponent: Component = (props) => {
  const { register, handleSubmit, reset } = useForm<FormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<FormFields> = ({ name, email, newsletter, message }) => {
    const data = `Name: ${name}
      Email: ${email}
      Newsletter?: ${newsletter ? 'yes' : 'no'}
      Message: ${message}
    `

    toast(data, {
      icon: <FontAwesomeIcon size='2x' icon={faEnvelopeCircleCheck} className='contact__form--icon' />,
      duration: 5_000,
      position: 'top-center',
      ariaProps: { role: 'alert', 'aria-live': 'assertive' },
      className: 'contact__form--toast',
    })

    reset()
  }

  return (
    <form {...props} aria-label='Send a message' onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='name' className='contact__form--label'>
            Name
          </label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <input
            type='text'
            id='name'
            className='contact__form--control'
            placeholder='your name'
            spellCheck={false}
            autoCorrect='off'
            {...register('name')}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='email' className='contact__form--label'>
            Email
          </label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <input
            type='email'
            id='email'
            className='contact__form--control'
            placeholder='your email'
            {...register('email')}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='newsletter' className='contact__form--label'>
            Newsletter?
          </label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <input
            type='checkbox'
            id='newsletter'
            className='contact__form--checkbox'
            defaultChecked
            {...register('newsletter')}
          />
          Yes, Please
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='message' className='contact__form--label'>
            Drop us a line
          </label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <textarea
            id='message'
            className='contact__form--control'
            placeholder='your message'
            {...register('message')}
          />
        </Grid.Col>
      </Grid.Row>

      <Grid.Row>
        <Grid.Col isOneThird>&nbsp;</Grid.Col>
        <Grid.Col isTwoThirds>
          <Button text='Send it!' isFull isSubmit />
        </Grid.Col>
      </Grid.Row>

      <Toaster />
    </form>
  )
}

const ContactForm = styled(ContactFormComponent)`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  color: var(--color-grey);

  .contact__form {
    &--label {
      user-select: none;
    }

    &--control {
      width: 100%;
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

    &--checkbox {
      margin: 10px 5px 10px 0;
    }

    &--toast {
      text-align: center;
      color: var(--color-primary);
      background-color: var(--color-light);
    }

    &--icon {
      color: var(--color-secondary);
    }
  }
`

export default ContactForm
