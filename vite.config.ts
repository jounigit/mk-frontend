import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
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
    },
  },
})


// resolve: {
//   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
// },