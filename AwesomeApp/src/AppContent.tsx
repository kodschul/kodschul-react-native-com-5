import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SplashScreen from './screens/Splash';

import { Screens, RootStackParamList, TabBarParamList } from './navigation';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/tabs/Home';
import ProfileScreen from './screens/tabs/Profile';
import DeliveryDetailScreen from './screens/DeliveryDetail';

import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabBarParamList>();

const renderTabIcon = ({ focused, color, size, tabName }) => {
  const iconeName = {
    [Screens.HOME_TAB]: 'house',
    [Screens.PROFILE_TAB]: 'user',
  }[tabName];

  const iconStyle =
    focused || tabName === Screens.HOME_TAB ? 'solid' : 'regular';

  return (
    <FontAwesome6
      name={iconeName}
      iconStyle={iconStyle}
      size={size}
      color={color}
    />
  );
};

const createTabIcon = (tabName: keyof TabBarParamList) => (props: any) =>
  renderTabIcon({ ...props, tabName: tabName });

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#d86f00',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: { paddingBottom: 5, marginTop: 10 },
      }}
    >
      <Tab.Screen
        name={Screens.HOME_TAB}
        component={HomeScreen}
        options={{ tabBarIcon: createTabIcon(Screens.HOME_TAB) }}
      />
      <Tab.Screen
        name={Screens.PROFILE_TAB}
        component={ProfileScreen}
        options={{ tabBarIcon: createTabIcon(Screens.PROFILE_TAB) }}
      />
    </Tab.Navigator>
  );
};

const AppContent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Screens.DELIVERY_DETAIL}
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
