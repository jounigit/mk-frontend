// import { useState } from 'react'

import { Button } from '../../../../components/atoms/Button'
import { FormContainer } from '../../../../styles/styles'

// interface IFile {
//   url: string,
//   name: string,
// }

function UploadForm() {
  // const [file, setFile] = useState<File>()
  // const [previewUrl, setPreviewUrl] =
  // useState<string | null>(null)

  // hande input values
  // const fileChangedHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
  //   const selectedFiles = event.target.files as FileList
  //   setFile(selectedFiles?.[0])
  //   // setFile(event.target.files?.[0])
  //   setPreviewUrl(URL.createObjectURL(selectedFiles?.[0]))

  // const reader = new FileReader()

  // reader.onloadend = () => {
  //   setPreviewUrl( reader.result )
  // }

  // reader.readAsDataURL(event.target.files?.[0])
  // }

  // ----- handle form submit - post new data ---------- //
  // const submit = async() => {

  //   const formData = new FormData()
  //   file && formData.append('image', file)

  //   // try {

  //   // } catch (error) {
  //   //   console.error()
  //   //   // handleError('failed storing picture!')
  //   // }
  // }
  return (
    <FormContainer>
      <Button>
        Upload a file
      </Button>
      <input type='file' style={{ display:'none' }} />
    </FormContainer>
  )
}

export default UploadForm