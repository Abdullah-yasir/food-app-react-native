import React from 'react';
import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {XColors} from '../config/constants';

type InputProps = TextInputProps & {
  icon: string;
};

export const Input = (props: InputProps) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput style={styles.search} {...props} />
      <AntDesign style={styles.serachIcon} name={props.icon} size={16} />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    backgroundColor: XColors.lightgrey,
    borderRadius: 5,
    width: '100%',
    paddingLeft: 40,
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
});
