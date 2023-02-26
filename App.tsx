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

import HomeDrawer from './src/routes/home-drawer.navigator';
import AuthStack from './src/routes/auth-stack.navigator';

const reducer = (state, action) => {
  switch (action.type) {
    case 'value':
      return state;

    default:
      return state;
  }
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const isLoggedIn = false;

  return (
    <SafeAreaView style={{...backgroundStyle, ...styles.app}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        {isLoggedIn ? <HomeDrawer /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {display: 'flex', flex: 1},
});

export default App;
