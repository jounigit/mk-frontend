/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import macrosPlugin from 'vite-plugin-babel-macros'

export default defineConfig({
  plugins: [
    react(),
    macrosPlugin(),
  ],
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
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // }
})


// resolve: {
//   alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
// },