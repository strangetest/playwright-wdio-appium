import { expect, test as base } from '@playwright/test';
import { Browser, remote, RemoteOptions } from 'webdriverio';
import { ContactsPage } from '../pages/ContactsPage';
import { ProjectCapabilities } from '../config/ProjectCapabilities';


type Fixtures = {
    driver: Browser<'async'>;
    contactsPage: ContactsPage;
}

const test = base.extend<Fixtures>({
    driver: async ({}, use) => {
        const remoteOptions: RemoteOptions = ProjectCapabilities
            .androidCapabilities(
                'com.android.contacts',
                'com.android.contacts.activities.PeopleActivity', 
                { device: 'Pixel4'}
            );
        const driver = await remote(remoteOptions);
        await use(driver);
        await driver.deleteSession();
    },
    contactsPage: async ({ driver }, use) => {
        const contactsPage = new ContactsPage(driver, 'ANDROID');
        await use(contactsPage);
    },
});

export { expect, test as contactsBaseTest };
