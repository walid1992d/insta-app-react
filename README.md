# insta-app-react
Boilerplate allows you to write react app and package it out of the box as  web,mobile and desktop apps, it's boiler plate built on top of Create React App using React 16 and Typescript 3 , it integrates Cordova for the mobile, Ionic 4 for mobile friendly web components and  Electron 5 for desktop.

# Overview
The name stands for “Instant App using React” so the purpose of it is to allow the developers to build apps using react in the easiest way, and I when says apps I mean web, mobile and desktop apps, so the developer can write the normal react code he used to do for web and  build  it as IOS/Android App and OSX/Windows/Linux app without the need to learn new frameworks.
 
### Which developers will benefit from this?
Developers who needs to build MVP or small to medium apps for mobile or desktop with no requirement to do much hardware interaction, for example if you are building an app that’s all about requesting APIs and rendering data with no need to do background threading on mobile or complicated hardware interaction on desktop, this boilerplate allows you to build that with the react skills you know with no need to go for react-native,Java or Swift for mobile, or going to C# NET or Swift to develop desktop apps.
Developers who needs to build MVP or small to medium app that needs to run on more than one platform , so instead of writing code for web , one for mobile and one for desktop it’s the single source code that deploys to all these platforms, and also the app shouldn’t have requirements that are beyond webview cordova and electron functionalities. In the case of multi platforms app the boilerplate also  has a utility to detect the platform ,so you can do a piece of code that only run on mobile and another one that run only desktop, you can find more details about this in the Readme file.
 
### Business Advantages
Almost everyone I know in the garage uses react for front-end, so utilizing their current skills to build mobile and desktop apps allows them to build these apps in shorter time instead of learning new frameworks (as soon as the requirements don’t need the power of native frameworks)
In case of MVP/app that needs to run on multi platforms it will decrease the resources cost as no need to put dedicated resources for each platform or let the resources working on multi platforms code so they take longer time which means more money, its one code shipped to all platforms
 
### Technical Stack Summary
I started from Create React App with typescript, integrated cordova for mobile build and electron for desktop builds, the challenging part in mobile build that uses web view is the UI performance like transitions,scrolling…etc, so I integrated Ionic 4 web components as they are out of the box optimized for mobile web view , also they can switch their look between IOS/Android themes according to the platform they are in and this is very nice feature.

# Getting Started

To run the app follow these instructions:

- Clone the repository 

    ```
    git clone https://github.ibm.com/Walid-Abou-Ali/intsa-app-react 
    ```

- Install the depenecies

    ```
    npm install
    ```

-  install cordova,electron globally, sometimes you need to use their cli during development

    ```
    npm install -g cordova
    npm install -g electron
    ```

## Serving the app in web mode
- the app is configured to run by default in web, just run 
    ```
    npm start
    ```
it will start on `http://localhost:3000/`

## Serving the app on Android Device
- Go to your Android device settings, and open `About Phone`
- Click 7 times on the `Build Number' to enable Developer Options in Android
-  Search in your settings for Developer Options and enable it
- Under Developer Option enable `USB Debugging`
- connect the mobile device through USB cable
- make sure the device is `File Transfer` mode when you are asked to select
- run the android serving script
    ```
    npm run start:android
    ```


## Serving the app on IOS Device
Serving the app on IOS is not tesed yet, you can try it by yourself using the script

```
npm run start:ios
```
and feel free to update this Readme by the detailed steps. 
You can also go to the `Building the App for IOS` section, follow the steps, open the built project on Xcode then run it on device

## Serving the app on Desktop
- run the script
    ```
    npm run start:desktop
    ```
# Folder Structure
| Foldername   | Description                                                                                                                                  |
|--------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| electron-scripts          | has electron related configs and scripts                                                                                         |
| plugins       | contains cordova plugins                                                                                                       |
| public   | react app public folder, has the index.html and service worker configs                                                                                                               |
| resources | contains the cordova graphics resources for icons and splah screens                                                                                                   |
| src        | contains react web app files and folders                                                                                                                |
| www    | contains the final build of the app                                                       |


# Create react App
the boilerplate is built on top of create react app as my focus was on integrating the mobile and desktop infrastructure, I am not big a fan of create react app is it has many limitation unless you eject it which is headache to maintain, I believe we have to create a standard react boilerplate for the Could Garage then I can integrate all my changes with it to have the mobile and desktop builds
# Service Worker
The web version comes with service worker enabled, in case you want to disable it, go to `src/index.tsx` and find the line

```
<serviceWorker.register();
```
and replace it with

```
<serviceWorker.unregister();
```

to edit the service worker config like App name,icon...etc simply edit the `public/manifest.json`


# Detect Device Platform
THe boiler comes out of the box with utility `PlatfromUtility`  that detects the platform that the app is running in, its usefull of you want to write a code does specific thing in a spicific platform, it has these getter functions


| Getter Function  | Description                                                                         |
|------------------|-------------------------------------------------------------------------------------|
| isBrowser        | returns true if the app is running as web app in browser on any device              |
| isDesktopBrowser | returns true if the app is running as web app in browser on a desktop device        |
| isMobileBrowser  | returns true if the app is running as web app in browser on a mobile device         |
| isIOSBrowser     | returns true if the app is running as web app in browser on a mobile IOS device     |
| isAndroidBrowser | returns true if the app is running as web app in browser on a mobile Android device |
| isMobileDevice   | returns true if the app is running as mobile app on IOS/Android Device              |
| isIOSDevice      | returns true if the app is running as mobile app on IOS Device                      |
| isAndroidDevice  | returns true if the app is running as mobile app on Android Device                  |
| isDesktopDevice  | returns true if the app is running as desktop app on a desktop device               |

you can find sample implementation in  `src/pages/playground`



# Unit Testing
the boiler plate uses Jest and Enyzme for unit testing  , you can find smaple snapshot in `src/components/test/Test.spec.tsx.

to run the unit tests use the command
```
npm test
```
and it accepts all flags and params of Jest cli


# Enviroments
As this boiler plate is built on top of Create React App, it comes only with two environemnts, the development when you  do `npm:start` and the production mode when you do a build, you can know more about it by searching in create reacte App Documentation

# Setting the App Info
to set the app info like name, icon, description , version follow the steps of each platform

## Setting the App Info for Web App

You just need to the set the service worker config  by editing the `public/manifest.json`

## Setting the App Info for Mobile App

All mobile app info are in `config.xml`, you set there the app name, package name, version, description, but to edit the icon/splash screen follow these steps:

- replace `resources/icon.png` and `resources/spash.png` with your icon and spash files, make sure to keep the same name, format and images dimentions as the original files.


- run the command 
  ```
  resources:generate:mobile"
  ```
it will take your icon/splash and generate verion of them for each device type and configure them with the project.

## Setting the App Info for Desktop App
 - to set the app name/info go to `electron-scripts/app-info.js`, and set the desired values
 - to set the icon, replace these icon files with your own icons and make sure to keep same name and format
 ```
 resources/icon.icns // for OSX
 resources/icon.ico // for Windows
 resources/icon.png // for Linux
 ```


# Building the App
## Building the App for Web
run the script
```
npm run build
```



 ## Building the App for IOS/Android
run the script according to the desired platform

```
npm run build:ios
npm run build:android
```

 the output android  project will be under `platforms/android` folder and you can find the unsigned APK under `platforms/android/app/build/outputs/apk`. To continue further steps on the android build like signing the APK and publishing to the store, open the android build in Android Studio and do all the steps there like any native Android project

 For IOS the output Xcode project will be under `platforms/ios`, open it in Xcode and you can run it on device or publish it to the store from there.



 ## Building the App for OSX/Windows/Linux
run the script according to the desired OS and ENV

```
npm run build:osx
npm run build:windows
npm run build:linux
 ```




the output builds will be under `platforms` with app name and suffix for every OS, for example 
```
IBM Garage Angular-darwin-x64
IBM Garage Angular-linux-x64
IBM Garage Angular-win32-ia32
```
Please note that only the OSX build is tested by me till now and it works fine. for the windows and linux build didn't test them yet but expecting no problems in them




