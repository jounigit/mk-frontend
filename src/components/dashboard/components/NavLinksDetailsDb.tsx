import { LAPTOP } from '@/styles'
import { Divider } from '@/styles/styles'
import { colors } from '@/styles/theme'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

interface Props { toggle?: () => void }

const Wrap = styled.div`
  @media ${LAPTOP} {
    margin: 1.5rem;
    position: fixed;
    top: 4rem;
  }
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

export const NavLinksDetailsDb = ({ toggle }: Props) => {
  return (
    <Wrap>
      <SidebarLink to="/dashboard" onClick={toggle}>
        <FaHome />
      </SidebarLink>
      <SidebarLink to="/dashboard/albums" onClick={toggle}>
      Albumit
      </SidebarLink>
      <SidebarLink to="/dashboard/pictures" onClick={toggle}>
      Kuva-arkisto
      </SidebarLink>
      <SidebarLink to="/dashboard/cv" onClick={toggle}>
      CV
      </SidebarLink>
      <Divider />
      <SidebarLink to="/dashboard/albums/create" onClick={toggle}>
     - Uusi albumi
      </SidebarLink>
      <SidebarLink to="/dashboard/pictures/upload" onClick={toggle}>
     - Uusi kuva
      </SidebarLink>
      <SidebarLink to="/dashboard/cv/create" onClick={toggle}>
     - Uusi cv osio
      </SidebarLink>
      {/* <SidebarLink to="/album/create-album">
      Uusi categoria
  </SidebarLink>
  <SidebarLink to="/album/create-album">
      Uusi kuva
  </SidebarLink> */}
    </Wrap>
  )
}


