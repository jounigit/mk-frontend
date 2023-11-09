import { CvContainer } from '../Cv.styles'
import { CvListItemAdmin } from './CvListItemAdmin'
import { useSuspenseCvs } from '../../useCv'

export const CvListAdmin = (): JSX.Element => {
  const { data } = useSuspenseCvs()

  const showdata = data.length ?
    data.map(c => <CvListItemAdmin key={c.id} cv={c} />) :
    <h4>No CVs yet.</h4>

  // ###################################################################
  return (
    <CvContainer>
      {showdata}
    </CvContainer>
  )
}