import { FadeDiv } from '@/components/atoms'
import { Info } from '@/features/info/Info'
import { FC } from 'react'
import styled from 'styled-components/macro'

const HomePageContainer = styled.div`
  /* min-height: 100vh; */
  /* background-color: #b61e1e; */
`

export const HomePage: FC = () => {

  return (
    <HomePageContainer>
      <FadeDiv timein="0.3s">
        <Info />
      </FadeDiv>
    </HomePageContainer>
  )
}

