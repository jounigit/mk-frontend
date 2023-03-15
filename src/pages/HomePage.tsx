import { FadeDiv } from '@/components/atoms'
import { Info } from '@/features/info/Info'
import { FC } from 'react'

export const HomePage: FC = () => {

  return (
    <>
      <FadeDiv timein="0.3s">
        <Info />
      </FadeDiv>
    </>
  )
}

