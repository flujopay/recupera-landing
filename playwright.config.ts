import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: 'tests/e2e',
  timeout: 30_000,
  reporter: 'line',
  use: {
    baseURL: 'https://recupera.somossena.com',
    headless: true,
  },
})
