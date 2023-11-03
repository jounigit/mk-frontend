import { FC, Fragment } from 'react'
import { IPicture } from '../../../../types'
import config from '../../../../data/config'
import { formatUrl } from '../../../../components/atoms/utils'
import styled from 'styled-components/macro'
import { colors } from '../../../../styles/theme'
import { Modal } from '../../../../components/modal/modal'
import { useModal } from '../../../../hooks/useModal'
import { PictureDelete } from './PictureDelete'
import { ActionLinks } from '../../../utils/ActionLinks'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 10rem;
    padding: 10px 10px;
    border: 1px solid ${colors.grey3};
    border-radius: 0.2rem;
    background-color: white;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`
const LinksWrapper = styled.div`
    flex-direction: row;
    padding-bottom: 0;
`

interface Props {
    picture: IPicture
}

export const PictureListItemAdmin: FC<Props> = (props) => {
  const { isShown, toggle } = useModal()
  const { id, title, image } = props.picture
  const picFolder = config.IMAGES_BIG_URL as string
  const pic1 = formatUrl(picFolder, image)
  
  // :::::::::::::::::::::::::::::::::::: //
  const { linkUpdate, linkRemove } =
  ActionLinks({ id, path: 'pictures', toggle })

  // :::::::::::::::::::::::::::::::::::: //
  return (
    <Fragment>
      <Wrapper>
        <Image
          src={pic1}
        />

        <LinksWrapper>
          <span>
            {linkUpdate}
          </span>
          <span>
            {linkRemove}
          </span>
        </LinksWrapper>
      </Wrapper>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText='Kuvan poisto'
        modalContent={
          <PictureDelete id={id} title={title} toggle={toggle} />
        }
      />
    </Fragment>
  )
}