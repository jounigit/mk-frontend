// import { useQuery } from '@tanstack/react-query'
// import { IPicture } from '../../../../types'
import { ErrorHandler, LoadingHandler } from '../../../../components/handlers'
import { PictureListItemAdmin } from './PictureListItemAdmin'
import { MainContainer }
  from '../../../../components/dashboard/components/Dashboard.styles'
import { ChooseGrid } from '../../../album/components/admin/Choose.styles'
import { usePictures } from '../../usePicture'
import styled from 'styled-components'
import { colors } from '../../../../styles/theme'

const Wrapper = styled(MainContainer)`
  max-width: 95%;
  background: ${colors.grey3};
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 4rem;
`

export const PictureListAdmin = () => {
  const { isError, data, error } = usePictures()

  if (data) {
    const showdata = data?.map(p =>
      <PictureListItemAdmin key={p.id} picture={p} />
    )
  
    return (
      <Wrapper>
        <ChooseGrid>
          {showdata && showdata}
        </ChooseGrid>
      </Wrapper>
    )
  }

  if (isError) return <ErrorHandler error={(error as Error)} />

  return <LoadingHandler />
}