import { FadeDiv } from '@/components/atoms'
import { CvList } from '@/features/cv/components/CvList'

const CvPage = (): JSX.Element => {
  return (
    <FadeDiv timein='0.3s'>
      <CvList />
    </FadeDiv>
  )
}

export default CvPage