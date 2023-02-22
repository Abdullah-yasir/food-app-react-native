import {createStackNavigator} from '@react-navigation/stack';
import {Screens} from '../config/constants';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Screens.HOME_SCREEN} component={Home} />

      <Stack.Screen name={Screens.PROFILE_SCREEN} component={Profile} />
      <Stack.Screen name={Screens.SETTINGS_SCREEN} component={Settings} />
    </Stack.Navigator>
  );
}
