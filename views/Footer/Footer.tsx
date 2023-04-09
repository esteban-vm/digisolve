import type { Component } from '@/types'
import { Grid } from '@/components'
import { styled } from '@/styles'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

const FooterComponent: Component = (props) => {
  return (
    <footer {...props}>
      <Grid.Row>
        <Grid.Col isHalf>
          <NavLinks />
        </Grid.Col>
        <Grid.Col isHalf>
          <SocialLinks />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <p className='footer__paragraph'>This webpage has been created for educational purposes.</p>
        <p className='footer__paragraph'>You are feel free to use it and customize it to make your own webpages.</p>
      </Grid.Row>
    </footer>
  )
}

const Footer = styled(FooterComponent)`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);
  list-style: none;

  .footer {
    &__paragraph {
      text-align: center;
      line-height: 1.5;

      :first-of-type {
        margin-top: 50px;
      }
    }

    &__nav,
    &__social {
      &--item {
        display: inline-block;
      }

      &--link {
        transition: all 500ms;

        :link,
        :visited {
          color: var(--color-dark);
          text-decoration: none;
        }
      }
    }
  }
`

export default Footer
