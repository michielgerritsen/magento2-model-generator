import {test} from "@playwright/test";
import {
    addField,
    addToAdminMenu, disableDataModels,
    downloadZip,
    enableAdminGrid,
    enableDataModels,
    enableModuleRegistration,
    setValidData
} from "~/tests/functions";

test('Download the ZIP file with Data Models enabled', async ({ page }) => {
    await page.goto('/');

    await setValidData(page, 'MageTested', 'DataModels', 'Blog');
    await enableModuleRegistration(page);
    await enableDataModels(page);
    await enableAdminGrid(page);
    await addToAdminMenu(page);

    await addField(page, 'title', 'Varchar');
    await addField(page, 'description', 'Text');

    await downloadZip(page, 'MageTested_DataModels_Blog.zip');
});

test('Download the ZIP file without Data Models enabled', async ({ page }) => {
    await page.goto('/');

    await setValidData(page, 'MageTested', 'RegularModels', 'Blog');
    await enableModuleRegistration(page);
    await disableDataModels(page);
    await enableAdminGrid(page);
    await addToAdminMenu(page);

    await addField(page, 'title', 'Varchar');
    await addField(page, 'description', 'Text');

    await downloadZip(page, 'MageTested_RegularModels_Blog.zip');
});