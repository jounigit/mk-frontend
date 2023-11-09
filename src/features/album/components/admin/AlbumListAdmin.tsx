import { AlbumListContainer } from '../AlbumList.styles'
import { AlbumListItemAdmin } from './AlbumListItemAdmin'
import { useAlbums } from '../../useAlbum'
import styled from 'styled-components/macro'
import { TABLET } from '@/styles/theme/breakpoints'

const Container = styled(AlbumListContainer)`
   margin-right: 4rem;
   margin-bottom: 2rem;
    @media ${TABLET} {
    max-width: 100%;
  }
`

const AlbumListAdmin = (): JSX.Element => {
  const { data: Albums } = useAlbums()

  const showAlbums = Albums && Albums.length ? 
    Albums.map(a => <AlbumListItemAdmin key={a.id} album={a} />) :
    <p>no albums yet.</p>

  return (
    <Container>
      {showAlbums}
    </Container>
  )
}

export default AlbumListAdmin