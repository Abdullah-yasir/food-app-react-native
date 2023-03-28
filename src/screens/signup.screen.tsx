import React from 'react';
import {Image} from 'react-native';
import {
  StyleSheet,
  useColorScheme,
  Text,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Accented, Heading} from '../components/formatting.component';
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
        <Image
          style={{width: 200, height: 150}}
          source={require('../../assets/logo.jpg')}
        />
        <Heading level={1}>
          <Text>Create Account</Text>
        </Heading>
      </View>

      <View style={{backgroundColor: 'white', padding: 20}}>
        <Input icon="mail" placeholder="Email" keyboardType="email-address" />
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
          <Text style={{color: 'grey'}}>Already have an Account? </Text>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => props.navigation.navigate(Screens.LOGIN_SCREEN)}>
            <Accented>
              <Text>Login</Text>
            </Accented>
          </TouchableOpacity>
        </View>
        <View
          style={{
            position: 'relative',
            borderBottomWidth: 0.5,
            borderColor: 'grey',
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Text
            style={{
              color: 'grey',
              position: 'absolute',
              top: -10,
              backgroundColor: 'white',
              paddingHorizontal: 25,
            }}>
            OR
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/facebook.png')}
          />
          <View style={{width: 20}} />
          <Image
            style={{width: 50, height: 50}}
            source={require('../../assets/google.png')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: 'white', justifyContent: 'center'},
});

export default SignupScreen;
