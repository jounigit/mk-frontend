import styled from 'styled-components/macro'

const Wrapper = styled.div`
  padding: 1rem;
`

const CurrentListAdmin = (): JSX.Element => {
  // const { data: Albums } = useAlbums()

  // const showAlbums = Albums && Albums.length ?
  //   Albums.map(a => <AlbumListItemAdmin key={a.id} album={a} />) :
  //   <p>no albums yet.</p>

  return (
    <Wrapper data-cy='currentList'>
      <h2>Current List</h2>
      {/* {showAlbums} */}
    </Wrapper>
  )
}

export default CurrentListAdmin