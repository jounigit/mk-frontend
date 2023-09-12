
import { BaseContainer, TABLET } from '@/styles'
import styled from 'styled-components/macro'

export const AlbumContainer = styled(BaseContainer)`
    flex-wrap: wrap;
    padding: 1em;
`

export const AlbumAdminContainer = styled(AlbumContainer)`
    margin-right: 1.2rem;
`

export const Title = styled.div`
    /* flex: 1 100%; */
`
export const Text = styled.div`
    /* flex: 1; */
    flex: 1 0 40%;
    margin: 0.5em;
`

export const ImageBox = styled.div`
   flex: 1 100%;

@media ${TABLET} {
    flex: '1 0 100%',
}
`

export const ImageBoxTwoColumn = styled(ImageBox)`

@media ${TABLET} {
    flex: 0 0 55%;
}
`