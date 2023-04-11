import React, {useCallback} from 'react';
import {ScrollView, Text, StyleSheet, useColorScheme, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Accented} from '../components/formatting.component';
import {Header} from '../components/header.component';
import {
  RestaurantCard,
  RestaurantCardProps,
} from '../components/restaurant-card.component';
import {Screens} from '../config/constants';
import MealSearch from '../components/meal-search.component';
import {MealBarProps} from '../components/meal-bar.component';

export type RestaurantSearchData = RestaurantCardProps & {
  meals: Array<MealBarProps>;
};

function HomeScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [searchResults, setSearchResults] = React.useState<
    Array<RestaurantSearchData>
  >([]);

  const onSearchResults = (
    needle: string,
    heyStack: Array<RestaurantSearchData>,
  ) => {
    if (!needle.length) return [];
    const items = heyStack.filter(item => {
      const meals = item.meals.filter(
        meal => meal.title && meal.title.toLowerCase()?.indexOf(needle) > -1,
      );
      item.meals = meals;
      return item.title.toLowerCase().indexOf(needle) > -1 || meals.length;
    });
    return items;
  };

  const restaurantData: Array<RestaurantSearchData> = [
    {
      title: 'Frency Tacos - 1',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Crunch Burger',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'Yountaz',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Chewomin',
          imageSrc: require('../../assets/meal.jpeg'),
          earnablePoints: 250,
        },
        {
          title: 'White Rice',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Manchorian',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'Xtroma tea',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Black Tea',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Coffee',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Almond Milk',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'Xtroma tea',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Black Tea',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Coffee',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Almond Milk',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'Quetta Hotel',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Chai Pratha',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Daan Channa',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Dehi',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'Domino',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Farigh Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Bakwas Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Bay Zaiqa Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
    {
      title: 'BroadWay',
      cover: require('../../assets/download.jpeg'),
      distance: 16,
      reviewsCount: 650,
      meals: [
        {
          title: 'Cheezy Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'Heavy Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
        {
          title: 'BarBQ Pizza',
          imageSrc: require('../../assets/meal.jpeg'),
        },
      ],
    },
  ];

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <Header
        onPressMenu={() => props.navigation.openDrawer()}
        inputProps={{
          onChangeText: needle =>
            setSearchResults(onSearchResults(needle, restaurantData)),
        }}
      />
      {searchResults.length ? (
        <MealSearch results={searchResults} />
      ) : (
        <>
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
            {restaurantData.slice(0, 5).map(rest => (
              <RestaurantCard
                {...rest}
                onClick={() =>
                  props.navigation.navigate(Screens.RESTAURANT_SCREEN)
                }
                width={280}
              />
            ))}
          </ScrollView>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {},
});

export default HomeScreen;
