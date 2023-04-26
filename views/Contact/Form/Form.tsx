import type { Component } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { string, boolean, object, type ObjectSchema } from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'

type FormFields = {
  name: string
  email: string
  newsletter: boolean
  message: string
}

const validationSchema: ObjectSchema<FormFields> = object().shape({
  name: string().trim().required(),
  email: string().trim().email().required(),
  newsletter: boolean().default(true),
  message: string().trim().required(),
})

const FormComponent: Component = (props) => {
  const { register, handleSubmit, reset } = useForm<FormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<FormFields> = ({ name, email, newsletter, message }) => {
    const data = `Name: ${name}
      Email: ${email}
      Newsletter?: ${newsletter ? 'yes' : 'no'}
      Message: ${message}
    `

    toast(data, {
      icon: <FontAwesomeIcon size='2x' icon='envelope-circle-check' className='icon' />,
      duration: 5_000,
      position: 'top-center',
      ariaProps: { role: 'alert', 'aria-live': 'assertive' },
      className: 'toast',
    })

    reset()
  }

  return (
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
          <Button text='Send it!' isFull isSubmit />
        </Grid.Col>
      </Grid.Row>
      <Toaster />
    </form>
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

  .toast {
    text-align: center;
    color: var(--color-primary);
    background-color: var(--color-light);
  }

  .icon {
    color: var(--color-secondary);
  }
`

export default Form
