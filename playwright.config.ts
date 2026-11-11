import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 0,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on',
    screenshot: 'on',
  },

  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.ts/,
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
  ],
});