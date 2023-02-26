import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  TouchableOpacity,
} from 'react-native';
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

export const PasswordInput = (props: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        {...props}
        secureTextEntry={!showPassword}
      />
      <AntDesign style={styles.serachIcon} name={props.icon} size={16} />
      <TouchableOpacity
        hitSlop={{top: 50, bottom: 50, right: 50}}
        onPress={() => setShowPassword(!showPassword)}
        style={{top: 15, right: 15, position: 'absolute'}}>
        <AntDesign name={showPassword ? 'eye' : 'eyeo'} size={20} />
      </TouchableOpacity>
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
