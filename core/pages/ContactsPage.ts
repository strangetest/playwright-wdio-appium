import { BasePage } from "./BasePage"

class ContactsPage extends BasePage {
    readonly platform: string;
    readonly selectors: { [key: string]: string };
    readonly SELECTORS = {
        ANDROID: {
            ALLOW_BUTTON: 'id:com.android.permissioncontroller:id/permission_allow_button',
        },
        IOS: {
            ALLOW_BUTTON: '~Allow',
        }
    }
    constructor(driver, platform: string) {
        super(driver);
        this.platform = platform.toUpperCase();
        this.selectors = this.SELECTORS[this.platform]
    }
    async getAllowButton() {
        return this.find(this.selectors.ALLOW_BUTTON)
    }
    async tapAllowButton() {
        return this.tap(this.selectors.ALLOW_BUTTON)
    }
}
export { ContactsPage };
