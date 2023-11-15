import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Form,
  FormContainer,
  InputWrapper,
  Label
} from '../../../../styles/styles'
import { ICv, INewCV, } from '../../../../types'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { GreenButton } from '../../../../components/atoms'
import { FormInput } from '../../../utils/FormInput'

const schema = yup.object().shape({
  title: yup.string().required(),
  en_title: yup.string(),
})

type Inputs = {
    title: string;
    // en_title?: string;
}

type Props = {
    handleData: (data: INewCV) => void;
    cvItem?: ICv;
    formName: string;
  }

function CvForm({ cvItem, handleData, formName }: Props) {
  const [content, setContent] = useState(cvItem?.content)
  const { register, handleSubmit, formState: { errors }, reset, } =
  useForm<Inputs>({ resolver: yupResolver(schema) })

  //************* handle submit *************/
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log('-SUBMIT: ', data)
    const cnt = content ? content : ''

    const newCv = {
      title: data.title,
      content: cnt,
    }

    handleData(newCv)
    reset()
  }

  //************* handle content *************/
  const onChange = (value: string) => {
    setContent(value)
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ color: 'white' }}>{cvItem?.title}</h3>
        <h3 style={{ color: 'white' }}>{formName}</h3>

        <InputWrapper>
          {/* ...................... */}
          <FormInput<Inputs>
            name='title'
            defaultValue={cvItem?.title}
            label='Title'
            register={register}
            errors={errors}
          />

          {/* ...................... */}
          <Label>Content</Label>
          <div style={{ background: 'white' }}>
            <ReactQuill theme='snow' value={content} onChange={onChange} />
          </div>

          {/* ...................... */}
          <GreenButton type='submit' size={0.5}>Lähetä</GreenButton>
        </InputWrapper>
      </Form>
    </FormContainer>
  )
}

export default CvForm

{/* <Label>Title</Label>
<Input
  defaultValue={cvItem?.title}
  {...register('title')}
  required
/>
{errors.title?.message} */}