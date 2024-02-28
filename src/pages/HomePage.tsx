import { FC } from 'react'
import styled from 'styled-components/macro'
import painter from '@/assets/maalari-1.png'
import kuva from '@/assets/kuva-1.png'
import { InfoB } from '@/features/info/Info-2'
import { DESKTOP, MOBILE, TABLET } from '@/styles'

const Wrapper = styled.div`
  display: grid;
  height: 100vh;
`
const Cnt = styled.div`
  height: 90vh;
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
  @media ${TABLET} {
    height: 100%;
  }
`
const Corner = styled.div`
  @media ${MOBILE} {
    visibility: hidden;
  }
  
  @media ${TABLET} {
    visibility: visible;
    position: absolute;
    height: 25%;
    width: 30%;
    bottom: 20%;
    left: 15%;
    z-index: 1;
    background: url(${kuva}); 
    background-size: contain;
    background-position: bottom 0 left 10%; 
    background-repeat: no-repeat;
    transform: rotate(-85deg);
    animation: run ease .5s;
    @keyframes run {
      0% { margin-left: -98%;}
      100%{ margin-left: 0%;}
    }
  }
  @media ${DESKTOP} {
    left: 20%;
  }
`

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Corner />
      <Cnt>
        <InfoB />
      </Cnt>
    </Wrapper>
  )
}


export default HomePage

