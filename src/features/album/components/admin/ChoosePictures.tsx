import { useParams } from 'react-router-dom'
import {
  isPictureArray
} from '@/types'
import { useAlbum } from '../../useAlbum'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'
import { usePictures } from '@/features/picture/usePicture'
import { addPictureToAlbum, deleteAlbumPicture } from '@/features/albumpictures'
import {
  useAddAlbumPicture,
  useAlbumPictures,
  useDeleteAlbumPicture,
} from '@/features/albumpictures/useAlbumPictures'
import ImageChoise from '@/features/shared/ImageChoise'
import {
  GridImgArray, ImageArrBox
} from '@/features/shared/GridImageArray.styles'

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
      albumPics.some((aPic) => aPic.id === pic.id) ?
        null :
        pic)
      .filter(p => p !== null)

    const chosenPics = albumPics.map((p, index) =>
      <div key={index}>
        <ImageChoise
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
        <ImageChoise
          picture={p}
          btnTxt='Valitse kuva'
          btnColor='green'
          handleChoise={handleSelected}
        />
      </div>
    )

    // :::::::::::::::::::::::::::::::::::: //
    return (
      <>
        <Button onClick={goBack}>...takaisin</Button>
        <h2 style={{ marginLeft: '20px' }}>{title} - valitse kuvia</h2>

        <h4 style={{ margin: '10px 0 0 20px' }}>
          VALITUT KUVAT:
        </h4>
        <ImageArrBox>
          <GridImgArray width={180} imgheight={180} gap='.8rem'>
            {chosenPics}
          </GridImgArray>
        </ImageArrBox>

        <h4 style={{ marginLeft: '20px' }}>VALITTAVAT KUVAT:</h4>
        <ImageArrBox>
          <GridImgArray width={190} imgheight={180} gap='.8rem'>
            {chooseablePics}
          </GridImgArray>
        </ImageArrBox>
      </>
    )
  }
  return <p>No data here.</p>
}

export default ChoosePictures
