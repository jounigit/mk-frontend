// import { FadeDiv } from '@/components/atoms'
import { LoadingHandler } from '@/components/handlers'
import { AlbumsList } from '@/features/album'
import React from 'react'


const GalleriaPage = (): JSX.Element => {
  return (
    // <FadeDiv timein="0.3s">
    <React.Suspense fallback={<LoadingHandler />}>
      <AlbumsList />
    </React.Suspense>
    // </FadeDiv>
  )
}

export default GalleriaPage
