import { FC } from 'react'
import { DropLink, LinkTo, Ul } from './NavLinks.styles'
import { FaAngleDown, FaHome } from 'react-icons/fa'
import { userToken } from '@/services/authUser.service'
import { Logout } from '@/features/login/components/Logout'
import { useTranslation } from 'react-i18next'
import SelectLangFlag from '@/components/SelectLangFlag'

type Props = {
  open: boolean,
  toggle: () => void,
}

export const NavLinks: FC<Props> = ({ open, toggle }) => {
  const token = userToken()
  const { i18n, t } = useTranslation()

  console.log('Navlinks lang: ', i18n.language)

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
          {t('Galleria')}
          <span style={{ position: 'relative', top: '0.3rem' }}>
            <FaAngleDown />
          </span>
        </LinkTo>
        <div className='dropdown-content'>
          <DropLink to="/galleria/veistokset" onClick={toggle}>
            {t('Veistokset')}
          </DropLink>
          <DropLink to="/galleria/piirustuksia" onClick={toggle}>
            {t('Piirustukset')}
          </DropLink>
          <DropLink to="/galleria/tilateokset" onClick={toggle}>
            {t('Tilateokset')}
          </DropLink>
          <DropLink to="/galleria/esinekoosteet" onClick={toggle}>
            {t('Esinekoosteet')}
          </DropLink>
          <DropLink to="/galleria/julkiset-teokset" onClick={toggle}>
            {t('Julkiset teokset')}
          </DropLink>
          <DropLink to="/galleria/portrettikioski" onClick={toggle}>
            {t('Portrettikioski')}
          </DropLink>
        </div>
      </li>

      {/* end section */}

      <li>
        <LinkTo to="/articles" onClick={toggle}>{t('Artikkelit')}</LinkTo>
      </li>
      <li>
        <LinkTo to="/cv" onClick={toggle}>CV</LinkTo>
      </li>
      {token &&
        <li>
          <LinkTo to="/dashboard" onClick={toggle}>admin</LinkTo>
        </li>
      }
      {token &&
        <li>
          <Logout />
        </li>
      }
      {!token &&
        <li>
          <LinkTo to="/login" onClick={toggle}>login</LinkTo>
        </li>
      }
      <li>
        <SelectLangFlag />
      </li>
    </Ul>
  )
}
