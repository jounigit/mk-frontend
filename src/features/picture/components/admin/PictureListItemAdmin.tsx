import { formatUrl } from '@/components/atoms/utils'
import { Modal } from '@/components/modal/modal'
import config from '@/data/config'
import { ActionLinks } from '@/features/utils/ActionLinks'
import { useModal } from '@/hooks/useModal'
import { IPicture } from '@/types'
import { FC } from 'react'
import { PictureDelete } from './PictureDelete'
import { BtnInline } from '@/styles/styles'

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
    <>
      <article>
        <div>
          <img src={pic1} />
        </div>

        <BtnInline>
          {linkUpdate}
          {linkRemove}
        </BtnInline>
      </article>
      <Modal
        isShown={isShown}
        hide={toggle}
        headerText='Kuvan poisto'
        modalContent={
          <PictureDelete id={id} title={title} toggle={toggle}
          />} />
    </>
  )
}


{/* <Fragment>
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
</Fragment> */}