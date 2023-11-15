import { SubmitHandler, useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { IAlbum, INewAlbum } from '@/types'
import { useGoBack } from '@/hooks/useGoBack'
import { Button, GreenButton } from '@/components/atoms/Button'
import { FormContainer } from '@/styles'
import { Divider, Form, InputWrapperTwoCol, TwoColChild } from '@/styles/styles'
import { FormInput } from '@/features/utils/FormInput'

const schema = Yup.object().shape({
  title: Yup.string().required(),
})

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
  const { register, handleSubmit, formState: { errors }, reset } =
  useForm<Inputs>({ resolver: yupResolver(schema) })
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

          <InputWrapperTwoCol>

            <TwoColChild>
              <h4> suomeksi</h4>

              <FormInput<Inputs>
                name='title'
                defaultValue={album?.title}
                label='Nimi'
                register={register}
                errors={errors}
              />

              <FormInput<Inputs>
                name='content'
                defaultValue={album?.content}
                label='Kuvaus'
                register={register}
              />

              <FormInput<Inputs>
                name='year'
                defaultValue={album?.year}
                label='Vuosi/Year'
                register={register}
                errors={errors}
              />

            </TwoColChild>

            <Divider />

            <TwoColChild>
              <h4> in english</h4>

              <FormInput<Inputs>
                name='en_title'
                defaultValue={album?.en_title}
                label='Title'
                register={register}
              />

              <FormInput<Inputs>
                name='en_content'
                defaultValue={album?.en_content}
                label='Content'
                register={register}
              />
            </TwoColChild>

          </InputWrapperTwoCol>

          <GreenButton type='submit' size={0.5}>Lähetä</GreenButton>

        </Form>
      </FormContainer>
    </>
  )
}

export default AlbumForm
