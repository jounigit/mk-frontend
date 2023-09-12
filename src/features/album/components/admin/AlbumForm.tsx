import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Form,
  FormContainer,
  // Input,
  InputWrapper,
  // Label
} from '../../../../styles/styles'
import { GreenButton } from '../../../../components/atoms'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAlbum, INewAlbum } from '../../../../types'
import { FormInput } from '../../../utils/FormInput'
import { useGoBack } from '../../../../hooks/useGoBack'
import { Button } from '../../../../components/atoms/Button'

const schema = yup.object().shape({
  title: yup.string().required(),
  // year: yup.number().required(),
  // info: yup.string(),
})

type Inputs = {
    title: string;
    year: number;
    content: string;
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
      year: data.year,
      content: data.content,
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
              name='title'
              defaultValue={album?.title}
              label='Title'
              register={register}
              errors={errors}
            />

            {/* ...................... */}
            <FormInput<Inputs>
              name='year'
              defaultValue={album?.year}
              label='Year'
              register={register}
              errors={errors}
            />
            {/* ...................... */}
            <FormInput<Inputs>
              name='content'
              defaultValue={album?.content}
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