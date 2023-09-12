import config from '../../../../data/config'
import { formatUrl } from '../../../../components/atoms/utils'
import { IPicture } from '../../../../types'
import { Image, ImageBox } from './Choose.styles'
import { ChooseButton } from '../../../albumpictures/ChooseForm.styles'

type Props = {
    handleSelected: (id: number) => void
    picture: IPicture
    label: string
}

function ChooseForm({ handleSelected, picture }: Props) {
  const { id, image, title } = picture
  const picFolder = config.IMAGES_THUMB_URL as string

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSelected(id)
  }

  return (
    <ImageBox>
      <form onSubmit={(handleCheck)}>
        <Image src={formatUrl(picFolder, image)} />
        <details>
          <summary>{title}</summary>
          <p>{picture.year} {picture.size}</p>
          <p>{picture.content}</p>
        </details>
        <ChooseButton color='green' pd='5px' type='submit'>
          Valitse kuva
        </ChooseButton>
      </form>
    </ImageBox>
  )
}

export default ChooseForm
