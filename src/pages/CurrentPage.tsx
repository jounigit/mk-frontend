import { FadeDiv } from '@/components/atoms'
import { CurrentList } from '@/features/current/components/CurrentList'

const CurrentPage = (): JSX.Element => {
  return (
    <FadeDiv timein='0.3s'>
      <CurrentList />
    </FadeDiv>
  )
}

export default CurrentPage