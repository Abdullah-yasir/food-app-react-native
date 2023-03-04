import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from '../config/constants';

import HomeScreen from '../screens/home.screen';
import RestaurantScreen from '../screens/restaurant.screen';
import CartScreen from '../screens/cart.screen';
import ProductScreen from '../screens/product.screen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={Screens.RESTAURANT_SCREEN}
        component={RestaurantScreen}
      />
      <Stack.Screen
        name={Screens.CART_SCREEN}
        component={CartScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen name={Screens.PRODUCT_SCREEN} component={ProductScreen} />
    </Stack.Navigator>
  );
}
