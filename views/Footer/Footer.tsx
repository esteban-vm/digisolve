import type { Component } from '@/types'
import { Grid } from '@/components'
import { styled, mediaQuery } from '@/styles'
import { navLinks, socialLinks } from './Footer.data'
import NavLink from './NavLink'
import SocialLink from './SocialLink'

const FooterComponent: Component = (props) => {
  return (
    <footer {...props}>
      <Grid.Row>
        <Grid.Col isHalf>
          <ul className='nav__links'>
            {navLinks.map((link) => (
              <NavLink key={link.id} {...link} />
            ))}
          </ul>
        </Grid.Col>
        <Grid.Col isHalf>
          <ul className='social__links'>
            {socialLinks.map((link) => (
              <SocialLink key={link.id} {...link} />
            ))}
          </ul>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <p>This webpage has been created for educational purposes.</p>
        <p>You are feel free to use it and customize it to make your own webpages.</p>
      </Grid.Row>
    </footer>
  )
}

const Footer = styled(FooterComponent)`
  background-color: var(--color-darker);
  padding: 50px;
  font-size: 80%;
  color: var(--color-dark);

  ${mediaQuery('md')} {
    padding: 30px;
  }

  ul {
    li {
      display: inline-block;

      a {
        transition: all 500ms;

        :link,
        :visited {
          color: var(--color-dark);
          text-decoration: none;
        }
      }
    }

    &[class$='__links'] {
      ${mediaQuery('xs')} {
        float: none;
        text-align: center;
        margin-bottom: 10px;
      }
    }
  }

  p {
    text-align: center;
    line-height: 1.5;

    ${mediaQuery('md')} {
      line-height: 1.3;
    }

    :first-of-type {
      margin-top: 50px;

      ${mediaQuery('md')} {
        margin-top: 20px;
      }
    }
  }

  .nav__links {
    float: left;
  }

  .social__links {
    float: right;
  }
`

export default Footer
