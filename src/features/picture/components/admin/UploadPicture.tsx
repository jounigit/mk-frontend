// import toast from 'react-hot-toast'
// import { ErrorHandler } from '../../../../components/handlers'
// import { useCreatePicture } from '../../usePicture'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import FileUploader from './FileUploader'
// import config from '../../../../data/config'
import { useQuery } from '@tanstack/react-query'
import { IPicture } from '../../../../types'
// import { createPicture } from '../../usePicture'
import { apiClient } from '../../../../http-common'

export const UploadPicture = (): JSX.Element => {
  const navigate = useNavigate()
  const { refetch } =
    useQuery<IPicture[]>({ queryKey: ['/pictures'] })

  // const baseURL = config.API_URL

  const handleFile = async (file: File) => {
    console.log({ file })
    const formData = new FormData()
    formData.append('image', file)

    try {
      const { data } = await apiClient.post('upload', formData)
      console.log('UPLOAD RSEPONSE: ', data.data)
      refetch()
      navigate(`/dashboard/pictures/update/${data.data.id}`)
    } catch (error) {
      console.error()
    }
  }

  // const handleData = (data: INewAlbum) => {
  //   mutate(data)
  // }


  /************** return *************************/
  return (
    <FileUploader handleFile={handleFile} />
  )
}

// const { mutate, status, error } = useCreatePicture()
// const navigate = useNavigate()

// /************** handle mutation *************************/
// if (status === 'error') {
//   return <ErrorHandler error={(error as Error)} />
// }

// useEffect(() => {
//   if (status === 'success') {
//     toast.success('Picture stored successfully.')
//     navigate('/dashboard/pictures')
//   }
// }, [status])

// try {
//   axios.post(`${baseURL}/upload`, formData, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   })
//   refetch()
//   navigate('/dashboard/pictures')
// } catch (error) {
//   console.error()
// }

// try {
//   createPicture({ image: file })

//   refetch()
//   navigate('/dashboard/pictures')
// } catch (error) {
//   console.error()
// }