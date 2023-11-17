import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryCache,
  // QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryFunctionContext
} from '@tanstack/react-query'
import { BrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import config from './data/config'
import { apiClient } from './http-common'
import App from './App'
import './i18n'
import toast from 'react-hot-toast'


const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const { data } = await apiClient.get(`${config.API_URL}${queryKey[0]}`)
  return data
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        toast.error(`Something went wrong: ${error.message}`)
      }
    },
  }),
  defaultOptions: {
    queries: {
      staleTime: 1000 * 20,
      queryFn: defaultQueryFn,
      suspense: true,
      // refetchOnWindowFocus: false,
      retry: 2
    },
  },
})

{/* <BrowserRouter basename={import.meta.env.BASE_URL}> */}

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
