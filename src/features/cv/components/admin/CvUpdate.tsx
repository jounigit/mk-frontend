import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { INewCV, } from '@/types'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import CvForm from './CvForm'
import { useCv, useUpdateCv } from '../../useCv'
import toast from 'react-hot-toast'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'

export const CvUpdate: FC = () => {
  const params = useParams()
  const id = Number(params.id)
  const { status, data, error } = useCv(id)
  const { status: UpdateStatus, error: UpdateError, mutate } = useUpdateCv()
  const goBack = useGoBack()

  useEffect(() => {
    if (UpdateStatus === 'success') {
      toast.success('Cv updated successfully.')
      goBack()
    }
  }, [UpdateStatus, goBack])

  /************** get current *************************/
  if (status === 'loading') return <LoadingHandler />
  if (status === 'error') return <ErrorHandler error={(error as Error)} />

  const cvItem = data
  /************** handle update *************************/
  if (UpdateStatus === 'error') {
    return <ErrorHandler error={(UpdateError as Error)} />
  }
  const handleData = (data: INewCV) => {
    const newCv = data
    console.log('-NEW CV: ',newCv)
    mutate({ id, newCv })
  }

  /************** return *************************/
  return (
    <>
      <Button onClick={goBack}>...takaisin</Button>
      <CvForm
        cvItem={cvItem}
        handleData={handleData}
        formName='PÄIVITÄ CV'
      />
    </>
  )
}