import type { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    trace: 'on',
  },
  reporter: [
    ['html'],
    ['list'],
    ['json', {  outputFile: 'test-results.json' }]
  ],
};
export default config;
