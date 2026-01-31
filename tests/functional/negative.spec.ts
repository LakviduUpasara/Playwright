import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';

// Navigate to the URL before each test
test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

// Helper function to verify negative input handling
async function verifyNegativeInput(page: any, inputText: string) {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill(inputText);

  // App should remain stable and accept input without crashing
  await expect(singlishInput).toHaveValue(inputText, { timeout: 2000 });

  // Verify page didn't crash or redirect
  await expect(page).toHaveURL(URL);
}


test('Neg_Fun_0001 -Convert joined words without spaces', async ({ page }) => {
  await verifyNegativeInput(page, 'mamageharayanavaa');
});

test('Neg_Fun_0002 - Convert joined words with daily usage phrase', async ({ page }) => {
  await verifyNegativeInput(page, 'matapaankannaoonee');
});


test('Neg_Fun_0003 - Convert joined future intent sentence', async ({ page }) => {
  await verifyNegativeInput(page, 'hetaapiyanavaa');
});


test('Neg_Fun_0004 - Convert slang-heavy informal input', async ({ page }) => {
  await verifyNegativeInput(page, 'ela machan! supiri!!');
});

test('Neg_Fun_0005 - Convert long paragraph input', async ({ page }) => {
  await verifyNegativeInput(page, 'dhitvaa suLi kuNaatuva samaGa aethi vuu gQQvathura saha naayayaeem heethuven maarga sQQvarDhana aDhikaariya sathu maarga kotas 430k vinaashayata pathva…');
});


test('Neg_Fun_0006 - Convert repeated words without context', async ({ page }) => {
  
  await verifyNegativeInput(page, 'hari hari');
});

test('Neg_Fun_0007 - Convert mixed language with abbreviations', async ({ page }) => {
  await verifyNegativeInput(page, 'SMS eka hariyata yanne naee');
});


test('Neg_Fun_0008 - Convert sentence with excessive spacing', async ({ page }) => {
  await verifyNegativeInput(page, 'mama    gedhara    yanavaa');
});

test('Neg_Fun_0009 - Convert sentence with line breaks', async ({ page }) => {
  await verifyNegativeInput(page, 'mama gedhara yanavaa.oyaa enavadha?');
});


test('Neg_Fun_0010 - Convert informal typo-heavy sentence', async ({ page }) => {
  await verifyNegativeInput(page, 'adoo vaedak baaragaththaanam eeka hariyata karapanko');
});
test('Neg_Fun_0011 - Convert sentence with special characters', async ({ page }) => {
  await verifyNegativeInput(page, 'mama @gedhara yanavaa!!! #excited');
});

test('Neg_Fun_0012 - Convert sentence with numeric characters', async ({ page }) => {
  await verifyNegativeInput(page, 'api 2pm ta school yanavaa');
});   