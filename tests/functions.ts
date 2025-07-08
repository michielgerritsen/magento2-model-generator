import type {Page} from "@playwright/test";
import {expect} from "@playwright/test";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function setValidData(page: Page, vendorName = 'Acme', moduleName = 'FooBar', className = 'Blog') {
    await page.getByText('Vendor name', { exact: true }).fill(vendorName);
    await page.getByText('Module name', { exact: true }).fill(moduleName);
    await page.getByText('What\'s the classname for your model?').fill(className);
}

export async function enableDataModels(page: Page) {
    await page.getByText('Use data models').check();
}

export async function disableDataModels(page: Page) {
    await page.getByText('Use data models').uncheck();
}

export async function enableAdminGrid(page: Page) {
    await page.locator('[aria-labelledby=module-details] [name="enabled"]').check();
}

export async function enableSearch(page: Page) {
    await page.locator('[aria-labelledby=module-details] [name="search"]').check();
}

export async function enableModuleRegistration(page: Page) {
    await page.locator('[name="includeModuleRegistration"]').check();
}

export async function addField(page: Page, fieldName: string, inputType: string) {
    await page.locator('[data-action="addRow"]').last().click();
    await page.locator('[name="fieldname"]').last().fill(fieldName);
    await page.locator('[name="input_type"]').last().selectOption(inputType);
}

export async function openFileByPath(page: Page, fileName: string) {
    let selector = '';
    const parts = fileName.split('/');
    parts.forEach((part) => {
        const filename = part.replace('.', '-');
        selector +=
            ' ' +
            (part.includes('.') ? `> .is-file-${filename} a` : `.is-dir-${part} > ul`);
    });
    selector = selector.toLowerCase();
    await page.locator(selector).click();
    await expect(page.locator('#modal-title')).toContainText(fileName);
}

export async function downloadZip(page: Page, fileName: string) {
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('[data-action="download"]').click(),
    ]);

    const zipPath = path.resolve(__dirname, 'tmp/' + (fileName || download.suggestedFilename()));
    console.log(`Saving zip to: ${zipPath}`);
    await download.saveAs(zipPath);
}

export async function addToAdminMenu(page: Page, parent = 'Sales') {
    await page.getByText('Add to admin menu').check();

    await page.locator('[data-action="selectMenuParent"]').selectOption(parent);
}