import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '@/styles/theme'
import { Logout } from '@/features/login/components/Logout'
import { FaHome } from 'react-icons/fa'

const Container = styled.div`
    padding: 2rem 0 0 2rem;
    padding-top: 2rem;
`
const SidebarLink = styled(NavLink)`
   display: block;
   padding: 0.4rem 0;
   font-size: 1.2rem;
   font-size: x-large;
    font-weight: 600;
   &:hover,
    &:focus{
      color: ${colors.grey4};
    }
    &:active{
      color: ${colors.grey4};
    };
`

const Sidebar: FC = () => (
  <Container>
    <SidebarLink to="/dashboard">
      <FaHome />
    </SidebarLink>
    <SidebarLink to="/dashboard/albums">
        Albumit
    </SidebarLink>
    <SidebarLink to="/dashboard/pictures">
        Kuva-arkisto
    </SidebarLink>
    <SidebarLink to="/dashboard/cv">
        CV
    </SidebarLink>
    <p>.................</p>
    <SidebarLink to="/dashboard/albums/create">
       - Uusi albumi
    </SidebarLink>
    <SidebarLink to="/dashboard/pictures/upload">
       - Uusi kuva
    </SidebarLink>
    <SidebarLink to="/dashboard/cv/create">
       - Uusi cv osio
    </SidebarLink>
    {/* <SidebarLink to="/album/create-album">
        Uusi categoria
    </SidebarLink>
    <SidebarLink to="/album/create-album">
        Uusi kuva
    </SidebarLink> */}
    <Logout />

  </Container>
)

export default Sidebar