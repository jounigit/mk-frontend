/* eslint-disable react-hooks/exhaustive-deps */
import { IAlbum } from '@/types'
import axios from 'axios'
import { useEffect, useState } from 'react'


const GalleriaPage = (): JSX.Element => {
  const [albums, setAlbums] = useState<IAlbum[]>()
  const url = import.meta.env.VITE_API_URL

  useEffect(() => {
    getAllAlbums()
  }, [])

  const getAllAlbums = (): void => {
    axios.get(`${url}/albums`)
      .then((response) => {
        const allAlbums = response.data
        setAlbums(allAlbums)
      })
      .catch(error => console.error(`Error: ${error}`))
  }

  if (albums && albums.length > 0) {
    return (
      <>
        {console.log(albums[0].title)}
        <h2>{albums[0].title}</h2>
      </>
    )
  }

  return (
    <>
      <h3>Ei mitään???</h3>
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