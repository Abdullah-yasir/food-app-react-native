import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Header} from './src/components/header.component';
import {RestaurantCard} from './src/components/restaurant-card.component';
import {Accented} from './src/components/formatting.component';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, display: 'flex', flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <View style={styles.screen}>
          <Header />
          <View
            style={{
              padding: 20,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 24, fontWeight: '500'}}>
              Specially Selected For You
            </Text>
            <Accented>
              <AntDesign name="arrowright" size={24} />
            </Accented>
          </View>
          <ScrollView horizontal>
            <RestaurantCard />
            <RestaurantCard />
          </ScrollView>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {},
  body: {},
});

export default App;
