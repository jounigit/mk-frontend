import { FC } from 'react'
import styled from 'styled-components/macro'
import { NavLinksDetailsDb } from './NavLinksDetailsDb'

const Container = styled.div`
    padding: 2rem 0 0 2rem;
    padding-top: 2rem;
    background-color: rgb(30, 100, 97);
`

const Sidebar: FC = () => (
  <Container>
    <NavLinksDetailsDb />
  </Container>
)

export default Sidebar