import { CvContainer } from './Cv.styles'
import { CvListItem } from './CvListItem'
import { useSuspenseCvs } from '../useCv'

export const CvList = (): JSX.Element => {
  const { data } = useSuspenseCvs()

  const showdata = data.length ? 
    data.map(c => <CvListItem key={c.id} cv={c} />) :
    <h4>No CVs yet.</h4>

  return (
    <CvContainer>
      {showdata}
    </CvContainer>
  )
}
