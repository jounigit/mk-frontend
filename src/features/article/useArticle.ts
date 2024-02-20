import { getAll } from '@/services/apiService'
import { IArticle } from '@/types'
import {
  UseQueryResult, UseSuspenseQueryResult, useQuery, useSuspenseQuery
} from '@tanstack/react-query'

// ####################### query hooks ########################################
export function useArticles(): UseQueryResult<IArticle[], unknown> {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => await getAll<IArticle>('articles'),
    throwOnError: true
  })
}

export function useSuspenseArticles():
UseSuspenseQueryResult<IArticle[], unknown> {
  return useSuspenseQuery({
    queryKey: ['articles'],
    queryFn: async () => await getAll<IArticle>('articles')
  })
}