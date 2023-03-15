/* eslint-disable react/no-danger */
import { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  AlbumListItemContainer,
  ImageBox,
  ImageGridListItem,
  Info,
  InfoText,
} from './AlbumListItem.styles'
import { IPicture} from '@/types'
import config from '@/data/config'
import { ImagesInDiv } from '@/components/atoms/ImagesInDiv'

export interface AlbumListItemProps {
    id: number,
    title: string,
    slug: string,
    pictures: IPicture[]
}

export const AlbumListItem:
FC<AlbumListItemProps> = ({title, slug, pictures}) => {
  const picFolder = config.IMAGES_BIG_URL
  let showPics = <h4>no images yet.</h4>
  
  const textForGalleria = (
    <h4>
      {pictures.length}
      {' '}
      kuvaa
    </h4>
  )

  if (pictures.length > 0) {
    const twoPics = pictures.slice(0, 2)
    showPics = <ImagesInDiv data={twoPics} url={picFolder} />
  }

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
