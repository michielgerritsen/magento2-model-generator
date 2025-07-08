import {expect } from "@playwright/test";
import type {Page} from "@playwright/test";

export async function setValidData(page: Page) {
    await page.getByText('Vendor name', { exact: true }).fill('Acme');
    await page.getByText('Module name', { exact: true }).fill('FooBar');
    await page.getByText('What\'s the classname for your model?').fill('Blog');
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