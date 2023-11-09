import { QueryErrorResetBoundary } from '@tanstack/react-query'
import React from 'react'
import { ErrorBoundary,
  //  FallbackProps 
} from 'react-error-boundary'
import { ErrorHandler, LoadingHandler } from '../handlers'

// 
export const QueryBoundaries = ({ children }
  : { children: React.ReactNode }) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary onReset={reset} FallbackComponent={ErrorHandler}>
        <React.Suspense fallback={<LoadingHandler />}>
          {children}
        </React.Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
)

// Spinner
// const LoadingView = () => <div>Loading...</div>

// Error + retry
// const ErrorView = ({ error, resetErrorBoundary }: FallbackProps) => {
//   return (
//     <div>
//       <div>{error.message}</div>
//       <button title="Retry" onClick={resetErrorBoundary} />
//     </div>
//   )
// }