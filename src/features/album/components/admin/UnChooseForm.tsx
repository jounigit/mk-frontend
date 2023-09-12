import config from '../../../../data/config'
import { formatUrl } from '../../../../components/atoms/utils'
import { IPicture } from '../../../../types'
import { Image, ImageBox } from './Choose.styles'
import { ChooseButton } from '../../../albumpictures/ChooseForm.styles'

type Props = {
    handleDelete: (id: number) => void
    picture: IPicture
    // label: string
}

function UnChooseForm({ handleDelete, picture, }: Props) {
  // const [checked, setChecked] = useState(false)
  const { id, image, title } = picture
  const picFolder = config.IMAGES_THUMB_URL as string

  const handleCheck = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleDelete(id)
  }

  return (
    <div>
      <ImageBox>
        <Image src={formatUrl(picFolder, image)} />
        <details>
          <summary>{title}</summary>
          <p>{picture.year} {picture.size}</p>
          <p>{picture.content}</p>
        </details>
      </ImageBox>
      <form onSubmit={(handleCheck)}>
        <ChooseButton color='red' pd='5px' type='submit'>
          Poista kuva
        </ChooseButton>
      </form>
    </div>
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