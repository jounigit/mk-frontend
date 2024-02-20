import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      features: `${path.resolve(__dirname, './src/features/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      public: `${path.resolve(__dirname, './public/')}`,
      pages: path.resolve(__dirname, './src/pages'),
      styles: path.resolve(__dirname, './src/styles'),
      types: `${path.resolve(__dirname, './src/@types')}`,
      assets: path.resolve(__dirname, './src/assets'),
      album: `${path.resolve(__dirname, './src/features/album')}`,
      albumpictures:
      `${path.resolve(__dirname, './src/features/albumpictures')}`,
      article: `${path.resolve(__dirname, './src/features/article')}`,
      cv: `${path.resolve(__dirname, './src/features/cv')}`,
      picture: `${path.resolve(__dirname, './src/features/picture')}`,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'html']
    }
  },
})