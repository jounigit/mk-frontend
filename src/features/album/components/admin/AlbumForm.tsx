import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Divider,
  Form,
  FormContainer,
  InputWrapper,
} from '../../../../styles/styles'
import { GreenButton } from '../../../../components/atoms'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAlbum, INewAlbum } from '../../../../types'
import { FormInput } from '../../../utils/FormInput'
import { useGoBack } from '../../../../hooks/useGoBack'
import { Button } from '../../../../components/atoms/Button'

const schema = Yup.object().shape({
  title: Yup.string().required(),
  // en_title: Yup.string().optional(),
  // year: Yup.number().optional(),
  // content: Yup.string().optional(),
  // en_content: Yup.string().optional(),  
})

// type SchemaType = Yup.InferType<typeof schema>

type Inputs = {
    title: string;
    en_title?: string;
    year?: number;
    content?: string;
    en_content?: string;
}

type Props = {
  handleData: (data: INewAlbum) => void
  album?: IAlbum
  formName: string;
}

function AlbumForm({ handleData, album, formName }: Props) {
  const { register, handleSubmit, formState: { errors }, reset }
  = useForm<Inputs>({ resolver: yupResolver(schema) })
  const goBack = useGoBack()

  //************* handle submit *************/
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log({ data })

    const newAlbum = {
      title: data.title,
      year: data?.year,
      content: data?.content,
      en_title: data?.en_title,
      en_content: data?.en_content,
    }

    handleData(newAlbum)
    reset()
  }

  //************* return *******************/
  return (
    <>
      <Button onClick={goBack}>...takaisin</Button>
      <FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <h3 style={{ color: 'white' }}>{formName}</h3>

          <InputWrapper>

            {/* ...................... */}
            <FormInput<Inputs>
              name='year'
              defaultValue={album?.year}
              label='Vuosi/Year'
              register={register}
              errors={errors}
            />
            <Divider />
            {/* ...................... */}
            <FormInput<Inputs>
              name='title'
              defaultValue={album?.title}
              label='Nimi'
              register={register}
              errors={errors}
            />

            {/* ...................... */}
            <FormInput<Inputs>
              name='content'
              defaultValue={album?.content}
              label='Kuvaus'
              register={register}
            />

            <Divider />
            <h4> in english</h4>
            {/* ...................... */}
            <FormInput<Inputs>
              name='en_title'
              defaultValue={album?.en_title}
              label='Title'
              register={register}
            />

            {/* ...................... */}
            <FormInput<Inputs>
              name='en_content'
              defaultValue={album?.en_content}
              label='Content'
              register={register}
            />

            {/* ...................... */}
            <GreenButton type='submit' size={0.5}>Lähetä</GreenButton>
          </InputWrapper>

        </Form>
      </FormContainer>
    </>
  )
}

export default AlbumForm

// const schema: Yup.Schema<INewAlbum> = Yup.object().shape({
//   title: Yup.string().required(),
//   en_title: Yup.number().optional(),
//   year: Yup.number().optional(),
//   content: Yup.number().optional(),
//   en_content: Yup.number().optional(),  
// })

{/* <TextInput
fieldName='content'
defaultValue={album?.content}
register={'title'}
/> */}

{/* <Label>Title</Label>
<Input
  defaultValue={album?.title}
  {...register('title')}
/>
<p style={{ color: 'red' }}>{errors.title?.message}</p>

{/* ...................... */}
{/* <Label>Year</Label>
<Input
  defaultValue={album?.year}
  {...register('year')}
/>
<p style={{ color: 'red' }}>{errors.year?.message}</p> */}
{/* <Label>Year</Label>
          <Input
            defaultValue={album?.year}
            {...register('year')}
          />
          <p style={{ color: 'red' }}>{errors.year?.message}</p> */}
{/* <Label>Title</Label>
          <Input
            defaultValue={album?.title}
            {...register('title')}
          />
          <p style={{ color: 'red' }}>{errors.title?.message}</p> */}