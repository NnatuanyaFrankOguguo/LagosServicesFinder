# Overview

Lagos Service Finder is a mobile app for finding essential services in Lagos, Nigeria. It lists 28 well-known places, including hospitals, pharmacies, fuel stations and transport hubs. You can filter the list by category and tap any place to see its address, description, and, where available, its phone number and opening hours.

I built it to learn how a React Native app is put together: splitting the UI into reusable components, passing data down through props, holding UI state with the `useState` hook, rendering long lists efficiently with `FlatList`, and moving between screens with React Navigation while passing data from one screen to the next. I also practised handling incomplete data safely, so the app doesn't crash when a record has no phone number or a screen opens without the data it expects.

Note: the places are real Lagos landmarks, but the phone numbers in the dataset are sample placeholders.

[Software Demo Video](http://youtube.link.goes.here)

# Development Environment

- **Expo** (SDK 57) for the project setup, the development server, and running the app through Expo Go
- **React Native** for the user interface
- **JavaScript** (no TypeScript)
- **React Navigation** (native stack) for moving between the two screens
- **@expo/vector-icons** (Material Community Icons) for the category and info icons
- Tested on a physical Android device using the Expo Go app
- Edited in Visual Studio Code on Windows

# Useful Websites

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Documentation](https://reactnavigation.org/docs/getting-started)

# Future Work

- Make phone numbers tappable so the device's dialer opens, and add a "Get directions" button that opens the address in Google Maps.
- Add a search bar so users can find a place by name or area (for example "Ikeja") in addition to filtering by category.
- Load locations from an online database or API instead of a hardcoded file, so places and opening hours can be updated without releasing a new version of the app.
