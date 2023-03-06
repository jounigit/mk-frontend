import { LoadingSpinner } from '@/components/atoms'
import { useAlbums } from '@/features/album/useAlbum'
import { IAlbum } from '@/types'


export const GalleriaPage = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums: IAlbum[]

  if (albumsQuery.isLoading) return <LoadingSpinner mt={120} />

  if (albumsQuery.isError) return <h3>Jotain vikaa??</h3>

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
    const mappedData: JSX.Element[] = albums.map(a => (
      <h4 key={a.id}>
        {a.title}
      </h4>
    ))
    return (
      <>
        {mappedData}
      </>
    )
  }

  return (
    <>
      <h3>No albums yet.</h3>
    </>
  )
}
