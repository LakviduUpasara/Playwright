import { test, expect } from '@playwright/test';

const URL = 'https://www.swifttranslator.com/';


test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});


async function verifyTranslation(page: any, inputText: string) {
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.',
  });

  await singlishInput.fill(inputText);


  await expect(singlishInput).toHaveValue(inputText, { timeout: 2000 });

 
  await expect(page).toHaveURL(URL);
}


test('Pos_Fun_0001 - Convert a simple daily usage sentence ', async ({ page }) => {
  await verifyTranslation(page, 'mama gedhara yanavaa.');
});

test('Pos_Fun_0002 - Convert a short daily need expressione', async ({ page }) => {
  await verifyTranslation(page, 'mata bath oonee');
});

test('Pos_Fun_0003 -Convert a simple daily usage sentence', async ({ page }) => {
  await verifyTranslation(page, 'api paasal yanavaa.');
});

test('Pos_Fun_0004 - Convert a compound sentence with negation', async ({ page }) => {
  await verifyTranslation(page, 'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.');
});


test('Pos_Fun_0005 - Convert a compound activity planning sentence', async ({ page }) => {
  await verifyTranslation(
    page,
    'api kaeema kanna yanavaa saha passe chithrapatayakuth balanavaa.'
  );
});

test('Pos_Fun_0006 - Convert an informal agreement sentence', async ({
  page,
}) => {
  await verifyTranslation(page, 'oyaa hari, ehenam api yamu');
});

test('Pos_Fun_0007 - Simple, compound, and complex sentences', async ({ page }) => {
  await verifyTranslation(page, 'oya enavaanam mama balan innavaa.');
});


test('Pos_Fun_0008 - covert a Simple, compound, and complex sentences', async ({ page }) => {
  await verifyTranslation(page, 'vaessa unath api yanna epaeyi.');
});

test('Pos_Fun_0009 - Convert a cause-and-effect complex sentence', async ({ page }) => {
  await verifyTranslation(page, 'mama sunaQQgu vunee maarga thadhabadhaya nisaa.');
});


test('Pos_Fun_0010 - Convert a common greeting question', async ({
  page,
}) => {
  await verifyTranslation(page, 'oyaata kohomadha?');
});


test('Pos_Fun_0011 - Convert a future-intent question', async ({ page }) => {
  await verifyTranslation(page, 'oyaa kavadhdha enna hithan inne?');
});

test('Pos_Fun_0012 - Convert a functional clarification question', async ({ page }) => {
  await verifyTranslation(page, 'meeka hariyata vaeda karanavaadha?');
});

test('Pos_Fun_0013 - Convert a short imperative command', async ({ page }) => {
  await verifyTranslation(page, 'vahaama enna.');
});

test('Pos_Fun_0014 - Convert a directional command sentence', async ({ page }) => {
  await verifyTranslation(page, 'issarahata yanna.');
});


test('Pos_Fun_0015 - Convert a short request-style command', async ({ page }) => {
  await verifyTranslation(page, 'mata kiyanna.');
});

test('Pos_Fun_0016 - Convert a simple object request command', async ({ page }) => {
  await verifyTranslation(page, 'eeka dhenna');
});

test('Pos_Fun_0017 - Convert a simple positive action sentence', async ({ page }) => {
  await verifyTranslation(page, 'mama ehema karanavaa.');
});


test('Pos_Fun_0018 - Convert a simple future intent sentence', async ({ page }) => {
  await verifyTranslation(page, 'api heta enavaa.');
});

test('Pos_Fun_0019 - Convert a simple confirmation sentence', async ({ page }) => {
  await verifyTranslation(page, 'oyaa eeka hariyata kiyavalaa.');
});

test('Pos_Fun_0020 - Convert a negative daily usage sentence', async ({ page }) => {
  await verifyTranslation(page, 'mama ehema karannee naehae.');
});


test('Pos_Fun_0021 - Convert a common greeting expression', async ({ page }) => {
  await verifyTranslation(page, 'aayuboovan!');
});

test('Pos_Fun_0022 - Convert a polite request question', async ({ page }) => {
  await verifyTranslation(page, 'mata udhavvak karanna puLuvandha?');
});


test('Pos_Fun_0023 -Convert a positive response sentence', async ({ page }) => {
  await verifyTranslation(page, 'hari, mama karannam.');
});

test('Pos_Fun_0024 - Convert a highly polite request question', async ({ page }) => {
  await verifyTranslation(page, 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
});