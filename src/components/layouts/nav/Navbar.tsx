import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import Burger from './Burger'
import { NavbarContainer } from './Navbar.styles'

interface IState {
  show: boolean;
  scrollPos: number;
}

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`

const Navbar: FC = () => {
  const [state, setState] = useState<IState>({
    show: true,
    scrollPos: 0,
  })

  useEffect(() => {
    const handleScroll = (): void => setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > state.scrollPos,
    })

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [state])

  // eslint-disable-next-line no-console
  console.log(' Show: ', state.show, ' Scrollpos: ', state.scrollPos)

  return (
    <Transition>
      <NavbarContainer
        scrollPos={state.scrollPos}
        className={state.show ? 'active' : 'hidden'}
      >
        <Burger />
        <div className="name">
          MARJA KOLU
        </div>
      </NavbarContainer>
    </Transition>
  )
}

export default Navbar
