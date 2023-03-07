import { styled } from '@/styles'

export const Wrapper = styled.nav`
  & img {
    height: 120px;
    width: auto;
    float: left;
  }
`

export const Menu = styled.ul`
  list-style: none;
  float: right;
  margin-top: 70px;

  & li {
    display: inline-block;
    margin-right: 40px;

    & a {
      &:link,
      &:visited {
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
        outline: none;
        transition: border-bottom 100ms;
      }

      &:hover,
      &:active {
        border-bottom: 2px solid var(--primary-color);
      }
    }
  }
`
