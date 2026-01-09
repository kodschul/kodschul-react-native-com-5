import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './screens/Splash';

import { Screens, RootStackParamList, TabBarParamList } from './navigation';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/tabs/Home';
import ProfileScreen from './screens/tabs/Profile';
import DeliveryDetailScreen from './screens/DeliveryDetail';

import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabBarParamList>();

const AppTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name={Screens.HOME_TAB}
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon name="home-outline" size={20} />,
        }}
      />
      <Tab.Screen name={Screens.PROFILE_TAB} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const AppContent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.TABS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Screens.SPLASH} component={SplashScreen} />
        <Stack.Screen name={Screens.LOGIN} component={LoginScreen} />
        <Stack.Screen name={Screens.TABS} component={AppTabs} />
        <Stack.Screen
          options={{ headerShown: true }}
          name={Screens.DELIVERY_DETAIL}
          component={DeliveryDetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContent;
