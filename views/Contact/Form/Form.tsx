import type { Component } from '@/types'
import { Button, Grid } from '@/components'
import { useForm } from '@/hooks'
import { styled, mediaQuery } from '@/styles'
import Toast from '../Toast'

const FormComponent: Component = (props) => {
  const { values, fields, submit, isSuccess } = useForm()

  return (
    <form aria-label='Send a message' onSubmit={submit} noValidate {...props}>
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
            {...fields.name}
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='email'>Email</label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <input type='email' id='email' placeholder='your email' className='field' {...fields.email} />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='newsletter'>Newsletter?</label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <input type='checkbox' id='newsletter' className='check' {...fields.newsletter} />
          Yes, Please
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col isOneThird>
          <label htmlFor='message'>Drop us a line</label>
        </Grid.Col>
        <Grid.Col isTwoThirds>
          <textarea id='message' placeholder='your message' className='field' {...fields.message} />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col isOneThird />
        <Grid.Col isTwoThirds>
          <Button text='Send it!' isSubmit />
        </Grid.Col>
      </Grid.Row>
      <Toast isOpen={isSuccess}>
        <div>
          <p>{values.name}</p>
          <p>{values.email}</p>
          <p>{values.newsletter ? 'yes' : 'no'}</p>
          <p>{values.message}</p>
        </div>
      </Toast>
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
`

export default Form
