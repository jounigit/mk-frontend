import { PictureListItemAdmin } from './PictureListItemAdmin'
import { colors } from '@/styles/theme'
import { usePictures } from '../../usePicture'
import { ChooseGrid } from '@/features/album/components/admin/Choose.styles'
import styled from 'styled-components'
import {
  MainContainer
} from '@/components/dashboard/components/Dashboard.styles'

const Wrapper = styled(MainContainer)`
  max-width: 95%;
  background: ${colors.grey3};
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
`

export const PictureListAdmin = () => {
  const { data } = usePictures()

  const showdata = data ?
    data.map(p => <PictureListItemAdmin key={p.id} picture={p} /> ) :
    <h4>no images yet.</h4>

  return (
    <Wrapper>
      <ChooseGrid>
        {showdata}
      </ChooseGrid>
    </Wrapper>
  )
}