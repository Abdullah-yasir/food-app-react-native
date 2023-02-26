import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Screens, XColors} from '../config/constants';

import {Accented, Heading} from './../components/formatting.component';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MealBar} from '../components/meal-bar.component';

const Tab = createMaterialTopTabNavigator();

function RestaurantScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <View
        style={{
          backgroundColor: 'white',
          overflow: 'hidden',
        }}>
        <View
          style={{
            position: 'relative',
            height: 180,
          }}>
          <View style={StyleSheet.absoluteFill}>
            <Image
              style={{width: '100%'}}
              source={require('./../../assets/download.jpeg')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={styles.iconButton}>
              <Accented>
                <AntDesign name="arrowleft" size={24} />
              </Accented>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.iconButton}>
                <Accented>
                  <AntDesign name="hearto" size={24} />
                </Accented>
              </View>
              <View style={styles.iconButton}>
                <Accented>
                  <AntDesign name="sharealt" size={24} />
                </Accented>
              </View>
              <View style={{...styles.iconButton, marginRight: 10}}>
                <Accented>
                  <AntDesign name="search1" size={24} />
                </Accented>
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 10}}>
          <Heading level={1}>
            <Text>FRENCY TACOS - 1</Text>
          </Heading>
          <Text>20 - 30min • Burger • Fries • Donuts</Text>
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
          <Text>$10 off on mininmum spent of $150</Text>
          <Accented>
            <Text>View all offers</Text>
          </Accented>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Tab.Navigator initialRouteName={Screens.MENU_SCREEN}>
          <Tab.Screen name={Screens.MENU_SCREEN} component={MenuTab} />
          <Tab.Screen
            name={Screens.MY_PROGRAM_SCREEN}
            component={MyProgramTab}
          />
          <Tab.Screen name={Screens.DEALS_SCREEN} component={DealsTab} />
        </Tab.Navigator>
      </View>
    </View>
  );
}

function MenuTab(props) {
  return (
    <View style={{padding: 20}}>
      <ScrollView>
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
      </ScrollView>
    </View>
  );
}
function MyProgramTab(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>MEnu</Text>
    </View>
  );
}
function DealsTab(props) {
  return (
    <View style={{flex: 1, backgroundColor: 'orange'}}>
      <Text>MEnu</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {height: '100%'},
  iconButton: {
    width: 45,
    height: 45,
    backgroundColor: XColors.lightgrey,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 10,
  },
});

export default RestaurantScreen;
