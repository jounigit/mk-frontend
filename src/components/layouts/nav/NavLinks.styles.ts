import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { colors } from '@/styles/theme'
import { TABLET } from '@/styles'

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
export const Ul = styled.ul<INav>`
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

  .dropdown {
      display: inline-block;

      & > .dropdown-content {
        display: none;
        position: absolute;
        margin-top: -10px;
        background-color: #f9f9f9;
        border: 2px solid ${colors.grey2};
        border-radius: 5px;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;

        & > a {
          color: ${colors.grey4};
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          text-align: left;
          &:hover {
            background-color: ${colors.grey2};
          }
        }
      }

      &:hover .dropdown-content {
        display: block
      }
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
export const LinkTo = styled(NavLink)`
  margin: '1rem';
  text-decoration: 'none';
  color: ${colors.grey3};
  /* font-size: '1.9rem'; */
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
export const DropLink = styled(NavLink)`
  color: ${colors.grey4};
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: ${colors.grey2};
  }
`
