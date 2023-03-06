import { useAlbum } from '@/hooks/useAlbums'

export const Album = (): JSX.Element => {
  const albumQuery = useAlbum(2)

  if (albumQuery.isSuccess) {
    const album = albumQuery.data
    // console.log({album})
    console.log('ALBUM type:::: ', typeof album)
    return (
      <><h4>TÄMÄ ON:: {album.title}</h4></>
    )
  }

  return (
    <>
      <h3>No albums yet.</h3>
    </>
  )
} 