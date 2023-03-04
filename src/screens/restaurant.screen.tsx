import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Screens, XColors} from '../config/constants';

import {Accented, Heading} from '../components/formatting.component';
import {MealBar} from '../components/meal-bar.component';
import {ProgramBar} from '../components/program-bar.component';
import {DealBar} from '../components/deal-bar.component';

const Tab = createMaterialTopTabNavigator();

function RestaurantScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <View style={styles.banner}>
        <View style={styles.bannerImage}>
          <View style={StyleSheet.absoluteFill}>
            <Image
              style={{width: '100%'}}
              source={require('./../../assets/download.jpeg')}
            />
          </View>
          <View style={styles.headerButtonsRight}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <View style={styles.iconButton}>
                <Accented>
                  <AntDesign name="arrowleft" size={24} />
                </Accented>
              </View>
            </TouchableOpacity>
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
          <Tab.Screen name={Screens.DEALS_SCREEN} component={DealsTab} />
          <Tab.Screen
            name={Screens.MY_PROGRAM_SCREEN}
            component={MyProgramTab}
          />
        </Tab.Navigator>
      </View>
    </View>
  );
}

function MenuTab(props) {
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <View style={{height: 20}} />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
        <MealBar />
      </View>
    </ScrollView>
  );
}
function MyProgramTab(props) {
  return (
    <ScrollView>
      <View style={{height: '100%'}}>
        <View
          style={{
            width: '100%',
            backgroundColor: XColors.accent,
            height: 120,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Heading level={1} style={{color: 'white', margin: 0}}>
            <Text>0 Points</Text>
          </Heading>
          <View
            style={{
              width: 150,
              overflow: 'hidden',
            }}>
            <Image
              source={require('./../../assets/barcode.png')}
              style={{
                width: '100%',
                resizeMode: 'stretch',
                height: 80,
              }}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 20, paddingTop: 20}}>
          <ProgramBar />
          <ProgramBar />
          <ProgramBar />
          <ProgramBar />
          <ProgramBar />
          <ProgramBar />
          <ProgramBar />
        </View>
      </View>
    </ScrollView>
  );
}
function DealsTab(props) {
  return (
    <ScrollView>
      <View style={{paddingHorizontal: 20}}>
        <View style={{height: 20}} />
        <DealBar />
        <DealBar />
        <DealBar />
        <DealBar />
        <DealBar />
        <DealBar />
        <DealBar />
        <DealBar />
      </View>
    </ScrollView>
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
  banner: {
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  bannerImage: {
    position: 'relative',
    height: 180,
  },
  headerButtonsRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default RestaurantScreen;
