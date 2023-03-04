import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {Accented, Heading} from '../components/formatting.component';
import {Input, PasswordInput} from '../components/input.component';

import {Screens, XColors} from '../config/constants';
import {LOGIN} from '../store/action-types';

function LoginScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const dispatch = useDispatch();

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
          <Text>Login</Text>
        </Heading>
      </View>

      <View style={{backgroundColor: 'white', padding: 20}}>
        <Input
          icon="mail"
          placeholder="Email"
          textContentType="emailAddress" // auto-fill ios
          autoComplete="email" // auto-fill android
          keyboardType="email-address"
        />
        <View style={{height: 20}} />
        <View style={{alignItems: 'flex-end'}}>
          <PasswordInput icon="lock1" placeholder="Password" />
          <TouchableOpacity style={{marginTop: 10}}>
            <Accented>
              <Text>Forgot Password?</Text>
            </Accented>
          </TouchableOpacity>
        </View>
        <View style={{height: 20}} />

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              overflow: 'hidden',
              borderRadius: 50,
              width: 100,
              elevation: 3,
            }}>
            <TouchableNativeFeedback
              onPress={() => {
                dispatch({type: LOGIN});
              }}>
              <View
                style={{
                  backgroundColor: XColors.accent,
                  paddingVertical: 15,
                  paddingHorizontal: 30,
                  borderRadius: 50,
                }}>
                <Text>LOGIN</Text>
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
          <Text>Don't have an Account? </Text>
          <TouchableOpacity
            hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
            onPress={() => props.navigation.navigate(Screens.SIGN_UP_SCREEN)}>
            <Accented>
              <Text>Sign Up</Text>
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

export default LoginScreen;
