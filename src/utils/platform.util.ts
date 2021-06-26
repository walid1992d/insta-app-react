declare var cordova: any;

export class PlatformUtility {
    private userAgent = navigator.userAgent.toLowerCase();

    private get isDesktopAgent() {
        return !this.isIOSAgent && ! this.isAndroidAgent;

    }

    private get isIOSAgent() {
        return this.userAgent.includes("ipad") || this.userAgent.includes("iphone") || this.userAgent.includes("ipod");
    }
    private get isAndroidAgent() {
        return this.userAgent.includes("android")

    }
    private get isMobileAgent() {
        return this.isIOSAgent || this.isAndroidAgent;
    }
    private get isCorova() {
        return window.hasOwnProperty("cordova") || typeof (cordova) == "object" || !!(window as any).cordova
    }
    private get isElectron() {
        return this.userAgent.includes("electron")

    }


    public get isBrowser() {

        return this.isDesktopBrowser || this.isMobileBrowser
    }
    public get isDesktopBrowser() {

        return  this.isDesktopAgent && !this.isDesktopDevice;
    }
    public get isMobileBrowser() {

        return this.isMobileAgent && !this.isMobileDevice
    }
    public get isIOSBrowser() {

        return this.isIOSAgent && this.isMobileBrowser
    }
    public get isAndroidBrowser() {

        return this.isAndroidAgent && this.isMobileBrowser
    }

    public get isMobileDevice() {

        return  this.isMobileAgent && this.isCorova
    }
    public get isIOSDevice() {

        return this.isIOSAgent && this.isMobileDevice;
    }
    public get isAndroidDevice() {

        return this.isAndroidAgent && this.isMobileDevice;
    }
    public get isDesktopDevice() {
        return this.isElectron
    }

}