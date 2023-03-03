import { FadeDiv } from '@/components/atoms/FadeIn.styles'
import { Info } from '@/components/info/Info'
import { FC } from 'react'
import { useAlbums } from '../hooks/useAlbums'

export const HomePge: FC = () => {
  const albumsQuery = useAlbums()
  // let albums: IAlbum[]
  // let title
  console.log(albumsQuery)
  // if (albumsQuery.isSuccess) {
  //   const albums = albumsQuery.data
  //   // title = albums[1].title
  //   console.log(albums && albums[1].title)
  // }

  return (
    <>
      <FadeDiv timein="0.3s">
        <Info />
        {['Alice', 'Bob'].map(element => (
          <div key={element}>{element}</div>
        ))}
        {/* {albumsQuery.isSuccess && title} */}
      </FadeDiv>
    </>
  )
}

// export default Home
