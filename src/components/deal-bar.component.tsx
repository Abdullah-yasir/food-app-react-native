import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Accented, Heading} from './formatting.component';

export const DealBar = props => {
  return (
    <View style={{overflow: 'hidden', borderRadius: 5, marginBottom: 20}}>
      <TouchableNativeFeedback>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 80,
                height: 80,
                borderRadius: 5,
                overflow: 'hidden',
              }}>
              <Image
                style={{resizeMode: 'center', width: '100%', height: '100%'}}
                source={require('./../../assets/meal.jpeg')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginHorizontal: 10}}>
                <Heading level={3}>
                  <Text>Mega Deal</Text>
                </Heading>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{maxWidth: 160}}>
                    3 Zingers, 1 Small Pizza, 1 Drink
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Heading level={3}>
              <Text>$2.99</Text>
            </Heading>
            <Heading
              level={3}
              style={{textDecorationLine: 'line-through', color: 'grey'}}>
              <Text>$4.50</Text>
            </Heading>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
