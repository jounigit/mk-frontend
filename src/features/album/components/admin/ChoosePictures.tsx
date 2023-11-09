import { useParams } from 'react-router-dom'
import {
  isPictureArray
} from '@/types'
import {
  MainContainer
} from '@/components/dashboard/components/Dashboard.styles'
import { ChooseGrid, ChooseWrapper } from './Choose.styles'
import { useAlbum } from '../../useAlbum'
import {
  useAddAlbumPicture,
  useAlbumPictures,
  useDeleteAlbumPicture
} from '../../../albumpictures/useAlbumPictures'
import { addPictureToAlbum, deleteAlbumPicture } from '../../../albumpictures'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'
import PictureChoiseForm from './PictureChoiseForm'
import { usePictures } from '@/features/picture/usePicture'

const ChoosePictures = () => {
  const params = useParams()
  const albumId = Number(params.id)
  const { data: Album } = useAlbum(albumId)
  const { data: Pictures } = usePictures()
  const { data: AllAPics } = useAlbumPictures()
  const { mutate: addPicture } = useAddAlbumPicture()
  const { mutate: deleteAPic } = useDeleteAlbumPicture()
  const goBack = useGoBack()

  if (Album && Pictures && AllAPics) {
    const { title, pictures: albumPics } = Album

    // ::::::::::: actions ::::::::::::::::::::::::: //
    const handleSelected = addPictureToAlbum(albumId, addPicture)

    const handleDelete =
    deleteAlbumPicture( AllAPics, albumId, deleteAPic)

    // ::::::::: handle pictures ::::::::::::::::: //
    const notAlbumPics = Pictures.map((pic) =>
      albumPics.some((aPic) => aPic.id === pic.id) ? null : pic)
      .filter(p => p !== null)

    const chosenPics = albumPics.map((p, index) =>
      <div key={index}>
        <PictureChoiseForm
          picture={p}
          btnTxt='Poista kuva'
          btnColor='red'
          handleChoise={handleDelete}
        />
      </div>
    )

    const chooseablePics = isPictureArray(notAlbumPics) &&
    notAlbumPics.map((p, index) =>
      <div key={index}>
        <PictureChoiseForm
          picture={p}
          btnTxt='Valitse kuva'
          btnColor='green'
          handleChoise={handleSelected}
        />
      </div>
    )

    // :::::::::::::::::::::::::::::::::::: //
    return (
      <MainContainer>
        <Button onClick={goBack}>...takaisin</Button>

        <h2>{title} - valitse kuvia</h2>

        <h4 style={{ marginTop: '10px' }}>
          VALITUT KUVAT:
        </h4>
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