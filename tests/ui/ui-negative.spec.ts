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

// Negative UI test Case 

test('Neg_UI_0001 - Empty input does not break UI', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('');
  await expect(page).toHaveURL(URL);
});


test('Neg_UI_0002 - Joined words do not freeze UI', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mamageharayanavaa');
  await expect(page).toHaveURL(URL);
});


test('Neg_UI_0003 - Slang input does not crash UI', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('ela machan! supiri!!');
  await expect(page).toHaveURL(URL);
});


test('Neg_UI_0004 - Long input keeps UI stable', async ({ page }) => {
  const input = await getInput(page);

  const longText = 'mama gedhara yanavaa '.repeat(30);
  await input.fill(longText);

  await expect(page).toHaveURL(URL);
});


test('Neg_UI_0005 - Excessive spaces handled by UI', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mama    gedhara    yanavaa');
  await expect(page).toHaveURL(URL);
});


test('Neg_UI_0006 - Multi-line input handled safely', async ({ page }) => {
  const input = await getInput(page);

  await input.fill('mama gedhara yanavaa.\noyaa enavadha?');
  await expect(page).toHaveURL(URL);
});
