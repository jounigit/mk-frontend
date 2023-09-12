import { useNavigate } from 'react-router-dom'
import { ErrorHandler } from '../../../../components/handlers'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { SmallButton } from '../../../../components/atoms/Button'
import { useDeletePicture } from '../../usePicture'

type Props = {
  id: number,
  title: string,
  toggle?: () => void,
}

export const PictureDelete = ({ id, title, toggle }: Props): JSX.Element => {
  const { status, error, mutate: DeletePicture } = useDeletePicture()
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Picture deleted successfully.')
      toggle && toggle()
      navigate('/dashboard/pictures')
    }
  }, [status])

  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }

  /************** handle remove mutation ***********************/
  const remove = () => {
    DeletePicture(id)
  }

  return (
    <>
      <h4>Haluatko poistaa kuvan - {title}</h4>
      <SmallButton color="red"
        onClick={() => remove()}
      >
        Poista kuva
      </SmallButton>
    </>
  )
}