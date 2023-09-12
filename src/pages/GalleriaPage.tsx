import { FadeDiv } from '@/components/atoms'
import { AlbumsList } from '@/features/album'


const GalleriaPage = (): JSX.Element => {
  return (
    <FadeDiv timein="0.3s">
      <AlbumsList />
    </FadeDiv>
  )
}

export default GalleriaPage
