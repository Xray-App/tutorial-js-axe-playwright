const { test, expect } = require ('@playwright/test');
const { injectAxe, checkA11y } = require ('axe-playwright')


test('Playwright dev accessibility', async ({ page }, testInfo) => {

  testInfo.annotations.push({ type: 'test_key', description: 'XT-506' });
  testInfo.annotations.push({ type: 'test_summary', description: 'Accessibility Validations' });
  testInfo.annotations.push({ type: 'requirements', description: 'XT-507' });
  testInfo.annotations.push({ type: 'test_description', description: 'WCAG AA' });
  await page.goto('https://playwright.dev/');

  await injectAxe(page);
  
  await checkA11y(page, null, {
    axeOptions: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a'],
      },
      detailedReport: true,
      detailedReportOptions: {html: true}
    },
  })
});
