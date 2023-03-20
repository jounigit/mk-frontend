import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { useAlbums } from './useAlbum'
import { wrapper } from '@/test-utils/wrapper'
import nock from 'nock' 

describe('useAlbums hook', async () => { 
  it('get all albums', async () => {
    const { result } = renderHook(() => useAlbums(), { wrapper })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))
    expect(result.current.data).toBeDefined()
  })

  it('get albums 2', async () => {
    const expectation = nock('http://example.com')
      .get('/albums')
      .reply(200, {
        id: 1,
        title: 'Testi 1',
        slug: 'testi-1',
        year: 1234,
        content: '',
        status: 1,
        pictures: [],
      })

    console.log({expectation})
    const { result } = renderHook(() => useAlbums(), { wrapper })
    await waitFor(() => expect(result.current.isSuccess).toBe(true))
  })
})



// it('get all albums', async () => {
//   const { result } = renderHook(() => useAlbums(), { wrapper })

//   await waitFor(() => expect(result.current.isSuccess).toBe(true))
//   // const first = result.current.data && result.current.data[0]
//   const all = result.current.data && result.current.data
//   // console.log(tulos)
//   expect(result.current.data).toBeDefined()
//   // expectTypeOf(first).toEqualTypeOf<IAlbum>
//   expectTypeOf(all).toEqualTypeOf<IAlbum[]>
// })

// nock('http://myapi.com')
//       .get('/albums/1')
//       .reply(200, {
//         id: 1,
//         title: 'Testi 1',
//         slug: 'testi-1',
//         year: 1234,
//         content: '',
//         status: 1,
//         pictures: [],
//       }, {
//         'access-control-allow-origin': '*',
//         'Content-type': 'application/json'
//       })