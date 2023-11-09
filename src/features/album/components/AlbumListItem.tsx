import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ImagesInDiv } from '../../../components/atoms/ImagesInDiv'
import config from '../../../data/config'
import { IAlbum } from '../../../types'
import {
  AlbumListItemContainer,
  ImageBox,
  ImageGridListItem,
  Info,
  InfoText,
} from './AlbumListItem.styles'

interface ListProps {
  album: IAlbum,
}

const picFolder = config.IMAGES_BIG_URL as string

export const AlbumListItem: FC<ListProps> = (props) => {
  const { title, slug, pictures } = props.album

  // ******************************************************************* //
  const textForGalleria = (
    <h4>
      {pictures.length}
      {' '}
      kuvaa
    </h4>
  )

  const twoPics = pictures.slice(0, 2)
    
  const showPics = twoPics.length > 0 ?
    <ImagesInDiv data={twoPics} url={picFolder} showInfo={false} /> : 
    <h4>no images yet.</h4>
 
  // **************** return ***************************************** //
  return (
    <AlbumListItemContainer>
      <Link
        style={{ textDecoration: 'none' }}
        to={`/galleria/${slug}`}
      >
        <ImageBox>
          <ImageGridListItem width={200} height={200}>
            {showPics}
          </ImageGridListItem>
        </ImageBox>

      </Link>

      <Link
        style={{ textDecoration: 'none' }}
        to={`/album/${slug}`}
      >
        <Info>
          <h3>{title}</h3>
          <InfoText>
            {textForGalleria}
          </InfoText>
        </Info>
      </Link>

    </AlbumListItemContainer>
  )
}
