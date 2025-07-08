import { test, expect } from '@playwright/test';
import {addField, enableAdminGrid, enableSearch, openFileByPath, setValidData} from "~/tests/functions/general";


test.describe('Check that the generated output files are correct', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await setValidData(page);
  });

  test('Has a SearchResultsInterface implementation', async ({ page }) => {
    await openFileByPath(page, 'Model/BlogSearchResults.php');
    await expect(page.locator('.code-contents')).toContainText('implements BlogSearchResultsInterface');
    await expect(page.locator('.code-contents')).toContainText('extends SearchResults');
  });

  test('Does not include fulltext when no text fields are added', async ({ page }) => {
    await enableAdminGrid(page);
    await enableSearch(page);
    await addField(page, 'title', 'Integer');
    await openFileByPath(page, 'etc/db_schema.xml');
    await expect(page.locator('.code-contents')).not.toContainText('indexType="fulltext"');
  });

  test('Does include fulltext when a text field is added', async ({ page }) => {
    await enableAdminGrid(page);
    await enableSearch(page);
    await addField(page, 'title', 'Text');
    await openFileByPath(page, 'etc/db_schema.xml');
    await expect(page.locator('.code-contents')).toContainText('indexType="fulltext"');
  });
});

