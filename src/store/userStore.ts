import { IUserServer } from '@/types'
import { create } from 'zustand'

interface IUserStore {
    user: IUserServer | null
    updateUser: (newUser: IUserServer) => void
    deleteUser: () => void
}


export const useUserStore = create<IUserStore>( (set) => ({
  user: null,
  updateUser: (newUser: IUserServer) => set({ user: newUser }),
  deleteUser: () => set({ user: null })
}))

export const UserStore = (): IUserServer | null =>
  useUserStore(state => state.user)
