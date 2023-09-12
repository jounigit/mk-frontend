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
  const { isLoading, data, isError, error } = useQuery<IAlbum>({
    queryKey: [`/album/${slug}`],
    enabled: !!slug,
  })
  const goBack = useGoBack()

  if (isError) return <ErrorHandler error={(error as Error)} />
  if (isLoading) return <LoadingHandler />

  const showData = data && <AlbumDetailsAdmin album={data} />

  const { linkUpdate, linkPictures } = ActionLinks({ id: data.id })

  /************** return *** onClick={() => navigate('/dashboard/albums')}*****/
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
            {/* <Links>{linkUpdate}</Links>
            <Links>{linkRemove}</Links>
            <Links>{linkPictures}</Links> */}
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

export default AlbumAdmin
