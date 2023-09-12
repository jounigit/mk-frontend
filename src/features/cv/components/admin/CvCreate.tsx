import { useEffect } from 'react'
import { ErrorHandler } from '@/components/handlers'
import toast from 'react-hot-toast'
import { INewCV } from '@/types'
import CvForm from './CvForm'
import { useNavigate } from 'react-router-dom'
import { useCreateCv } from '../../useCv'

export const CvCreate = (): JSX.Element => {
  const { mutate, status, error } = useCreateCv()
  const navigate = useNavigate()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Cv stored successfully.')
      navigate('/dashboard/cv')
    }
  }, [navigate, status])


  /************** handle mutation *************************/
  if (status === 'error') {
    return <ErrorHandler error={(error as Error)} />
  }

  const handleData = (data: INewCV) => {
    mutate(data)
  }

  /************** return *************************/
  return (
    <CvForm
      handleData={handleData}
      formName='Uusi cv osio'
    />
  )
}