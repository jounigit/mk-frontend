import { useQuery } from '@tanstack/react-query'
import {
  // useNavigate,
  useParams
} from 'react-router-dom'
import { IAlbum } from '@/types'
import { ErrorHandler, LoadingHandler } from '@/components/handlers'
import { AlbumAdminContainer } from '../AlbumDetails.styles'
import { AlbumDetailsAdmin } from './AlbumDetailsAdmin'
import { Col, Grid, Row }
  from '@/components/dashboard/components/Dashboard.styles'
import { ActionLinks } from './ActionLinks'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'

const AlbumAdmin = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  const albumQuery = useQuery<IAlbum>({
    queryKey: [`/album/${slug}`],
    enabled: !!slug,
  })
  const goBack = useGoBack()

  if (albumQuery.data) {
    const showData = albumQuery.data && <AlbumDetailsAdmin album={albumQuery.data} />

    const { linkUpdate, linkPictures } = ActionLinks({ id: albumQuery.data.id })
    return (
      <>
        <Button onClick={goBack}>...takaisin</Button>
        <Grid size={2}>
          <Row>
            <Col size={1}>
            </Col>
            <Col size={1}>
              {linkUpdate}
              {linkPictures}
              {/*  <Links>{linkRemove}</Links>  */}
            </Col>
          </Row>
        </Grid>
  
        <AlbumAdminContainer>
          {showData && showData}
          { !showData && <p>No data yet.</p>}
        </AlbumAdminContainer>
      </>
    )
  }

  if (albumQuery.isError) return <ErrorHandler error={(albumQuery.error as Error)} />

  return <LoadingHandler />
}

export default AlbumAdmin
