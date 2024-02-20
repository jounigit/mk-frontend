import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      // apiTestUrl: 'https://marjakolu.fi/laravel-api-test/api'
    }
  },
})
