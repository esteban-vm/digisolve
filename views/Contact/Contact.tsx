import type { Component } from '@/types'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import Form from './Form'

const ContactComponent: Component = (props) => {
  return (
    <section id='contact' aria-labelledby='contact_title' {...props}>
      <Grid.Row>
        <h2 id='contact_title'>We are happy to hear from you</h2>
      </Grid.Row>
      <Grid.Row>
        <Form />
      </Grid.Row>
    </section>
  )
}

const Contact = styled(ContactComponent)`
  text-align: center;

  h2 {
    color: var(--color-black);
    margin-top: 150px;
    margin-bottom: 50px;

    ${mediaQuery('lg')} {
      margin-top: 90px;
    }

    ${mediaQuery('sm')} {
      margin-top: 60px;
    }
  }
`

export default Contact
