import { FC } from 'react'
import styled from 'styled-components/macro'
import painter from '@/assets/maalari-1.png'
import { InfoB } from '@/features/info/Info-2'
// import { IsAuthUser, User } from '@/features/user/User'
// import { useUser } from '@/features/user/useUser'


const Wrapper = styled.div`
  display: grid;
  height: 100vh;
`
const Cnt = styled.div`
  height: 100%;
  background: url(${painter}); 
  background-size: contain;
  background-position: bottom 0 right 10%; 
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  flex-grow : 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  animation: fadein 4s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (min-width: 1700px) {
    background-position: bottom 0 right 20%; 
  }
  /*  */
`

const HomePage: FC = () => {
  // const isA = IsAuthUser()
  // const userQuery = useUser()

  // console.log('Pub user: ', isA)
  // console.log('Public user: ',
  //  userQuery.status==='success' && userQuery.data)

  return (
    <Wrapper>
      <Cnt>
        <InfoB />
      </Cnt>
    </Wrapper>
  )
}


export default HomePage

