import { test, expect } from '@playwright/test';
import {enableAdminGrid, enableModuleRegistration, setValidData} from "~/tests/functions";

test.describe('Test the input fields', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should show instructions when no input is given', async ({ page }) => {
    await expect(page.locator('[aria-labelledby=top-sidebar]')).toContainText(
      'Before you can download your module make sure you enter your'
    );
  });

  test('should show the generated files when entered the correct data', async ({ page }) => {
    await setValidData(page);
    await expect(page.locator('[aria-labelledby=top-sidebar]')).toContainText(
      'BlogRepositoryInterface.php'
    );
  });

  test('Should include the registration.php and module.xml when selected', async ({ page }) => {
    await setValidData(page);
    await enableModuleRegistration(page);
    await expect(page.locator('[aria-labelledby=top-sidebar]')).toContainText('registration.php');
    await expect(page.locator('[aria-labelledby=top-sidebar]')).toContainText('module.xml');
  });

  test('Should show the controllers when admingrid is enabled', async ({ page }) => {
    await setValidData(page);
    await enableAdminGrid(page);
    await expect(page.locator('[aria-labelledby=top-sidebar]')).toContainText('Controller');
  });
});

