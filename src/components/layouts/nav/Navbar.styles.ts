import styled from 'styled-components'
// import { colors } from '../../../styles/theme'
import { TABLET } from '../../../styles/theme/breakpoints'
import { colors } from '../../../styles/theme'

interface IProps {
  scrollPos: number
}

export const NavbarContainer = styled.nav<IProps>`
    /* background: none;
    box-shadow: none; */
    /* margin-bottom: 30px; */
    height: 4rem;
    background: rgba(203,198,198,${(p) => (p.scrollPos === 0 ? 0 : 1)});
    /* box-shadow: var(--shadow-primary); */
  
  .logo {
    /* padding: 15px 0; */
    align-content: center;
    border: 3px solid green;
  }

  .name {
    padding: 0.8em 0.5em 0;
    float: right;
      color: ${colors.grey1};
    font-size: 1.2rem;
    font-weight: 500;
  }

  @media ${TABLET} {
    display: flex;
    justify-content: space-between;
    height: 55px;
    width: 100%;
    float: left;
    margin-bottom: 50px;
    padding: 0 20px;
    background: rgba(203,198,198,${(p) => (p.scrollPos === 0 ? 0 : 0.9)});
    box-shadow: rgba(0, 0, 0, ${(p) =>
    (p.scrollPos === 0 ? 0.0 : 0.24)}) 0px 3px 8px;
    position: fixed;
    top: 0;
    z-index: 10;
    /* transition-timing-function: ease-in;
    transition: .5s; */
  }
`
