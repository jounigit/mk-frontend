import styled from 'styled-components/macro'
import { BaseContainer } from '../../../styles/styles'
import { colors } from '../../../styles/theme'
import { DESKTOP, TABLET } from '../../../styles/theme/breakpoints'
// import { DESKTOP, LAPTOP, TABLET } from '../../../styles/theme/breakpoints'

export const ArticleContainer = styled(BaseContainer)`
    display: grid;
    grid-template-rows: auto;
    margin: 0 2rem 3rem 2rem;
    font-size: 0.4em;
    padding: 2rem 1.5rem;

    @media ${TABLET} {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 3.5em;
        margin: auto;
        justify-content: space-evenly;
        width: 100%;
        padding: 1.6rem;
    }

    @media ${DESKTOP} {
        max-width: 70%;
        padding: 1.6rem;
    }
`
export const ItemWrapper = styled.div`
    /* display: inline-flex; */
    /* border: 1px solid black; */
`
export const Item1 = styled.div`
    color: ${colors.grey4};
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem;

    @media ${TABLET} {
     width: 16rem;
    }
`
export const Item2 = styled.div`
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.5rem;
`
export const ItemLast = styled.div`
    justify-content: end;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.5rem;
    margin-bottom: 2rem;
    text-decoration: none;

    a {
        text-decoration: none;
        color: #5e0505df;
    }
`



// export const ArticleContainer = styled(BaseContainer)`
//     flex-wrap: wrap;
//     padding: 0 1rem;
//     margin: auto;

//     @media ${TABLET} {
//         max-width: 70%;
//         padding: 0 1em;
//     }

//     @media ${LAPTOP} {
//         max-width: 70%;
//         padding: 0 2em;
//     }

//     @media ${DESKTOP} {
//         max-width: 70%;
//         padding: 1.6rem;
//     }
// `
// export const Title = styled.div`
//     flex: 1 100%;
//     color: ${colors.grey3};
//     font-size: 1.4rem;
//     margin-bottom: 0.5rem;
// `
// export const Content = styled.div`
//     flex: 1;
//     margin-bottom: 1rem;
//     h4 {
//         display: inline;
//     }
//     p {
//         display: inline;
//         font-size: 0.8rem;
//         margin-bottom: 0.5rem;
//     }
// `