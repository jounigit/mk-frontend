import { getAll } from '@/services/apiService'
import { ICurrent } from '@/types'
import { UseSuspenseQueryResult, useSuspenseQuery } from '@tanstack/react-query'

export function useSuspenseCurrents():
UseSuspenseQueryResult<ICurrent[], unknown> {
  return useSuspenseQuery({
    queryKey: ['currents'],
    queryFn:async () => await getAll<ICurrent>('currents')
  })
}
