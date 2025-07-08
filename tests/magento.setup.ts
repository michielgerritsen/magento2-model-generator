import { test as setup, expect } from '@playwright/test';
import path from 'path';
import {fileURLToPath} from "url";
import * as fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFile = path.join(__dirname, './.auth/magento.json');

setup('authenticate', async ({ page }) => {
    if (fs.existsSync(authFile)) {
        console.log(`Authentication file already exists at ${authFile}. Skipping authentication.`);
        return;
    }

    await page.goto('/admin/');

    const username = 'exampleuser';
    const password = 'examplepassword123';

    await page.goto('/admin');
    await page.getByLabel('Username').fill(username);
    await page.getByLabel('Password').fill(password);
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.waitForURL('**/admin/dashboard/**');

    const spinners = page.locator('.admin__form-loading-mask > .spinner');
    const count = await spinners.count();

    for (let i = 0; i < count; i++) {
        await expect(spinners.nth(i)).toBeHidden();
    }

    await expect(page.getByRole('link', { name: 'Most Viewed Products' })).toBeVisible();

    // Check if .admin-usage-notification exists
    const isVisible = await page.locator('.admin-usage-notification').isVisible();
    if (isVisible) {
        await page.locator('.admin-usage-notification').getByText('Don\'t Allow').click();
        await expect(page.locator('.admin-usage-notification')).toBeHidden();
    }

    await page.context().storageState({ path: authFile });
});