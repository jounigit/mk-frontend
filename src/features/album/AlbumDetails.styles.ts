import styled from 'styled-components'
import { BaseContainer } from '../../styles/styles'
import { DESKTOP, MOBILE, TABLET } from '../../styles/theme/breakpoints'

interface IAlbumStyle {
    full?: false | true | undefined,
}

export const AlbumContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1em;
    margin-top: 55px;
`
export const Title = styled.div`
    flex: 1 100%;
`
export const ImageBox = styled.div<IAlbumStyle>`
   /* flex: 1 100%; */
   /* flex: 1 0 100%; */

@media ${MOBILE} {
    flex: 1 100%;
}

@media ${TABLET} {
    flex: 0 0 55%;
    ${(props) => props.full && ({
    flex: '1 0 100%',
  })}
}

@media ${DESKTOP} {
    ${(props) => props.full && ({
    flex: '1 0 100%',
  })}
}
`
export const Text = styled.div`
    /* flex: 1; */
    flex: 1 0 40%;
    margin: 0.5em;
`
