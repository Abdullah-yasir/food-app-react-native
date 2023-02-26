import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
  StyleSheet,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {XColors} from './src/config/constants';

import {Accented} from './src/components/formatting.component';
import {Header} from './src/components/header.component';

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
          <View style={styles.body}>
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
            <View
              style={{
                elevation: 2,
                backgroundColor: 'white',
                width: 280,
                borderRadius: 5,
                overflow: 'hidden',
                margin: 5,
              }}>
              <View
                style={{
                  position: 'relative',
                  display: 'flex',
                  height: 180,
                }}>
                <View style={StyleSheet.absoluteFill}>
                  <Image
                    style={{width: '100%'}}
                    source={require('./assets/download.jpeg')}
                  />
                </View>
                <View
                  style={{
                    ...styles.iconButton,
                    opacity: 0.8,
                    alignSelf: 'flex-end',
                    margin: 10,
                  }}>
                  <AntDesign name="hearto" size={16} color="tomato" />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 20,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    alignSelf: 'flex-end',
                    marginRight: 20,
                    position: 'absolute',
                    top: 150,
                    right: -10,
                    elevation: 5,
                  }}>
                  <Text>20 - 30</Text>
                  <Text>min</Text>
                </View>
              </View>
              <View style={{padding: 10}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>
                  FRENCY TACOS - 1
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Accented>
                    <AntDesign name="star" size={14} />
                  </Accented>
                  <Text>
                    <Accented>
                      <Text>4.1 Rating</Text>
                    </Accented>{' '}
                    (500+)
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {},
  body: {},
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: XColors.lightgrey,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
