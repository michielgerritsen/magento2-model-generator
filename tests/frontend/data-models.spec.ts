import { test, expect } from '@playwright/test';
import {disableDataModels, enableDataModels, setValidData} from "@test/functions";

test.describe('Test that we get the right output when using the data models options', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should give an option to use data models or not', async ({ page }) => {
    await expect(page.locator('[aria-labelledby=module-details]')).toContainText('Use data models');
  });

  test('selecting the option should persist between refreshes', async ({ page }) => {
    const checkbox = page.locator('[aria-labelledby=module-details] [name="includeDataModels"]');
    await checkbox.check();
    await page.reload();
    await expect(checkbox).toBeChecked();
  });

  test('should not include the data model', async ({ page }) => {
    await setValidData(page);
    await disableDataModels(page);
    await expect(page.locator('.is-dir-model .is-dir-data .is-file-blog-php')).not.toBeVisible();
  });

  test('generates a class with the right contents when data models are enabled', async ({ page }) => {
    await setValidData(page);
    await enableDataModels(page);
    await page.locator('.is-file-blog-php').first().locator('a').click();
    await expect(page.locator('[aria-labelledby="modal-title"]')).toContainText('public function getDataModel()');
  });
});

