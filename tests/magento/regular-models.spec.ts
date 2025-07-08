import {expect, test} from "@playwright/test";

test('Can add a new item', async ({ page }) => {
  await page.goto('/admin/');

  await page.locator('.admin__menu').getByRole('link', { name: 'Sales' }).click();

  await page.getByRole('link', {name: 'MageTested RegularModels Blog'}).click();

  await page.getByText('Add New Blog Item').click();

  await expect(page.locator('.admin__form-loading-mask')).toBeVisible();
  await expect(page.locator('.admin__form-loading-mask')).toBeHidden();

  await page.getByLabel('Title').fill('My First Blog Post');
  await page.getByLabel('Description').fill('This is the content of my first blog post.');

  await page.getByRole('button', {name: 'Save'}).click();

  await expect(page.locator('[data-ui-id="messages-message-success"]')).toContainText('You saved the item.');
});