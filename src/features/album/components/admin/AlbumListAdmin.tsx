// import { useQuery } from '@tanstack/react-query'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import { AlbumListContainer } from '../AlbumList.styles'
import { AlbumListItemAdmin } from './AlbumListItemAdmin'
import { useAlbum, useAlbums } from '../../useAlbum'
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
  const { isLoading, data, isError, error } = useAlbums()
  const { isSuccess: suc, data: detailA, } = useAlbum(6)

  if (isError) return <ErrorHandler error={(error as Error)} />
  if (isLoading) return <LoadingHandler />


  if (suc) console.log('Album: ', { detailA })
  const showAlbums = data?.map(a => <AlbumListItemAdmin key={a.id} album={a} />)

  return (
    <Container>
      {showAlbums && showAlbums}
      {showAlbums && !showAlbums.length && <p>no albums yet.</p>}
    </Container>
  )
}

export default AlbumListAdmin