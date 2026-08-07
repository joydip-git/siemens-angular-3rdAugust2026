import { test, expect } from '@playwright/test';

//PlaywrightTestArgs & PlaywrightTestOptions & PlaywrightWorkerArgs & PlaywrightWorkerOptions
test("start page displaying welcome to playwright in h2 element",
  async ({ page }) => {
    await page.goto('http://localhost:4200/start')
    const locator = page.getByTestId('mainHeader')
    const actual = await locator.textContent()
    expect(actual).toMatch(/welcome to playwright/)
    await expect(page).toHaveTitle(/SampleTestApp/);
  }
)

/*
test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
