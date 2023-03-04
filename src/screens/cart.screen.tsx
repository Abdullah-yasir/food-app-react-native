import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Text,
  TouchableNativeFeedback,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Accented, Heading} from '../components/formatting.component';
import {XColors} from '../config/constants';

function CartScreen(props): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [count, setCount] = React.useState(1);

  return (
    <View style={{...backgroundStyle, ...styles.screen}}>
      <View style={styles.banner}>
        <View style={styles.bannerImage}>
          <View style={StyleSheet.absoluteFill}>
            <Image
              style={{height: '100%', width: '100%', resizeMode: 'cover'}}
              source={require('./../../assets/burger.jpeg')}
            />
          </View>
          <View style={styles.headerButtonsRight}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <View style={{...styles.iconButton, marginLeft: 10}}>
                <Accented>
                  <AntDesign name="arrowleft" size={24} />
                </Accented>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <View style={{...styles.iconButton, marginRight: 10}}>
                <Accented>
                  <AntDesign name="shoppingcart" size={24} />
                </Accented>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              disabled={count === 0}
              onPress={() => {
                if (count > 0) setCount(count - 1);
              }}>
              <View
                style={{
                  ...styles.iconButton,
                  backgroundColor: count > 0 ? XColors.accent : 'lightgrey',
                }}>
                <AntDesign name="minus" size={20} />
              </View>
            </TouchableOpacity>
            <Heading level={2} style={{paddingHorizontal: 10}}>
              <Text>{count}</Text>
            </Heading>
            <TouchableOpacity onPress={() => setCount(count + 1)}>
              <View
                style={{...styles.iconButton, backgroundColor: XColors.accent}}>
                <AntDesign name="plus" size={20} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Heading level={2}>
              <Text>$ 2.99</Text>
            </Heading>
            <Text>23 Points</Text>
          </View>
        </View>
        <TouchableNativeFeedback disabled={count === 0} onPress={() => {}}>
          <View style={styles.addToCartButton}>
            <Heading level={3} style={{color: 'white'}}>
              <Text>Add To Cart</Text>
            </Heading>
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1},
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
    backgroundColor: '#ff5c00',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default CartScreen;
