import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Accented, Heading} from '../components/formatting.component';
import {XColors} from '../config/constants';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {MealBarProps} from '../components/meal-bar.component';

type CartItemProps = MealBarProps & {
  count?: Number;
};

function CartItem(props: CartItemProps) {
  const [count, setCount] = React.useState(1);
  const [showCounter, setShowCounter] = React.useState(false);

  const imageSrc = false;

  return (
    <View
      style={{flexDirection: 'row', position: 'relative', marginBottom: 15}}>
      <TouchableWithoutFeedback onPress={() => setShowCounter(!showCounter)}>
        <View
          style={{
            flexDirection: 'row',
            borderColor: 'grey',
            borderWidth: 1,
            borderRadius: 3,
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            marginRight: 15,
          }}>
          <Text>{count}</Text>
          <Accented style={{marginLeft: 5}}>
            <AntDesign name="down" />
          </Accented>
        </View>
      </TouchableWithoutFeedback>
      <View style={{borderRadius: 5, overflow: 'hidden'}}>
        <TouchableNativeFeedback>
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
                  style={{
                    resizeMode: 'center',
                    width: '100%',
                    height: '100%',
                  }}
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
            <View style={{marginLeft: 15}}>
              <Accented>
                <Heading level={2}>
                  <Text>Crunch Cheese Burger</Text>
                </Heading>
              </Accented>
              <Heading level={3}>
                <Text>$ 2.53</Text>
              </Heading>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      {showCounter ? (
        <View
          style={{
            flexDirection: 'row',
            position: 'absolute',
            left: 45,
          }}>
          <TouchableNativeFeedback
            disabled={count === 0}
            onPress={() => setCount(count - 1)}>
            <View style={styles.counterButton}>
              <AntDesign name="minus" />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => setCount(count + 1)}>
            <View style={styles.counterButton}>
              <AntDesign name="plus" />
            </View>
          </TouchableNativeFeedback>
        </View>
      ) : null}
    </View>
  );
}

function CartScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, padding: 15},
  body: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 45,
    height: 45,
    backgroundColor: XColors.lightgrey,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  banner: {
    backgroundColor: 'white',
    overflow: 'hidden',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  bannerImage: {
    position: 'relative',
    height: 250,
  },
  headerButtonsRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartButton: {
    backgroundColor: XColors.orange,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  counterButton: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    width: 50,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartScreen;
