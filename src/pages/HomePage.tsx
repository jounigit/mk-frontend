import { FadeDiv } from '@/components/atoms'
import { Album } from '@/features/album/Album'
import { Info } from '@/features/info/Info'
import { FC } from 'react'

export const HomePage: FC = () => {

  return (
    <>
      <FadeDiv timein="0.3s">
        <Info />
        <Album />
      </FadeDiv>
    </>
  )
}

