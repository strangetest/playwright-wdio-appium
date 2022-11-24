import { Browser, Element } from 'webdriverio';

class BasePage {
    readonly driver: Browser<'async'>;
    constructor(driver: Browser<'async'>) {
        this.driver = driver;
    }
    async find(selector: string, timeout: number = 30 * 1000) {
        const element: Element<'async'> = await this.driver.$(selector);
        await element.waitForExist({
            timeout,
        });
        return element;
    }
    async tap(selector: string, timeout: number = 30 * 1000) {
        const element: Element<'async'> = await this.find(selector, timeout);
        return element.click();
    }
}

export { BasePage };
