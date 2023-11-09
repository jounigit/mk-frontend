import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { INewCV, } from '@/types'
import { ErrorHandler } from '@/components/handlers'
import CvForm from './CvForm'
import { useSuspenseCv, useUpdateCv } from '../../useCv'
import toast from 'react-hot-toast'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'

export const CvUpdate: FC = () => {
  const params = useParams()
  const id = Number(params.id)
  const { data: CvItem } = useSuspenseCv(id)
  const { status: UpdateStatus, error: UpdateError, mutate } = useUpdateCv()
  const goBack = useGoBack()

  /****************************************************/
  useEffect(() => {
    if (UpdateStatus === 'success') {
      toast.success('Cv updated successfully.')
      goBack()
    }
  }, [UpdateStatus, goBack])

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
        cvItem={CvItem}
        handleData={handleData}
        formName='PÄIVITÄ CV'
      />
    </>
  )
}