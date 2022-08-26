const { test, expect } = require ('@playwright/test')
const { injectAxe, getViolations } = require('axe-playwright')
const { parseViolations } = require('../utils/violationsHelper')

test('Playwright dev accessibility getViolations', async ({ page }, testInfo) => {

  testInfo.annotations.push({ type: 'test_key', description: 'XT-552' });
  testInfo.annotations.push({ type: 'test_summary', description: 'Accessibility - getViolations' });
  testInfo.annotations.push({ type: 'requirements', description: 'XT-507' });
  testInfo.annotations.push({ type: 'test_description', description: 'WCAG AA' });
  await page.goto('https://playwright.dev/');

  await injectAxe(page);
  
  const violations = await getViolations(page, null, {
    runOnly: {
      type: 'tag',
      values: ['wcag2a'],
    },
    detailedReport: true,
    detailedReportOptions: {html: true}
  })

  var results=parseViolations(violations);
  testInfo.annotations.push({ type: 'testrun_comment', description: results });

  expect(violations.length).toBe(0);
});
