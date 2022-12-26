# How to start with app.
`
yarn add
yarn tunnel # unless you see andriod bunling complete, app won't load on the phone.
make sure that your computer is connect with charger.
`
# Screen Shots

## Main Login Screen
<img src="./assets/images/screenshots/localhost_19006_(iPhone%20XR).png" width="200" height="400" />

## User Login Screen && Admin Login Screen
<img src="./assets/images/screenshots/userloginscreen.png" width="200" height="400" />

## User Signup Screen
..pending.

## User Home Screen

<img src="./assets/images/screenshots/userhomescreen.png" width="200" height="400" />

## User Profile Screen
<img src="./assets/images/screenshots/useraccountscreen.png" width="200" height="400" />

## Admin Home Screen
<img src="./assets/images/screenshots/adminhomescreen.png" width="200" height="400" />

## Admin Profile Screen
<img src="./assets/images/screenshots/adminaccountscreen.png" width="200" height="400" />



<!-- expo andriod download link -->
# Download Link
<!-- andriod apk -->
[Android's Download Link 🔗](https://expo.io/artifacts/3b1b1b0a-1f9a-4b0f-9b1a-1f9a4b0f9b1a)



# Explainging Navigation.
the app has a root component `<NavigationContainer></NavigationContainer>` and another thing is `createNavigation-stack-bottom` any thing can be present, after making an instance of `createNavigation-stack-bottom` we can pass it to `<NavigationContainer></NavigationContainer>` as a children.
```tsx
const RootStack= createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```
