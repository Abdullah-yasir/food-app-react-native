import React from 'react';
import {StyleSheet, useColorScheme, ScrollView, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RestaurantSearchData} from '../screens/home.screen';
import {RestaurantCard} from './restaurant-card.component';
import {MealBar} from './meal-bar.component';

export type MealSearchProps = {
  results: Array<RestaurantSearchData>;
};

function MealSearch(props: MealSearchProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView>
      <View
        style={{
          ...backgroundStyle,
          ...styles.screen,
        }}>
        {props.results.map((item, i) => (
          <View>
            <RestaurantCard {...item} key={item.title + i} />
            <ScrollView>
              <View style={{paddingHorizontal: 30}}>
                {item.meals &&
                  item.meals.map((meal, i) => (
                    <MealBar {...meal} key={meal?.title + i} />
                  ))}
              </View>
            </ScrollView>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default MealSearch;
