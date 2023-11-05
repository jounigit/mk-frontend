import { useNavigate } from 'react-router-dom'
import { ErrorHandler } from '../../../../components/handlers'
import { useDeleteCv } from '../../useCv'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { SmallButton } from '../../../../components/atoms/Button'

type Props = {
  id: number,
  title: string,
  toggle?: () => void,
}

export const CvDelete = ({ id, title, toggle }: Props): JSX.Element => {
  const { status, error, mutate: DeleteCv } = useDeleteCv()
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Cv deleted successfully.')
      toggle && toggle()
      navigate('/dashboard/cv')
    }
  }, [navigate, status, toggle])

  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }

  /************** handle remove mutation ***********************/
  const remove = () => {
    DeleteCv(id)
  }

  return (
    <>
      <h4>Haluatko poistaa cv osion - {title}</h4>
      <SmallButton color="red"
        onClick={() => remove()}
      >
        Poista cv
      </SmallButton>
    </>
  )
}