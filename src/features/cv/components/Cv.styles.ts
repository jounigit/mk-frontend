import styled from 'styled-components/macro'
import { BaseContainer } from '../../../styles/styles'
import { colors } from '../../../styles/theme'
import { DESKTOP, LAPTOP, TABLET } from '../../../styles/theme/breakpoints'

export const CvContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 2rem 1rem;
    /* margin: 0 2rem 3rem 2rem; */

    @media ${TABLET} {
        max-width: 85%;
        margin: auto;
        padding: 2rem 2rem;
    } 

    @media ${LAPTOP} {
        max-width: 80%;
        padding: 2rem 2em;
    }

    @media ${DESKTOP} {
        max-width: 1000px;
        padding: 2rem 1.6rem;
    }
`
export const Title = styled.div`
    flex: 1 100%;
    color: ${colors.grey3};
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
`
export const Content = styled.div`
    flex: 1;
    margin-bottom: 1rem;
    p {
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }
`
