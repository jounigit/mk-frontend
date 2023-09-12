import { FC, useState } from 'react'
import { ImageGrid, ImageGridProps } from './pictureGalleria.style'
import { IPicture } from '../../../types'
import { useModal } from '../../../hooks/useModal'
import config from '../../../data/config'
import { ImagesLinkDiv } from '../../../components/atoms/ImagesLinkDiv'
import { Modal } from '../../../components/modal/modal'
import { ImageModal } from '../../../components/image-modal/image-modal'
import { formatUrl } from '../../../components/atoms/utils'
import { useWindowSize } from 'usehooks-ts'
import { ImagesInDiv } from '../../../components/atoms/ImagesInDiv'


interface PictureMediaProps extends ImageGridProps {
    imageList: IPicture[]
}

export const PictureGalleria: FC<PictureMediaProps> =
({ imageList, width, height }) => {
  const { isShown, toggle } = useModal()
  const [img, setImg] = useState<IPicture>()
  const { width: winWidth } = useWindowSize()

  const picFolder = config.IMAGES_BIG_URL as string

  const mobile = winWidth < 768 ? true : false

  const handleClick = (imgSrc: IPicture): void => {
    setImg(imgSrc)
    toggle()
  }

  // console.log('width: ', winWidth)

  return (
    <>

      <ImageGrid width={width} height={height}>

        { mobile &&
          <ImagesInDiv
            data={imageList}
            url={picFolder}
          />
        }

        {!mobile &&
        <ImagesLinkDiv
          data={imageList}
          url={picFolder}
          onDivClick={(item) => handleClick(item)}
        />
        }

      </ImageGrid>

      {
        img &&
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText={img.title}
          modalContent= {
            <ImageModal
              imgUrl={formatUrl(picFolder, img.image)}
              pic={img}
            />
          }
        />
      }
    </>
  )
}

// {
//   <ImageModal
// imgUrl={formatUrl(picFolder, img.image)} message={img.content} />
// }