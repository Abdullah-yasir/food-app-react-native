import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Accented, Bold, Heading} from '../components/formatting.component';
import {Input, PasswordInput} from '../components/input.component';
import {Screens, XColors} from '../config/constants';

function SignupScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Heading level={1}>
          <Text>Create Account</Text>
        </Heading>
      </View>

      <View style={{backgroundColor: 'white', padding: 20}}>
        <Input icon="mail" placeholder="Email" />
        <View style={{height: 20}} />
        <PasswordInput icon="lock1" placeholder="Password" />
        <View style={{height: 20}} />
        <PasswordInput icon="lock1" placeholder="Confirm Password" />
        <View style={{height: 20}} />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              overflow: 'hidden',
              borderRadius: 50,
              width: 110,
              elevation: 3,
            }}>
            <TouchableNativeFeedback>
              <View
                style={{
                  backgroundColor: XColors.accent,
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  borderRadius: 50,
                }}>
                <Text>Sign Up</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            justifyContent: 'center',
          }}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => props.navigation.navigate(Screens.LOGIN_SCREEN)}>
            <Accented>
              <Text>Login</Text>
            </Accented>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
});

export default SignupScreen;
