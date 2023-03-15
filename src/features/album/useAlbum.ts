import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'

import {
  // GetAllFn,
  getAll,
  getBySlug,
  getOne,
  // createOne,
  // deleteOne,
  // updateOne
} from '@/services/apiService'
import { IAlbum, INewAlbum } from '@/types'
import { AxiosResponse } from 'axios'
import { apiClient } from '@/http-common'

// interface IUpdateProps{
//   id: number;
//   newRecord: INewAlbum;
// }
// ####################### api calls ########################################
// const getAlbums = async(): Promise<IAlbum[]> => await getAll('albums')

// const getAlbum = async(id: number): Promise<IAlbum> => await getOne({id, url:'albums'})
// const createAlbum = async (newRecord: INewAlbum): Promise<unknown> => await createOne('albums', newRecord)
// const updateAlbum = async({id, newRecord}: IUpdateProps): 
// Promise<IAlbum> => await updateOne(id, 'albums', newRecord)

// const deleteAlbum =async (id:number): Promise<unknown> => await deleteOne({id, url:'albums'})

// const getAlbums = async (): Promise<IAlbum[]> => {
//   const { data } = await apiClient.get('/albums')
//   return data
// }
// let getAlbums: GetAllFn<IAlbum> = getAll('albums')
// const all = getAlbums  getAll<IAlbum>('albums')
// const getAlbums = await getAll('albums')
// ####################### query hooks ########################################
export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({ queryKey: ['albums'], 
    queryFn: async () => await getAll<IAlbum>('albums')
  })
}

export function useAlbum(id:number): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', id],
    queryFn: async () => await getOne<IAlbum>({id, url:'albums'})
  })
}

export function useAlbumBySlug(slug:string): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', slug],
    queryFn: async () => await getBySlug<IAlbum>({slug, url:'album'})
  })
}

// ####################### mutations ########################################
interface NewProps{
  newRecord: INewAlbum;
}
export function useCreateAlbum(): 
UseMutationResult<AxiosResponse<unknown, unknown>, unknown, NewProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    ({ newRecord }: NewProps) => apiClient.post('albums', newRecord),
    {
      onSuccess: () => {
        useClient.invalidateQueries('albums')
      },
      onError: () => {
        console.log('- Use delete error')
      },
    },
  )
}

interface UpdateProps{
  id: number;
  newRecord: INewAlbum;
}
export function useUpdateAlbum():
UseMutationResult<AxiosResponse<unknown, unknown>, unknown, UpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    ({ id, newRecord }: UpdateProps) => apiClient.put(`/albums/${id}`, newRecord),
    {
      onSuccess: () => {
        useClient.invalidateQueries('albums')
      },
      onError: () => {
        console.log('- Use delete error')
      },
    },
  )
}

interface Props{
  id: number;
}
export function useDeleteAlbum():
UseMutationResult<AxiosResponse<unknown, unknown>, unknown, Props, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    ({ id }: Props) => apiClient.delete(`/albums/${id}`),
    {
      onSuccess: () => {
        console.log('- Use delete success')
        useClient.invalidateQueries('albums')
      },
      onError: () => {
        console.log('- Use delete error')
      },
    }
  )
}
  
// ##################################################
// export function useAlbumsData(): IAlbum[] {
//   const albumsQuery = useQuery('albums', getAlbums)
    
//   if (albumsQuery.isError) {
//     throw new Error('Error fetching data.')
//   }
    
//   if (albumsQuery.isSuccess) {
//     return albumsQuery.data
//   }
//   const emptyData = new Array<IAlbum>()
//   return emptyData
// }

// export function useCreateAlbum(): 
// UseMutationResult<unknown, unknown, INewAlbum, unknown> {
//   const useClient = useQueryClient()
//   return useMutation(createAlbum,
//     {
//       onSuccess: () => {
//         useClient.invalidateQueries('albums')
//       },
//       onError: () => {
//         console.log('- Use delete error')
//       },
//     },
//   )
// }

// export function useUpdateAlbum():
// UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
//   const useClient = useQueryClient()
//   return useMutation(
//     updateAlbum,
//     {
//       onSuccess: () => {
//         useClient.invalidateQueries('albums')
//       },
//       onError: () => {
//         console.log('- Use delete error')
//       },
//     },
//   )
// }

// export function useDeleteAlbum():
// UseMutationResult<unknown, unknown, number, unknown> {
//   const useClient = useQueryClient()
//   return useMutation(
//     deleteAlbum,
//     {
//       onSuccess: () => {
//         console.log('- Use delete success')
//         useClient.invalidateQueries('albums')
//       },
//       onError: () => {
//         console.log('- Use delete error')
//       },
//     }
//   )
// }