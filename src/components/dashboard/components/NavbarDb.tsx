import { FC } from 'react'
import styled from 'styled-components/macro'
import { colors } from '@/styles/theme'
import { NavbarLink } from './Dashboard.styles'

const Container = styled.div`   
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgb(30, 100, 97);
    width: 100vh;
    width: 100%;
    height: 4rem;
    padding: 1rem;

    .name {
    float: right;
    color: ${colors.grey3};
    font-size: 1.2rem;
    font-weight: 500;
  }
`

const NavbarDb: FC = () => (
  <Container>
    <NavbarLink to="/">
      Etusivu/yleisösivu
    </NavbarLink>
    <div className="name">
      HALLINTASIVU
    </div>
  </Container>
)

export default NavbarDb