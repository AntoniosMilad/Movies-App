This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash

# firstly use the commands below to get the correct nvm required 
1-   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
2-   export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
3-   nvm use 18 

# then use yarn to install node modules
yarn 

yarn start
```

## Step 2: Start your Application

### For Android

```bash
#using Yarn
yarn android
#if there's any nullable issue use  
npx jetify
```

### For iOS

```bash
# using yarn 
yarn start

# then 
run the app from the xcode 
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: App structure

we have 
1- src that contain all app components and screens 
2- app.js that read stacks from navigation folder 

src folder contain
3- navigation stacks folder - that contain all app stacks and main file for bottom tab navigator 
4- there is assets folder for animation and svg and images
5-there's a common folder for dummy and dynamic compoennts 
6- constant for any constatnts required
7-Hooks for any global hooks
8-i18n for handling langs
9- redux each screen should have a redux file with it's name that contain action , constants and it's reducers 
to divide things depend on the sepration of components
10- screens include all screen 
and each screen folder contain screen itself , style and hook for fetching data
11- theme folder that conatin a global theme used in app 
12- utils for any functions we can use it globaly all over the app 


it's a basic structure not all folder and files used ,I just tried to build a simple structure to define the flow of data 
and left some examples for navigation and bottom tabs navigations and how switch between data the same there's a example for redux too using redux thunk.





