# Ethereum Wallet

This project is a Ethereum Wallet built on top of ReactNative.

## Table of Contents

* [Available Scripts](#available-scripts)
  * [npm start](#npm-start)
  * [npm test](#npm-test)
  * [npm run ios](#npm-run-ios)
  * [npm run android](#npm-run-android)
  * [npm run android-build](#npm-run-android-build)
  * [npm run android-bundle](#npm-run-android-bundle)
  * [npm run android-clean](#npm-run-android-clean)
* [Writing and Running Tests](#writing-and-running-tests)
* [License](#license)
* [Contribute](#contribute)

## Available Scripts

### `npm install`

Installs all dependencies and prepares the app to run.

### `npm start`

Runs Packager to provide your app in development mode.

#### `npm test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

#### `npm run ios`

Open your app in the iOS Simulator if you're on a Mac and have it installed. Depends on `npm start`.

#### `npm run android`

Open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). Depends on `npm start`.

#### `npm run android:build`

Build the Android app and generate the APK to install on the device.

#### `npm run android:bundle`

Bundles the ReactNative JavaScript code. Run it before running the build command to be able to run the test without depending on the development server.

#### `npm run android:generate-apk`

Bundle and build the Android app.

#### `npm run android:clean`

Clean the Android generated build files.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/tutorial-react-native.html).

## License

MIT


## Contribute

TODO