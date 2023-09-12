import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Form,
  FormContainer,
  InputWrapper,
  Label,
  Textarea,
} from '../../../../styles/styles'
import { IPicture } from '../../../../types'
import { IUpdatePicture } from '../../usePicture'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { GreenButton } from '../../../../components/atoms'
import { FormInput } from '../../../utils/FormInput'
import { useState } from 'react'
import config from '../../../../data/config'
import { ImageInDiv } from '../../../../components/atoms/ImageInDiv'
import styled from 'styled-components'

export const ImageDiv = styled.div`
    display: block;
    height: 150px;
    width: auto;
    margin-bottom: 20px;
    border: 1px solid red;
`

const schema = yup.object().shape({
  title: yup.string().required(),
})

type Inputs = {
    title: string;
    year: number;
    technique: string;
    size: string;
    content: string;
    photographer: string;
}

type Props = {
    handleData: (data: IUpdatePicture) => void
    picture?: IPicture
    formName: string;
  }

function PictureForm({ handleData, picture, formName }: Props) {
  const [content, setContent] = useState(picture?.content)
  const { register, handleSubmit, formState: { errors }, reset }
  = useForm<Inputs>({ resolver: yupResolver(schema) })

  const picFolder = config.IMAGES_THUMB_URL as string
  const showPic = picture &&
    <ImageInDiv data={picture} url={picFolder} />
  //************* handle submit *************/
  console.log('FORM: ', picture && picture.title)
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cnt = content ? content : ''
    console.log(cnt)

    const newPicture = {
      title: data.title,
      year: data.year,
      technique: data.technique,
      size: data.size,
      content: cnt,
      photographer: data.photographer
    }

    handleData(newPicture)
    reset()
  }

  //************* handle content *************/
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  // const onChange = (value: string): void => {
  //   setContent(value)
  // }

  //************* return *******************/
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* <ImageDiv> */}
        {showPic}
        {/* </ImageDiv> */}
        <h3 style={{ color: 'white', marginTop: '20px' }}>{formName}</h3>
        <InputWrapper>

          {/* ...................... */}
          <FormInput<Inputs>
            name='title'
            defaultValue={picture?.title}
            label='Title'
            register={register}
            errors={errors}
          />

          {/* ...................... */}
          <FormInput<Inputs>
            name='year'
            defaultValue={picture?.year}
            label='Year'
            register={register}
            errors={errors}
          />

          {/* ...................... */}
          <FormInput<Inputs>
            name='technique'
            defaultValue={picture?.technique}
            label='technique'
            register={register}
          />

          {/* ...................... */}
          <FormInput<Inputs>
            name='size'
            defaultValue={picture?.size}
            label='size'
            register={register}
          />

          {/* ...................... */}
          <Label>Content</Label>
          <Textarea name='content' value={content} onChange={onChange} />

          {/* ...................... */}
          <FormInput<Inputs>
            name='photographer'
            defaultValue={picture?.photographer}
            label='photographer'
            register={register}
          />

          {/* ...................... */}
          <GreenButton type='submit' size={0.5}>Lähetä</GreenButton>

          {/* ...................... */}
        </InputWrapper>
      </Form>
    </FormContainer>
  )
}

export default PictureForm