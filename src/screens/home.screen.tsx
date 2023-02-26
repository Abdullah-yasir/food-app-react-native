import React from 'react';
import {ScrollView, Text, StyleSheet, useColorScheme, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Accented} from '../components/formatting.component';
import {Header} from '../components/header.component';
import {RestaurantCard} from '../components/restaurant-card.component';
import {Screens} from '../config/constants';

function HomeScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <Header onPressMenu={() => props.navigation.openDrawer()} />
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
        <RestaurantCard
          onClick={() => props.navigation.navigate(Screens.RESTAURANT_SCREEN)}
        />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default HomeScreen;
