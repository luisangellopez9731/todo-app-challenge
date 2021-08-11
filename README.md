# Todo App Challenge

## How to run

Install dependencies with **npm** or **yarn**.
```bash
npm install
```
```babsh
yarn
```

Them, to run it in **android device**(emulator or connected device via usb) use the command:
```bash
npm run android
```
or with **yarn**:
```bash
yarn android
```

**NOTE: If you are going to use the emulator, this should be running before run the code above.**

To run it in ios is basically the same, just change the word **android** in the commands for **ios**.

**NOTE: I'm not sure about this, but maybe you need to install expo cli before doing the steps described here, here is the documentation for that: [expo-cli](https://docs.expo.dev/get-started/installation/)**

## Libraries used

- [React navigation](https://reactnavigation.org/): for the routing screen feature.
- [Ui Kitten :smile_cat:](https://akveo.github.io/react-native-ui-kitten/): UI components.
- [react-navigation-header-buttons](https://www.npmjs.com/package/react-navigation-header-buttons): Header buttons.
- [Styled components](https://styled-components.com/).
- [react-native-uuid](https://www.npmjs.com/package/react-native-uuid): To create unique ids for the todos.
- [expo-secure-store](https://docs.expo.dev/versions/latest/sdk/securestore/): Persist data.
