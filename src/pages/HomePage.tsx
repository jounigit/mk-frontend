import { Album } from '@/components/album/Album'
import { FadeDiv } from '@/components/atoms/FadeIn.styles'
import { Info } from '@/components/info/Info'
import { FC } from 'react'
import { useAlbums } from '../hooks/useAlbums'

export const HomePge: FC = () => {
  const albumsQuery = useAlbums()
  console.log(albumsQuery)

  return (
    <>
      <FadeDiv timein="0.3s">
        <Info />
        <Album />
      </FadeDiv>
    </>
  )
}

// export default Home
