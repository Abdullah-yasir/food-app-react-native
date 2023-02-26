import React, {PropsWithChildren} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback,
} from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import {XColors} from '../config/constants';

import {Accented, Bold} from './formatting.component';

type RestaurantCardProps = PropsWithChildren<{
  onClick?: CallableFunction;
}>;

export const RestaurantCard = (props: RestaurantCardProps) => {
  return (
    <View>
      <View
        style={{
          elevation: 2,
          backgroundColor: 'white',
          width: 280,
          borderRadius: 5,
          overflow: 'hidden',
          margin: 5,
        }}>
        <View
          style={{
            position: 'relative',
            display: 'flex',
            height: 180,
          }}>
          <View style={StyleSheet.absoluteFill}>
            <Image
              style={{width: '100%'}}
              source={require('./../../assets/download.jpeg')}
            />
          </View>
          <View
            style={{
              ...styles.iconButton,
              opacity: 0.8,
              alignSelf: 'flex-end',
              margin: 10,
            }}>
            <AntDesign name="hearto" size={16} color="tomato" />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 20,
              paddingHorizontal: 15,
              paddingVertical: 5,
              alignSelf: 'flex-end',
              marginRight: 20,
              position: 'absolute',
              top: 150,
              right: -10,
              elevation: 5,
            }}>
            <Bold>
              <Text>20 - 30</Text>
            </Bold>
            <Text style={{fontSize: 12, marginTop: -5}}>min</Text>
          </View>
        </View>
        <TouchableNativeFeedback onPress={props.onClick}>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 20, fontWeight: '500'}}>
              FRENCY TACOS - 1
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Accented>
                <AntDesign name="star" size={14} />
              </Accented>
              <Text>
                <Accented>
                  <Text>4.1 Rating</Text>
                </Accented>{' '}
                (500+)
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: XColors.lightgrey,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
