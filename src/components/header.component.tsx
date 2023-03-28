import React, {PropsWithChildren} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

import {XColors} from '../config/constants';
import {Accented} from './formatting.component';

type HeaderProps = PropsWithChildren<{
  onPressMenu: (e: GestureResponderEvent) => void;
}>;

export const Header = (props: HeaderProps) => {
  return (
    <View style={{backgroundColor: 'white', elevation: 3}}>
      <View style={styles.header}>
        <View style={styles.iconsBar}>
          <TouchableOpacity
            hitSlop={{right: 20, bottom: 20}}
            onPress={props.onPressMenu}>
            <AntDesign name="menu-fold" size={20} />
          </TouchableOpacity>
          <View style={styles.iconsRow}>
            <View style={styles.iconButton}>
              <Accented>
                <AntDesign name="hearto" size={16} />
              </Accented>
            </View>
            <View style={styles.iconButton}>
              <Accented>
                <AntDesign name="user" size={16} />
              </Accented>
            </View>
          </View>
        </View>
        <View style={styles.headerRow}>
          <View style={styles.searchContainer}>
            <TextInput style={styles.search} placeholder="Restaurants, meals" />
            <AntDesign style={styles.serachIcon} name="search1" size={16} />
          </View>
          <View style={styles.filterIcon}>
            <Accented>
              <AntDesign name="filter" size={16} />
            </Accented>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 20,
    paddingTop: 0,
  },
  body: {},
  iconsBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconsRow: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    width: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    backgroundColor: XColors.lightgrey,
    borderRadius: 5,
    width: '100%',
    paddingLeft: 40,
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: XColors.lightgrey,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    flex: 9,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
  },
  serachIcon: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  filterIcon: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
