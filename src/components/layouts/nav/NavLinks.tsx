import { FC } from 'react'
import { FaAngleDown, FaHome } from 'react-icons/fa'
import {
  DropLink,
  LinkTo,
  Ul
} from './NavLinks.styles'

type Props = {
  open: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavLinks: FC<Props> = ({ open, toggle }) => {
  const onclick = (): void => toggle(!open)

  return (
    <Ul open={open}>
      <li>
        <LinkTo to="/" onClick={onclick}>
          <FaHome />
        </LinkTo>
      </li>
      {/* dropdown section */}
      <li className='dropdown'>
        <LinkTo to="#">Galleria <FaAngleDown /></LinkTo>
        <div className='dropdown-content'>
          <DropLink to="/galleria/veistokset"  onClick={onclick}>
            Veistokset
          </DropLink>
          <DropLink to="/galleria/piirustuksia" onClick={onclick}>
            Piirustuksia
          </DropLink>
          <DropLink to="/galleria/tilateokset"  onClick={onclick}>
            Tilateokset
          </DropLink>
          <DropLink to="/galleria/esinekoosteet" onClick={onclick}>
            Esinekoosteet
          </DropLink>
          <DropLink to="/galleria/julkiset-teokset" onClick={onclick}>
            Julkiset teokset
          </DropLink>
        </div>
      </li>

      {/* end section */}
      <li>
        <LinkTo to="/articles" onClick={onclick}>Artikkelit</LinkTo>
      </li>
      <li>
        <LinkTo to="/cv" onClick={onclick}>CV</LinkTo>
      </li>
    </Ul>
  )
}

