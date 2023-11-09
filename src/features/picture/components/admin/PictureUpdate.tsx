import { useParams } from 'react-router-dom'
import PictureForm from './PictureForm'
import { Fragment, useEffect } from 'react'
import { useSuspensePicture, useUpdatePicture } from '../../usePicture'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'
import { IUpdatePicture } from '@/types'

export function PictureUpdate() {
  const params = useParams()
  const id = Number(params.id)
  const { data: CurrentPicture } = useSuspensePicture(id)
  const { status, mutate } = useUpdatePicture()
  const goBack = useGoBack()

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      goBack()
    }
  }, [goBack, status])

  /************** handle update *************************/
  const handleData = (data: IUpdatePicture) => {
    const newPicture = data
    mutate({ id, newPicture })
  }

  /************** return *************************/
  return (
    <Fragment>
      <Button onClick={goBack}>...takaisin</Button>
      <PictureForm
        handleData={handleData}
        picture={CurrentPicture}
        formName='PÄIVITÄ KUVATIEDOT'
      />
    </Fragment>
  )
}