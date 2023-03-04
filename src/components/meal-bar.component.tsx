import React from 'react';
import {View, Text, Image, TouchableNativeFeedback} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ImageSourcePropType} from 'react-native/Libraries/Image/Image';

import {Double} from 'react-native/Libraries/Types/CodegenTypes';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';

import {Accented, Heading} from './../components/formatting.component';

export type MealBarProps = {
  title?: string;
  currencySymbol?: string;

  imageSrc?: ImageSourcePropType;

  rating?: Double;
  price?: Double;

  onAddToCart?: (e: GestureResponderEvent) => void;
  onPress?: (e: GestureResponderEvent) => void;
};

export const MealBar = (props: MealBarProps) => {
  const {
    title = 'Un named',
    rating = 0.0,
    price = 0.0,
    onAddToCart,
    imageSrc,
    onPress,
    currencySymbol = '$',
  } = props;

  return (
    <View style={{overflow: 'hidden', borderRadius: 5, marginBottom: 20}}>
      <TouchableNativeFeedback onPress={onPress}>
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
              {imageSrc ? (
                <Image
                  style={{resizeMode: 'center', width: '100%', height: '100%'}}
                  source={imageSrc}
                />
              ) : (
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'lightgrey',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign name="picture" size={20} />
                </View>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginHorizontal: 10}}>
                <Heading level={3}>
                  <Text>{title}</Text>
                </Heading>
                {rating ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginBottom: 5,
                    }}>
                    <Accented>
                      <AntDesign name="star" size={14} />
                    </Accented>
                    <Accented>
                      <Text>{rating} Rating</Text>
                    </Accented>
                  </View>
                ) : null}
                <TouchableNativeFeedback onPress={onAddToCart}>
                  <View
                    style={{
                      backgroundColor: 'tomato',
                      alignItems: 'center',
                      padding: 2,
                      borderRadius: 500,
                      width: 100,
                    }}>
                    <Text style={{color: 'white'}}>Add to Cart</Text>
                  </View>
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
          <Heading level={3}>
            <Text>
              {currencySymbol} {price}
            </Text>
          </Heading>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
