import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Tabs: undefined;
  DeliveryDetail: undefined;
};

export type TabBarParamList = {
  Home: undefined;
  Profile: undefined;
};

export enum Screens {
  SPLASH = 'Splash',
  // CHARACTERS = 'Characters',
  // CHARACTER = 'Character',
  // COUNTDOWN = 'Countdown',

  LOGIN = 'Login',

  TABS = 'Tabs',

  HOME_TAB = 'Home',
  PROFILE_TAB = 'Profile',

  DELIVERY_DETAIL = 'DeliveryDetail',
}

export type ScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type TabProps<T extends keyof TabBarParamList> = NativeStackScreenProps<
  TabBarParamList,
  T
>;
