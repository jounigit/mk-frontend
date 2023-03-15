import { SiteContent, TABLET } from '@/styles'
import styled from 'styled-components'

export const AlbumListContainer = styled(SiteContent)`
  display: grid;
  grid-template-rows: 1fr;
  gap: 0.6em;
  margin: auto;

  @media ${TABLET} {
    max-width: 70%;
    padding: 1em;
  }
`
