import { RemoteOptions } from "webdriverio";

class ProjectCapabilities {
    private static webDriverPath: string = '/wd/hub';
    private static webDriverPort: number = 4723;
    
    static androidCapabilities(appPackage, appActivity, device, additionalCaps?: object): RemoteOptions {
        const desiredCapabilities = {
            platformName: "Android",
            deviceName: device.name,
            appPackage: appPackage,
            appActivity: appActivity,
            automationName: "UiAutomator2",
            ...additionalCaps
        };
        return {
            path: this.webDriverPath,
            port: this.webDriverPort,
            capabilities: desiredCapabilities
        }
    }
    static iosCapabilities(appPackage, appActivity, device, additionalCaps?: object): RemoteOptions {
        const desiredCapabilities = {
            platformName: "iOS",
            deviceName: device.name,
            bundleId: "",
            appPackage: appPackage,
            automationName: "XCUITest",
            ...additionalCaps
        };
        return {
            path: this.webDriverPath,
            port: this.webDriverPort,
            capabilities: desiredCapabilities
        }
    }
}
export { ProjectCapabilities };
