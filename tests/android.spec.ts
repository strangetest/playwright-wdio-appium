import { expect, contactsBaseTest as test } from '../core/base-tests/contactsBaseTest';

test.describe('run webdriver-io with playwright test', async () => {

    test('should navigate to contacts page', async ({ driver, contactsPage }) => {
        const allowButton = await contactsPage.getAllowButton();
        expect(allowButton).toBeTruthy();
        await contactsPage.tapAllowButton();
        await driver.pause(2 * 1000);
    });

});
