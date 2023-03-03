import styled from 'styled-components'
import { TABLET } from '@/styles/theme/breakpoints'

// import { colors } from '../../styles/theme'

interface INav {
    open: boolean;
    href?: string;
  }

export const StyledBurger = styled.div<INav>`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    position: fixed;
    top: 15px;
    left: 20px; 
    z-index: 20;
    width: 2rem;
    height: 2rem;

  @media ${TABLET} {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#333')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
