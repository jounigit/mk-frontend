import { FadeDiv } from '@/components/atoms'
import { FC } from 'react'
import styled from 'styled-components/macro'
import painter from '@/assets/maalari-1.png'
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

const HomePage: FC = () => 
  <Wrapper>
    <FadeDiv timein="0.6s">
      {/* <img
        alt="United States"
        src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"/> */}
      <Cnt>
        <InfoB />
      </Cnt>
    </FadeDiv>
  </Wrapper>

export default HomePage

