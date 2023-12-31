import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeStack from './home-stack.navigator';

import SettingsScreen from '../screens/settings.screen';

import {Screens, XColors} from '../config/constants';

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#cff7ff',
        drawerActiveTintColor: XColors.accent,
      }}>
      <Drawer.Screen
        name="Home Stack"
        options={{title: 'Home'}}
        component={HomeStack}
      />
      <Drawer.Screen
        name={Screens.SETTINGS_SCREEN}
        component={SettingsScreen}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
}
