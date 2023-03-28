import type { BasicComponent } from '@/types'
import { Button } from '@/components'
import { styled } from '@/styles'

const ContactFormComponent: BasicComponent = (props) => {
  return (
    <form {...props} data-testid='form'>
      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='name'>Name</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='text' name='name' id='name' placeholder='Your name' required />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='email'>Email</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='email' name='email' id='email' placeholder='Your email' required />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='newsletter'>Newsletter?</label>
        </div>
        <div className='col span_2_of_3'>
          <input type='checkbox' name='newsletter' id='newsletter' defaultChecked />
          Yes, please
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3'>
          <label htmlFor='message'>Drop us a line</label>
        </div>
        <div className='col span_2_of_3'>
          <textarea name='message' id='message' placeholder='Your message' />
        </div>
      </div>

      <div className='row'>
        <div className='col span_1_of_3' />
        <div className='col span_2_of_3'>
          <Button text='Send it!' isFull isSubmit />
        </div>
      </div>
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
