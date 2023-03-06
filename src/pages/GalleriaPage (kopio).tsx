// import { FadeDiv } from '@/components/atoms/FadeIn.styles'
import { useAlbums } from '@/hooks/useAlbums'
// import { Spinner } from '@/styles/styles'
import React from 'react'
// import { TailSpin } from 'react-loader-spinner'
// import Spacer from 'react-spacer'

const GalleriaPage: React.FC = () => {
  // const albums = useAlbumsData()
  const albumsQuery = useAlbums()
  // let showAlbums
  let albums

  // if (albums.isLoading) {
  //   return (
  //     <Spinner marginTop={120}>
  //       <TailSpin
  //         color="red"
  //         height="80"
  //         width="80"
  //       />
  //     </Spinner>
  //   )
  // }

  if (albumsQuery.isSuccess) {
    albums = albumsQuery.data
  }
  
  // if (albums.data && albums.data.length === 0) return <div>No albums found.</div>


  // if (albums.isSuccess) {
  //   const data = albums.data
  //   console.log('## Albums: ', data)
  //   showAlbums = data.map((a) => (
  //     <h4 key={a.id}>
  //       {a.title}
  //     </h4>
  //   ))
  // }
  console.log('## Albums: ', albums)
  // const showAlbums = albums.map((a, i) => (
  //   <h4 key={i}>
  //     console.log() 
  //   </h4>
  // ))

  const mappedData = albums?.map((a) => (
    <h4 key={a.id}>
      {a.title}
    </h4>
  ))

  return (
    <>
      {/* <Spacer height={80} /> */}
      <div className="headerMiddle">
        GALLERIA
        { mappedData && mappedData }
        {['Alice', 'Bob'].map(element => (
          <div key={element}>{element}</div>
        ))}
      </div>

    </>
  )
}

export default GalleriaPage

// (
//   <FadeDiv timein="0.3s">
//     {showAlbums}
//   </FadeDiv>
// )


// {
//   Array.isArray(albums)
//     ? albums.map((element, index) => {
//       return (
//         <div key={index}>
//           <h2>{element.title}</h2>
//         </div>
//       )
//     })
//     : null
// }
// <h3>ÖÖ: {albums[1].title}</h3>