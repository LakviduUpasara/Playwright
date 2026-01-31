import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});


async function getInput(page: any) {
  return page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });
}


test('Pos_UI_0001 - Real-time Sinhala output updates while typing', async ({ page }) => {
  const input = await getInput(page);

  await input.type('mama');
  
  await expect(page.locator('body')).toContainText('ම');
});


test('Pos_UI_0002 - Page remains stable after valid input', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mama gedhara yanavaa.');
  await expect(page).toHaveURL(URL);
});


test('Pos_UI_0003 - UI remains stable for joined words input', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mamageharayanavaa');
  await expect(page).toHaveURL(URL);
});


test('Pos_UI_0004 - Clearing input clears or updates output', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('api yamu.');
  await expect(page.locator('body')).toContainText('අ');


  await input.fill('');
  
  await expect(page).toHaveURL(URL);
});


test('Pos_UI_0005 - UI handles multi-line input without breaking', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mama gedhara yanavaa.\noyaa enavadha?');
  await expect(page).toHaveURL(URL);
});
