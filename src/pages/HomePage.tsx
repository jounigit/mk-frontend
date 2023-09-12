import { FadeDiv } from '@/components/atoms'
import { FC } from 'react'
import styled from 'styled-components/macro'
import painter from '@/assets/maalari-1.png'
import { useUser } from '@/features/user/useUser'
import { authUser } from '@/services/authUser.service'
import { InfoB } from '@/features/info/Info-2'


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

  @media (min-width: 1700px) {
    background-position: bottom 0 right 20%; 
  }
  /*  */
`

const HomePage: FC = () => {
  const userQuery = useUser()
  const localUser = authUser()

  console.log('Home userLocal: ', localUser && localUser)
  console.log('Home user hook: ', userQuery.isSuccess && userQuery.data)

  return (
    <Wrapper>
      <FadeDiv timein="0.6s">
        <Cnt>
          <InfoB />
        </Cnt>
      </FadeDiv>
    </Wrapper>
  )
}

export default HomePage

