import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Accented, Heading} from './../components/formatting.component';

export const MealBar = props => {
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
                  <Text>Cheese Burger</Text>
                </Heading>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Accented>
                    <AntDesign name="star" size={14} />
                  </Accented>
                  <Text>
                    <Accented>
                      <Text>4.1 Rating</Text>
                    </Accented>
                  </Text>
                </View>
                <TouchableNativeFeedback>
                  <View
                    style={{
                      backgroundColor: 'tomato',
                      alignItems: 'center',
                      padding: 2,
                      borderRadius: 500,
                    }}>
                    <Text style={{color: 'white'}}>Add to Cart</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
          <Heading level={3}>
            <Text>$2.99</Text>
          </Heading>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
