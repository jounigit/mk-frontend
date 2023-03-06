import { FC } from 'react'
import { FaHome } from 'react-icons/fa'
import { NavBarLink, Ul } from './NavLinks.styles'

type Props = {
  open: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface INavProps extends Props {
  link: string;
  text: string | JSX.Element;
}

//** reusable navlink */ 
const navLinkTmp = ({
  open, toggleOpen, text = '', link = '/',
}: INavProps): JSX.Element => (
 
  <NavBarLink
    data-test={`navlink-${link}`}
    to={`${link}`}
    onClick={() => toggleOpen(!open)}
  >
    {text}
  </NavBarLink>

)

export const NavLinks: FC<Props> = ({ open, toggleOpen }) => (
  <Ul data-test="menu" open={open}>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: <FaHome size={25} />, link: '/',
      })}
    </li>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Galleria', link: '/galleria',
      })}
    </li>
    {/* <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Näyttelyt', link: '/exhibitions',
      })}
    </li> */}
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Artikkelit', link: '/articles',
      })}
    </li>
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'CV', link: '/cv',
      })}
    </li>

    {localStorage.getItem('token')
        && (
          <li>
            {navLinkTmp({
              open, toggleOpen, text: 'admin', link: '/admin',
            })}
          </li>
        )}

    {/* <li>
      <LinkText>
        <Dropdown activatorText="Galleria" />
      </LinkText>
    </li> */}
  </Ul>
)

