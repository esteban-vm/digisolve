import type { BasicComponent } from '@/types'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import toast, { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components'
import { styled } from '@/styles'

const validationSchema = yup.object().shape({
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  message: yup.string().trim(),
})

type FormFields = {
  name: string
  email: string
  newsletter: boolean
  message: string
}

const ContactFormComponent: BasicComponent = (props) => {
  const { register, handleSubmit, reset } = useForm<FormFields>({ resolver: yupResolver(validationSchema) })

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    toast(JSON.stringify(data, null, 2), {
      icon: <FontAwesomeIcon size='2x' icon={faCheckCircle} />,
      duration: 5_000,
      position: 'top-center',
      ariaProps: { role: 'alert', 'aria-live': 'off' },
    })
    reset()
  }

  return (
    <form {...props} data-testid='form' onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='name'>Name</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='text' id='name' placeholder='your name' {...register('name')} />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='email'>Email</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='email' id='email' placeholder='your email' {...register('email')} />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='newsletter'>Newsletter?</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='checkbox' id='newsletter' defaultChecked {...register('newsletter')} />
          Yes, Please
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='message'>Drop us a line</label>
        </div>
        <div className='col span_2_of_3'>
          <textarea id='message' placeholder='your message' {...register('message')} />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3' />
        <div className='col span_2_of_3'>
          <Button text='Send it!' isFull isSubmit />
        </div>
      </div>

      <Toaster />
    </form>
  )
}

const ContactForm = styled(ContactFormComponent)`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  color: var(--color-grey);

  input[type='text'],
  input[type='email'],
  textarea {
    width: 100%;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: var(--color-white);

    ::placeholder {
      text-transform: capitalize;
      opacity: 0.7;
    }
  }

  textarea {
    height: 100px;
    resize: none;
  }

  input[type='checkbox'] {
    margin: 10px 5px 10px 0;
  }

  label {
    user-select: none;
  }
`

export default ContactForm
