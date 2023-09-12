import { useParams } from 'react-router-dom'
// import { ErrorHandler, LoadingHandler }
// from '../../../../components/handlers'
import {
  IAlbumPicture,
  IPicture,
  isPictureArray
} from '@/types'
import ChooseForm from './ChooseForm'
import {
  MainContainer
} from '@/components/dashboard/components/Dashboard.styles'
import { ChooseGrid, ChooseWrapper } from './Choose.styles'
import { useAlbum } from '../../useAlbum'
import { useQuery } from '@tanstack/react-query'
import UnChooseForm from './UnChooseForm'
import {
  useAddAlbumPicture,
  useDeleteAlbumPicture
} from '../../../albumpictures/useAlbumPictures'
import { addPictureToAlbum, deleteAlbumPicture } from '../../../albumpictures'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'
import { LoadingHandler } from '@/components/handlers'

const ChoosePictures = () => {
  const { mutate, isSuccess } = useAddAlbumPicture()
  const { mutate: deleteAPic, isSuccess: isDeleted } = useDeleteAlbumPicture()
  const params = useParams()
  const albumId = Number(params.id)
  const albumQuery = useAlbum(albumId)
  const pictureQuery = useQuery<IPicture[]>({ queryKey: ['/pictures'] })
  const albumPictureQuery =
  useQuery<IAlbumPicture[]>({ queryKey: ['/album-pictures'] })
  const goBack = useGoBack()

  if (pictureQuery.isLoading) return <LoadingHandler />
  if (albumQuery.isLoading) return <LoadingHandler />

  if (
    albumQuery.isSuccess
    && pictureQuery.isSuccess && albumPictureQuery.isSuccess
  ) {

    const { title, pictures: albumPics } = albumQuery.data
    const allPictures = pictureQuery.data
    const albumPictures = albumPictureQuery.data

    // ::::::::::: actions ::::::::::::::::::::::::: //
    const handleSelected = addPictureToAlbum(albumId, mutate, isSuccess)

    const handleDelete =
    deleteAlbumPicture(albumPictures, albumId, deleteAPic, isDeleted)

    // ::::::::: handle pictures ::::::::::::::::: //
    const notAlbumPics = allPictures.map((pic) =>
      albumPics.some((aPic) => aPic.id === pic.id) ? null : pic)
      .filter(p => p !== null)

    const chosenPics = albumPics.map((p, index) =>
      <div key={index}>
        <UnChooseForm
          picture={p}
          handleDelete={handleDelete}
        />
      </div>
    )

    const chooseablePics = isPictureArray(notAlbumPics) &&
    notAlbumPics.map((p, index) =>
      <div key={index}>
        <ChooseForm
          picture={p}
          label='Valitse kuva'
          handleSelected={handleSelected}
        />
      </div>
    )

    // :::::::::::::::::::::::::::::::::::: //
    return (
      <MainContainer>
        <Button onClick={goBack}>...takaisin</Button>
        <h2>{title} - valitse kuvia</h2>
        <h4 style={{ marginTop: '10px' }}>VALITUT KUVAT:</h4>
        <ChooseWrapper>
          <ChooseGrid>
            {chosenPics}
          </ChooseGrid>
        </ChooseWrapper>

        <h4>VALITTAVAT KUVAT:</h4>
        <ChooseWrapper>
          <ChooseGrid>
            {chooseablePics}
          </ChooseGrid>
        </ChooseWrapper>
      </MainContainer>
    )
  }
  return <p>No data here.</p>
}

export default ChoosePictures