import { ImagesInDiv } from '@/components/atoms/ImagesInDiv'
import config from '@/data/config'
import {
  ListImgBox,
  ListItemContainer,
  ListItemImageGrid,
  ListItemInfo,
  ListItemInfoText
} from '@/styles/styles'
import { ICurrent } from '@/types'
import { FC } from 'react'
import { Link } from 'react-router-dom'

const picFolder = config.IMAGES_BIG_URL as string

export const CurrentListItem: FC<{current: ICurrent}> = ({ current }) => {
  const { title, slug, content, pictures } = current
  // **************************************************************** //
  const renderTextForCurrent = () => (
    <h4>
      {pictures && pictures.length}
      {' '}
        kuvaa
    </h4>
  )

  const renderShowPics = () => pictures ?
    <ImagesInDiv
      data={pictures.slice(0, 2)}
      url={picFolder}
      showInfo={false}
    /> :
    <h4>no images yet.</h4>

  // **************** return ***************************************** //
  return (
    <ListItemContainer data-cy='currentListItem'>
      <Link
        data-cy='albumListItemLink'
        style={{ textDecoration: 'none' }}
        to={`/galleria/${slug}`}
      >
        <ListImgBox>
          <ListItemImageGrid width={200} height={200}>
            {renderShowPics()}
          </ListItemImageGrid>
        </ListImgBox>

        <ListItemInfo>
          <h3>{title}</h3>
          <ListItemInfoText>
            {renderTextForCurrent()}
          </ListItemInfoText>
        </ListItemInfo>

      </Link>
      <h3>{title}</h3>
      <p>{content}</p>
    </ListItemContainer>
  )
}