import {
  useMutation,
  UseMutationResult,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from 'react-query'
import {
  getAll,
  getOne,
  // createOne,
  deleteOne,
  updateOne
} from '@/services/apiService'
import { IAlbum, INewAlbum } from '@/types'
import apiClient from '../http-common'
import { AxiosResponse } from 'axios'

interface IUpdateProps{
  id: number;
  newRecord: INewAlbum;
}
// ####################### api calls ########################################
const getAlbums = async(): Promise<IAlbum[]> => await getAll('albums')
const getAlbum = async(id: number): Promise<IAlbum> => await getOne({id, url:'albums'})
// const createAlbum = async (newRecord: INewAlbum): Promise<unknown> => await createOne('albums', newRecord)
const updateAlbum = async({id, newRecord}: IUpdateProps): Promise<IAlbum> => await updateOne(id, 'albums', newRecord)
const deleteAlbum =async (id:number): Promise<unknown> => await deleteOne({id, url:'albums'})

// ####################### query hooks ########################################
export function useAlbums(): UseQueryResult<IAlbum[], unknown> {
  return useQuery({ queryKey: ['albums'], queryFn: getAlbums })
}

export function useAlbum(id:number): UseQueryResult<IAlbum, unknown> {
  return useQuery({
    queryKey: ['albums', id],
    queryFn: () => getAlbum(id)
  })
}

// ####################### mutations ########################################
interface IProps{
  newRecord: INewAlbum;
}
export function useCreateAlbum(): 
UseMutationResult<AxiosResponse<unknown, unknown>, unknown, IProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    ({ newRecord }: IProps) => apiClient.post('albums', newRecord),
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


export function useUpdateAlbum():
UseMutationResult<unknown, unknown, IUpdateProps, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    updateAlbum,
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

export function useDeleteAlbum():
UseMutationResult<unknown, unknown, number, unknown> {
  const useClient = useQueryClient()
  return useMutation(
    deleteAlbum,
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
export function useAlbumsData(): IAlbum[] {
  const albumsQuery = useQuery('albums', getAlbums)
    
  if (albumsQuery.isError) {
    throw new Error('Error fetching data.')
  }
    
  if (albumsQuery.isSuccess) {
    return albumsQuery.data
  }
  const emptyData = new Array<IAlbum>()
  return emptyData
}

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