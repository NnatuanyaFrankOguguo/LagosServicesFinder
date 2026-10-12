import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LocationListScreen from './screens/LocationListScreen';
import LocationDetailScreen from './screens/LocationDetailScreen';
import { COLORS } from './constants/theme';

// React Navigation's built-in dark theme, with our own background and card
// colours so nothing flashes white while moving between screens.
const navTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: COLORS.background,
    card: COLORS.surface,
    text: COLORS.text,
    border: COLORS.border,
  },
};

// A "stack" navigator: screens are piled on top of each other. Opening the
// detail screen pushes it on top, and the back button pops it off again.
const Stack = createNativeStackNavigator();

// App
// The root of the app. It doesn't draw anything itself.
// Takes in: nothing.
// Renders: the navigation setup with two routes, "List" (shown first) and
// "Detail". The native stack adds the header bar and the back button on the
// detail screen for us.
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator
          initialRouteName="List"
          screenOptions={{
            headerStyle: { backgroundColor: COLORS.surface },
            headerTintColor: COLORS.text,
            headerTitleStyle: { fontWeight: '700' },
            headerShadowVisible: false,
            // Show just the arrow on iOS instead of "< Lagos Service Finder".
            headerBackButtonDisplayMode: 'minimal',
          }}
        >
          {/* The list screen draws its own larger header, so the default one
              is hidden there. */}
          <Stack.Screen
            name="List"
            component={LocationListScreen}
            options={{ title: 'Lagos Service Finder', headerShown: false }}
          />
          <Stack.Screen
            name="Detail"
            component={LocationDetailScreen}
            options={{ title: 'Location Details' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}
