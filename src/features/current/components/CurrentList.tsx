// import { getAll } from '@/services/apiService'
// import { ICurrent } from '@/types'
// import { useSuspenseQuery } from '@tanstack/react-query'
import { CurrentListItem } from './CurrentListItem'
import { ListContainer } from '@/styles/styles'
import { useSuspenseCurrents } from '../useCurrent'

export const CurrentList = () => {
  const { data } = useSuspenseCurrents()

  const showList = data.length ?
    data.map(c => <CurrentListItem key={c.id} current={c} />) :
    <h4>no currents yet.</h4>

  return (
    <ListContainer>
      {showList}
    </ListContainer>
  )
}
