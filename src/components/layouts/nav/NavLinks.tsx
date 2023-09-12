import { FC } from 'react'
import { DropLink, LinkTo, Ul } from './NavLinks.styles'
import { FaAngleDown, FaHome } from 'react-icons/fa'
import { userToken } from '@/services/authUser.service'
import { Logout } from '@/features/login/components/Logout'

type Props = {
  open:  boolean,
  toggle: () => void,
}

export const NavLinks: FC<Props> = ({ open, toggle }) => {
  const token = userToken()
  console.log('Navlinks token 2: ', token)

  return (
    <Ul open={open}>
      <li>
        <LinkTo to="/" onClick={toggle}><FaHome /></LinkTo>
      </li>
      {/* <li>
        <LinkTo to="/galleria" onClick={toggle}>Galleria</LinkTo>
      </li> */}
      {/* dropdown section */}
      <li className='dropdown'>
        <LinkTo to="#">
          Galleria
          <span style={{ position: 'relative', top: '0.3rem' }}>
            <FaAngleDown />
          </span>
        </LinkTo>
        <div className='dropdown-content'>
          <DropLink to="/galleria/veistokset"  onClick={toggle}>
            Veistokset
          </DropLink>
          <DropLink to="/galleria/piirustuksia" onClick={toggle}>
            Piirustuksia
          </DropLink>
          <DropLink to="/galleria/tilateokset"  onClick={toggle}>
            Tilateokset
          </DropLink>
          <DropLink to="/galleria/esinekoosteet" onClick={toggle}>
            Esinekoosteet
          </DropLink>
          <DropLink to="/galleria/julkiset-teokset" onClick={toggle}>
            Julkiset teokset
          </DropLink>
          <DropLink to="/galleria/portrettikioski" onClick={toggle}>
            Portrettikioski
          </DropLink>
        </div>
      </li>

      {/* end section */}

      <li>
        <LinkTo to="/articles" onClick={toggle}>Artikkelit</LinkTo>
      </li>
      <li>
        <LinkTo to="/cv" onClick={toggle}>CV</LinkTo>
      </li>
      { token &&
      <li>
        <LinkTo to="/dashboard" onClick={toggle}>admin</LinkTo>
      </li>
      }
      { token &&
      <li>
        <Logout />
      </li>
      }
      { !token &&
      <li>
        <LinkTo to="/login" onClick={toggle}>login</LinkTo>
      </li>
      }

    </Ul>
  )
}
