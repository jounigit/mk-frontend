import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import styled from 'styled-components'
import { IPicture, IUpdatePicture } from '@/types'
import config from '@/data/config'
import { ImageInDiv } from '@/components/atoms/ImageInDiv'
import { FormContainer } from '@/styles'
import { 
  Divider, 
  Form, 
  InputWrapperTwoCol, 
  Label, 
  Textarea, 
  TwoColChild 
} from '@/styles/styles'
import { FormInput } from '@/features/utils/FormInput'
import { GreenButton } from '@/components/atoms'

export const ImageDiv = styled.div`
    display: block;
    height: 150px;
    width: auto;
    margin-bottom: 20px;
    border: 1px solid red;
`

const schema = yup.object().shape({
  title: yup.string().required(),
  year: yup.number().required(),
})

type Inputs = {
    title: string;
    en_title?: string;
    year: number;
    technique?: string;
    en_technique?: string;
    size?: string;
    content?: string;
    en_content?: string;
    photographer?: string;
}

type Props = {
    handleData: (data: IUpdatePicture) => void
    picture?: IPicture
    formName: string;
  }

const picFolder = config.IMAGES_THUMB_URL as string

function PictureForm({ handleData, picture, formName }: Props) {
  const [content, setContent] = useState(picture?.content)
  const [enContent, setEnContent] = useState(picture?.en_content)
  const { register, handleSubmit, formState: { errors }, reset }
  = useForm<Inputs>({ resolver: yupResolver(schema) })

  const showPic = picture &&
    <ImageInDiv data={picture} url={picFolder} />
  //************* handle submit *************/
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const cnt = content ? content : undefined
    const enCnt = enContent ? enContent : undefined
    console.log(cnt)

    const newPicture = {
      title: data.title,
      year: data.year,
      technique: data?.technique,
      size: data?.size,
      content: cnt,
      photographer: data?.photographer,
      en_title: data?.en_title,
      en_technique: data?.en_technique,
      en_content: enCnt
    }

    handleData(newPicture)
    reset()
  }

  //************* handle content *************/
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }
  
  const onChangeEn = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnContent(e.target.value)
  }

  //************* return *******************/
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {showPic}

        <h3 style={{ color: 'white', marginTop: '20px' }}>{formName}</h3>

        <InputWrapperTwoCol>

          <TwoColChild>
            <h4> suomeksi</h4>
            
            <FormInput<Inputs>
              name='title'
              defaultValue={picture?.title}
              label='Nimi'
              register={register}
              errors={errors}
            />

            <FormInput<Inputs>
              name='year'
              defaultValue={picture?.year}
              label='Vuosi/Year'
              register={register}
              errors={errors}
            />

            <FormInput<Inputs>
              name='technique'
              defaultValue={picture?.technique}
              label='Tekniikka'
              register={register}
            />

            <FormInput<Inputs>
              name='size'
              defaultValue={picture?.size}
              label='Koko/size'
              register={register}
            />

            <Label>Kuvaus</Label>
            <Textarea name='content' value={content} onChange={onChange} />

            <FormInput<Inputs>
              name='photographer'
              defaultValue={picture?.photographer}
              label='kuvaaja/photographer'
              register={register}
            />
          </TwoColChild>

          <Divider />

          <TwoColChild>
            <h4> in english</h4>

            <FormInput<Inputs>
              name='en_title'
              defaultValue={picture?.en_title}
              label='Title'
              register={register}
            />

            <FormInput<Inputs>
              name='en_technique'
              defaultValue={picture?.en_technique}
              label='technique'
              register={register}
            />

            <Label>Content</Label>
            <Textarea 
              name='en_content' 
              value={enContent} 
              onChange={onChangeEn} 
            />
          </TwoColChild>

        </InputWrapperTwoCol>

        <GreenButton type='submit' size={0.5}>Lähetä</GreenButton>
      </Form>
    </FormContainer>
  )
}

export default PictureForm