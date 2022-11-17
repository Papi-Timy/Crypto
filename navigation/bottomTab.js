import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {CryptoDetail, Transaction,Settings,Home} from '../screens';
const Tab = createBottomTabNavigator();

function HomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default HomTab;