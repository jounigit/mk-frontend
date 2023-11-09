import { getAll } from '@/services/apiService'
import { IArticle } from '@/types'
import { UseQueryResult, useQuery } from '@tanstack/react-query'

// ####################### query hooks ########################################
export function useArticles(): UseQueryResult<IArticle[], unknown> {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => await getAll<IArticle>('articles'),
    throwOnError: true
  })
}