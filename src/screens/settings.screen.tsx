import React from 'react';
import {StyleSheet, useColorScheme, View, Text} from 'react-native';

import {Slider} from '@miblanchard/react-native-slider';
import {Picker} from '@react-native-picker/picker';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {XColors} from '../config/constants';

function SettingsScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [distance, setDistance] = React.useState(50);
  const [selectedLanguage, setSelectedLanguage] = React.useState([]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const languages = [
    {label: 'English', value: 'en'},
    {label: 'French', value: 'fr'},
    {label: 'Spanish', value: 'sp'},
  ];

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <View style={{height: 20}} />

      <Text>Distance ( {distance} ) KM</Text>
      <Slider
        value={distance}
        minimumTrackTintColor={XColors.orange}
        thumbTintColor={XColors.orange}
        minimumValue={5}
        step={5}
        maximumValue={100}
        onValueChange={value => setDistance(Math.round(value as number))}
      />

      <View style={{height: 20}} />

      <Text>Select Language</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={itemValue => setSelectedLanguage(itemValue)}>
        {languages.map(lang => (
          <Picker.Item label={lang.label} value={lang.value} />
        ))}
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default SettingsScreen;
