import { describe, expect, } from '@jest/globals'
import { useDeleteCv } from './useCv'

describe('useDeleteCv', () => {
  it('should call the deleteCv mutation', () => {
    const mockFn = jest.fn()

    const mockResult = { data: { deleteCv: { success: true } } }

    const response = useDeleteCv()
    expect(mockResult).toEqual(response)
    expect(mockFn).toHaveBeenCalled()
  })

  //   it('should invalidate queries on success', () => {
  //     const mockFn = jest.fn()
  //     const mockResult = { data: { deleteCv: { success: true } } }
  //     const useClient = jest.fn()
  //     useDeleteCv(mockFn, mockResult, useClient)
  //     expect(useClient).toHaveBeenCalledWith('invalidateQueries')
  //   })

//   it('should log an error on failure', () => {
//     const mockFn = jest.fn()
//     const mockResult = { data: { deleteCv: { success: false } } }
//     const consoleLog = jest.spyOn(console, 'log')
//     useDeleteCv(mockFn, mockResult)
//     expect(consoleLog).toHaveBeenCalledWith('- Use delete error')
//   })
})