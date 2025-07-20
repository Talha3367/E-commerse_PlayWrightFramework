// playwright.config.js
const { devices } = require('@playwright/test');
const { sharePointUserData, AppConfig } = require('./config.js');

/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
  testDir: './tests',

  /* Maximum time one test can run for. */
  timeout: 100 * 1000,

  expect: {
    /* Maximum time expect() should wait for the condition to be met. */
    timeout: 10000,
  },

  /* Fail the build on CI if test.only is left in the source code */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Limit workers on CI to 1 to avoid overload, otherwise undefined to use default */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter settings: custom reporter, junit, and html on CI; html locally */
  reporter: process.env.CI
    ? [
        ['./Utils/yourReporter.js'],
        ['junit', { outputFile: 'results.xml' }],
        ['html', { open: 'never' }],
      ]
    : 'html',

  use: {
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',

    /* Capture video and screenshot only on test failure */
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

    /* Run headless in CI, headful locally */
    headless: process.env.CI ? true : false,

    /* HTTP credentials fallback */
    httpCredentials: {
      username: process.env.OUTLOOK_USERNAME || AppConfig.UserName,
      password: process.env.OUTLOOK_PASSWORD || AppConfig.Password,
    },
  },

  projects: [
    {
      name: 'chromium',
      use: {
        launchOptions: {
          slowMo: 1000,
          args: ['--auth-server-allowlist="_"'],
        },
        ...devices['Desktop Chrome'],
        viewport: { width: 1530, height: 722 },
      },
    },
    // Uncomment and configure other browsers if needed
    // {
    //   name: 'firefox',
    //   use: {
    //     launchOptions: { args: ['--start-maximized'], headless: false },
    //     ...devices['Desktop Firefox'],
    //   },
    // },
    // {
    //   name: 'webkit',
    //   use: {
    //     launchOptions: { args: ['--start-maximized'], headless: false },
    //     ...devices['Desktop Safari'],
    //   },
    // },
  ],
};

module.exports = config;