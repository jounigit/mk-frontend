import { formatUrl } from '@/components/atoms/utils'
import { Modal } from '@/components/modal/modal'
import config from '@/data/config'
import { ActionLinks } from '@/features/utils/ActionLinks'
import { useModal } from '@/hooks/useModal'
import { colors } from '@/styles/theme'
import { IPicture } from '@/types'
import { FC, Fragment } from 'react'
import styled from 'styled-components/macro'
import { PictureDelete } from './PictureDelete'

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

const picFolder = config.IMAGES_BIG_URL as string

export const PictureListItemAdmin: FC<Props> = (props) => {
  const { isShown, toggle } = useModal()
  const { id, title, image } = props.picture
  const pic1 = formatUrl(picFolder, image)
  
  /************** actions *************************/
  const { linkUpdate, linkRemove } =
  ActionLinks({ id, path: 'pictures', toggle })

  /************** return *************************/
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