import { create } from 'zustand'

interface IToken {
    token: string | null
    updateToken: (newToken: string) => void
    deleteToken: () => void
}

export const useTokenStore = create<IToken>( (set) => ({
  token: null,
  updateToken: (newToken: string) => set({ token: newToken }),
  deleteToken: () => set({ token: null })
}))


export const UserTokenStore = (): string | null =>
  useTokenStore(state => state.token)
