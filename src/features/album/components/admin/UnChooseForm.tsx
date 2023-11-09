import config from '../../../../data/config'
import { formatUrl } from '../../../../components/atoms/utils'
import { IPicture } from '../../../../types'
import { Image, ImageBox } from './Choose.styles'
import { ChooseButton } from '../../../albumpictures/ChooseForm.styles'

type Props = {
    handleDelete: (id: number) => void
    picture: IPicture
}

const picFolder = config.IMAGES_THUMB_URL as string

function UnChooseForm({ handleDelete, picture, }: Props) {
  const { id, image, title } = picture

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleDelete(id)
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
        <ChooseButton color='red' pd='5px' type='submit'>
          Poista kuva
        </ChooseButton>
      </form>
    </ImageBox>
  )
}

export default UnChooseForm

{/* <Label>
        <Input
          type='checkbox'
          onChange={handleCheck}
          // defaultChecked={checked}
        />
        <LabelText>{label}</LabelText>
      </Label> */}