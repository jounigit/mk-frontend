import { BaseContainer } from '../../styles/styles'
import styled from 'styled-components/macro'
import { TABLET } from '@/styles/theme/breakpoints'

export const StyledInfo = styled(BaseContainer)`
/* flex-direction: column; */
margin: auto;
margin-top: 40px;
padding: 1em;
margin-bottom: 1em;
background: var(--bg-secondary);

@media ${TABLET} {
/* flex-direction: row; */
max-width: max-content;
margin-top: 30px;
}
`
export const ItemAll = styled.div`
  flex-basis: 100%;
  margin: 1em;
  text-align: center;
`

export const Item = styled.div`
  flex-basis: 50%;
  margin: 1em;

  @media ${TABLET} {
    flex-basis: 100%;
  }
`