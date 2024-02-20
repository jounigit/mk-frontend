import { useParams } from 'react-router-dom'
import { AlbumDetailsAdmin } from './AlbumDetailsAdmin'
import { Col, Grid, Row }
  from '@/components/dashboard/components/Dashboard.styles'
import { ActionLinks } from './ActionLinks'
import { useGoBack } from '@/hooks/useGoBack'
import { Button } from '@/components/atoms/Button'
import { useSuspenseAlbumBySlug } from '../../useAlbum'
import { DetailsAdminContainer } from '@/styles/styles'

const AlbumAdmin = (): JSX.Element => {
  const { slug } = useParams() as {slug:string}
  const { data } = useSuspenseAlbumBySlug(slug)
  const goBack = useGoBack()

  const { linkUpdate, linkPictures } = ActionLinks({ id: data.id })
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

      <DetailsAdminContainer>
        <AlbumDetailsAdmin album={data} />
      </DetailsAdminContainer>
    </>
  )
}

export default AlbumAdmin
