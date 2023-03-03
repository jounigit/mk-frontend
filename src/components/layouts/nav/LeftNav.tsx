import React, {
  FC,
} from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FaHome } from 'react-icons/fa'
import { colors } from '@/styles/theme'

interface INav {
  open: boolean;
  href?: string;
}

const Ul = styled.ul<INav>`
display: flex;
flex-grow: 1;
flex-flow: row nowrap;
  list-style: none;
  min-width: 200px;
  max-width: 400px;
  align-items: center;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
    top: 0;
    left: 0;
    height: 100vh;
    width: 50vW;
    padding-top: 3.5rem;
    z-index: 10;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`
const linkStyle = {
  margin: '1rem',
  textDecoration: 'none',
  color: colors.white,
  fontSize: '1.2rem',
}

const LinkText = styled.h2`
   font-size: 1.75rem;
`

type Props = {
  open: boolean;
  toggleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface INavProps extends Props {
  link: string;
  text: string | JSX.Element;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const navLinkTmp = ({
  open, toggleOpen, text = '', link = '/',
}: INavProps) => (
  <LinkText>
    <NavLink
      data-test={`navlink-${link}`}
      style={linkStyle}
      to={`${link}`}
      onClick={() => toggleOpen(!open)}
      // activeStyle={{
      //   color: colors.grey3,
      // }}
    >
      {text}
    </NavLink>
  </LinkText>
)

const LeftNav: FC<Props> = ({ open, toggleOpen }) => (
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
    <li>
      {navLinkTmp({
        open, toggleOpen, text: 'Näyttelyt', link: '/exhibitions',
      })}
    </li>
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

export default LeftNav
