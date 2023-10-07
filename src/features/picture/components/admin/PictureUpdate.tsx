import { useParams } from 'react-router-dom'
import { IUpdatePicture, usePicture, useUpdatePicture } from '../../usePicture'
import { ErrorHandler, LoadingHandler } from '../../../../components/handlers'
import PictureForm from './PictureForm'
import { Fragment, useEffect } from 'react'
import toast from 'react-hot-toast'
import { Button } from '../../../../components/atoms/Button'
import { useGoBack } from '../../../../hooks/useGoBack'

export function PictureUpdate() {
  const params = useParams()
  const id = Number(params.id)
  const { isLoading, data, isError, error } = usePicture(id) // current picture
  const { status, error: UpdateError, mutate } = useUpdatePicture()
  const goBack = useGoBack()

  useEffect(() => {
    if (status === 'success') {
      toast.success('Picture updated successfully.')
      goBack()
    }
  }, [goBack, status])

  /************** get current  *************************/

  if (isLoading) return <LoadingHandler />
  if (isError) return <ErrorHandler error={(error as Error)} />

  const currentPicture = data

  /************** handle update *************************/
  if (status === 'error') {
    return <ErrorHandler error={(UpdateError as Error)} />
  }

  const handleData = (data: IUpdatePicture) => {
    console.table([data])
    const newPicture = data
    mutate({ id, newPicture })
  }

  /************** return *************************/
  return (
    <Fragment>
      <Button onClick={goBack}>...takaisin</Button>
      <PictureForm
        handleData={handleData}
        picture={currentPicture}
        formName='PÄIVITÄ KUVATIEDOT'
      />
    </Fragment>
  )
}