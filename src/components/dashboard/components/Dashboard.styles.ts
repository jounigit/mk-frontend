import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import { BIGSCREEN, LAPTOP, TABLET } from '@/styles/theme/breakpoints'

interface Props {
    size?: number;
    bgColor?: string;
}

export const GridDb = styled.div`
    display: grid;
    grid-template-rows: auto;
    margin-right: 4rem;
    /* grid-template-columns: 1fr; */
    grid-template-areas: 
    "header"
    "main";
    @media ${LAPTOP} {
        grid-template-columns: 250px 1fr 10px;
        grid-template-areas: 
        "header header header"
        "sidebar main rightside";
    }
`

export const HeaderDb = styled.div`
    grid-area: header; 
    height: 4rem;
    width: 100vh;
`
export const RightSide = styled.div`
    grid-area: rightside; 
    height: 100vh;
    width: 2rem;
        background-color: rgb(30, 100, 97);
`

export const AsideDb = styled.div`
    display: none;
    @media ${LAPTOP} {
        display: contents;
        grid-area: sidebar;
        position: fixed;
        left: 0;
        top: 4rem;
        background-color: rgb(30, 100, 97);
        height: 100vh;
        width: 14rem;
    }
`

export const MainDb = styled.div`
    grid-area: main;
    width: 100%;
    margin-top: 2rem;
    margin: 2rem auto;
    padding-right: 2rem;
    @media ${LAPTOP} {
        margin: 2rem 1px;
    }
`
export const MainContainer = styled.div`
    margin: 0 auto 2rem;

    @media ${TABLET} {
        max-width: 90%;
  }
`

export const Image = styled.img`
    max-height: 8rem;
    float: left;
`
export const NavbarLink = styled(Link)`
    color:white;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 0.8em 0.5em 0px;
    margin: 10px;
    &:hover,
    &:focus{
    color: blue;
    };
    &:active{
    color: red;
    };
    @media(max-width: 700px) {
        display: none;
    }
`

export const Grid = styled.div<Props>`
    margin: 0 auto;
    margin-bottom: ${(props) => props.size}px;
    width: 100%;
    @media ${LAPTOP} {
        margin: 0 1rem;
        width: 75%;
    }
    @media ${BIGSCREEN} {
        margin: 0 1rem;
        width: 80%;
    }
`

export const Row = styled.div<Props>`
    display: flex;
    border: 1px solid grey;
    background-color: ${(props) => props.bgColor};
`
export const Col = styled.div<Props>`
    flex: ${(props) => props.size};
`