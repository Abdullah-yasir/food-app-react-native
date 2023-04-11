import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  ImageSourcePropType,
} from 'react-native';

import {Heading} from './formatting.component';

export type DealBarProps = {
  imageSrc: ImageSourcePropType;
  title: String;
  description: String;
  newPrice: String;
  oldPrice?: String;
};

export const DealBar = (props: DealBarProps) => {
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
                source={props.imageSrc}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={{marginHorizontal: 10}}>
                <Heading level={3}>
                  <Text>{props.title}</Text>
                </Heading>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 5,
                  }}>
                  <Text style={{maxWidth: 160}}>{props.description}</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <Heading level={3}>
              <Text>{props.newPrice}</Text>
            </Heading>
            <Heading
              level={3}
              style={{textDecorationLine: 'line-through', color: 'grey'}}>
              <Text>{props.oldPrice}</Text>
            </Heading>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};
