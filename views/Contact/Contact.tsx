import type { Component } from '@/types'
import { useId } from 'react'
import { Grid } from '@/components'
import { styled } from '@/styles'
import ContactForm from './ContactForm'

const ContactComponent: Component = (props) => {
  const id = useId()

  return (
    <section aria-labelledby={id} {...props}>
      <Grid.Row>
        <h2 id={id} className='contact__heading'>
          We are happy to hear from you
        </h2>
      </Grid.Row>
      <Grid.Row>
        <ContactForm />
      </Grid.Row>
    </section>
  )
}

const Contact = styled(ContactComponent)`
  text-align: center;

  .contact__heading {
    color: var(--color-black);
    margin-top: 150px;
    margin-bottom: 50px;
  }
`

export default Contact
