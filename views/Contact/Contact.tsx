import type { ViewComponent } from '@/types'
import { styled } from '@/styles'
import ContactForm from './ContactForm'

const ContactComponent: ViewComponent = (props) => {
  return (
    <section {...props}>
      <div className='row'>
        <h2 id='contact_heading'>We are happy to hear from you</h2>
      </div>
      <div className='row'>
        <ContactForm />
      </div>
    </section>
  )
}

const Contact = styled(ContactComponent)`
  text-align: center;

  h2 {
    color: var(--color-black);
    margin-top: 150px;
    margin-bottom: 50px;
  }
`

Contact.defaultProps = {
  'aria-labelledby': 'contact_heading',
}

export default Contact
