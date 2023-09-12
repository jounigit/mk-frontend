/* eslint-disable no-self-assign */
import { FC, Fragment } from 'react'
import {
  ImageGridListItem,
  InfoText,
} from '../AlbumListItem.styles'
import config from '@/data/config'
import { IAlbum } from '@/types'
import styled from 'styled-components'
import {
  Col,
  Grid,
  Row
} from '@/components/dashboard/components/Dashboard.styles'
import { ActionLinks } from './ActionLinks'
import { Modal } from '@/components/modal/modal'
import { useModal } from '@/hooks/useModal'
import { AlbumDelete } from './AlbumDelete'
import { ImageInDiv } from '@/components/atoms/ImageInDiv'
import { colors } from '@/styles/theme'

const ImageItem = styled(ImageGridListItem)`
    grid-template-columns: 1fr;
    margin: 0.5rem 1rem 0.5rem 0;
`

const Content = styled.div`
    padding: 1.5rem;
`
const Links = styled.div`

`

interface ListProps {
  album: IAlbum,
}

export const AlbumListItemAdmin: FC<ListProps> = (props) => {
  const { isShown, toggle } = useModal()
  const { id, title, slug, pictures } = props.album
  const picFolder = config.IMAGES_THUMB_URL as string
  const firstPic = pictures[0]
  console.log('album: ', title ,'pics: ', pictures)
  let showPic = <h4>no images yet.</h4>

  const textForGalleria = (
    <h4>
      {pictures.length}
      {' '}
      kuvaa
    </h4>
  )

  if (firstPic) {
    showPic = <ImageInDiv data={firstPic} url={picFolder} />
  }

  const {
    link, linkUpdate, linkRemove, linkPictures
  } = ActionLinks({ id, slug, toggle })

  // :::::::::::::::::: style={{ marginRight: '2rem' }}:::::::::::::::::: //
  return (
    <Fragment>
      <Grid size={5}>
        <Row bgColor={colors.grey1}>
          <Col size={1}>
            <ImageItem width={150} height={150}>
              {showPic}
            </ImageItem>
          </Col>
          <Col size={2}>
            <Content>
              <h3>{title}</h3>
              <InfoText>
                {textForGalleria}
              </InfoText>
            </Content>
          </Col>
          <Col size={1}>
            <Links>
              {link}
            </Links>
            <Links>
              {linkUpdate}
            </Links>
            <Links>
              {linkPictures}
            </Links>
            <Links>
              {linkRemove}
            </Links>
          </Col>
        </Row>

      </Grid>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText='Albumin poisto'
        modalContent={
          <AlbumDelete id={id} title={title} />
        }
      />
    </Fragment>
  )
}

