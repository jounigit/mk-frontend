import { Logout } from '@/features/login/components/Logout'
import { useTokenStore } from '@/store/tokenStore'
import { LAPTOP } from '@/styles'
import { Divider } from '@/styles/styles'
import { colors } from '@/styles/theme'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

interface Props { toggle?: () => void }

const Wrap = styled.div`
  margin-left: 1.5rem;
  @media ${LAPTOP} {
    margin: 1.5rem;
    position: fixed;
    top: 4rem;
  }
`
const LinkStyle = styled(NavLink)`
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

export interface ILinkFormer {
  (path: string, text: string, cytxt: string): JSX.Element
}

export const NavLinksDetailsDb = ({ toggle }: Props) => {
  const token = useTokenStore(state => state.token)

  const linkForm: ILinkFormer = (path, text, cytxt) => (
    <LinkStyle to={path} data-cy={cytxt} onClick={toggle}>
      {text}
    </LinkStyle>
  )

  return (
    <Wrap>
      <LinkStyle to="/dashboard" onClick={toggle} data-cy='home'>
        <FaHome />
      </LinkStyle>
      {linkForm('/dashboard/currents', 'Tapahtumat', 'currentslink')}

      {linkForm('/dashboard/albums', 'Albumit', 'albumslink')}

      {linkForm('/dashboard/pictures', 'Kuva-arkisto', 'pictureslink')}

      {linkForm('/dashboard/cv', 'CV', 'cvlink')}
      <Divider />
      {linkForm('/dashboard/currents/create',
        '- Uusi tapahtuma', 'createcurrent')}

      {linkForm('/dashboard/albums/create', '- Uusi albumi', 'createalbum')}

      {linkForm('/dashboard/pictures/upload', '- Uusi kuva', 'createpicture')}

      {linkForm('/dashboard/cv/create', '- Uusi cv osio', 'createcvpart')}

      {token &&
        <Logout />
      }

      {/* <LinkStyle to="/album/create-album">
      Uusi categoria
  </LinkStyle>
  <LinkStyle to="/album/create-album">
      Uusi kuva
  </LinkStyle> */}
    </Wrap>
  )
}


