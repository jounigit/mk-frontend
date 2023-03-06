import { useAlbums } from '@/hooks/useAlbums'
import { Spinner } from '@/styles/styles'
import { IAlbum } from '@/types'
import { TailSpin } from 'react-loader-spinner'


const GalleriaPage = (): JSX.Element => {
  const albumsQuery = useAlbums()
  let albums: IAlbum[]

  if (albumsQuery.isLoading) {
    return (
      <Spinner marginTop={120}>
        <TailSpin
          color="red"
          height="80"
          width="80"
        />
      </Spinner>
    )
  }

  if (albumsQuery.isError) return <h3>Jotain vikaa??</h3>

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
    const mappedData: JSX.Element[] = albums.map(a => (
      <h4 key={a.id}>
        {a.title}
      </h4>
    ))
    return (
      <>{mappedData}</>
    )
  }

  return (
    <>
      <h3>No albums yet.</h3>
    </>
  )
}

export default GalleriaPage

// (
//   <FadeDiv timein="0.3s">
//     {showAlbums}
//   </FadeDiv>
// )


// {
//   Array.isArray(albums)
//     ? albums.map((element, index) => {
//       return (
//         <div key={index}>
//           <h2>{element.title}</h2>
//         </div>
//       )
//     })
//     : null
// }
// <h3>ÖÖ: {albums[1].title}</h3>