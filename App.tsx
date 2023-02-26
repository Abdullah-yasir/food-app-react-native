import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './src/screens/home.screen';
import RestaurantScreen from './src/screens/restaurant.screen';
import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from './src/config/constants';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.app}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
          <Stack.Screen
            name={Screens.RESTAURANT_SCREEN}
            component={RestaurantScreen}
          />
        </Stack.Navigator>
        {/* <HomeScreen /> */}
        {/* <RestaurantScreen /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {display: 'flex', flex: 1},
});

export default App;
