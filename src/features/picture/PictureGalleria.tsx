import { FC, useState } from 'react'
import { ImagesLinkDiv } from '@/components/atoms/ImagesLinkDiv'
import config from '@/data/config'
import { IPicture } from '@/types'
import { ImageGrid, ImageGridProps } from './pictureGalleria.style'
import { useModal } from '@/hooks/useModal'
import { Modal } from '@/components/modal/modal'
import { ImageModal } from '@/components/image-modal/image-modal'
import { formatUrl } from '@/components/atoms/utils'

interface PictureMediaProps extends ImageGridProps {
    imageList: IPicture[]
}

export const PictureGalleria: FC<PictureMediaProps> = ({ imageList, width, height }) => {
  const { isShown, toggle } = useModal()
  const [img, setImg] = useState<IPicture>()

  const handleClick = (imgSrc: IPicture): void => {
    setImg(imgSrc)
    toggle()
  }

  const picFolder = config.IMAGES_BIG_URL
  return (
    <>

      <ImageGrid width={width} height={height}>

        <ImagesLinkDiv
          data={imageList}
          url={picFolder}
          onDivClick={(item) => handleClick(item)}
        />

      </ImageGrid>

      {
        img && 
        <Modal
          isShown={isShown}
          hide={toggle}
          headerText={img.title}
          modalContent= {
            <ImageModal imgUrl={formatUrl(picFolder, img.image)} message={img.content} />
          }
        />
      }
    </>
  )
}

// {
//   <ImageModal imgUrl={formatUrl(picFolder, img.image)} message={img.content} />
// }