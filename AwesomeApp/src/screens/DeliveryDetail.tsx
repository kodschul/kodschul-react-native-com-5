import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { ScreenProps, Screens } from '../navigation';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const { width: deviceWidth } = Dimensions.get('window');
import { FontAwesome6 as Icon } from '@react-native-vector-icons/fontawesome6';
import mapStyle from '../config/mapStyle';

const DeliveryDetailScreen = ({
  navigation,
}: ScreenProps<Screens.DELIVERY_DETAIL>) => {
  return (
    <View className={'flex-1'}>
      <View className="">
        <MapView
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType={'standard'}
          userInterfaceStyle={'dark'}
          // https://mapstyle.withgoogle.com/
          customMapStyle={mapStyle}
          style={styles.map}
        />
      </View>

      <View className="flex-1 bg-white"></View>

      <View className=" absolute top-10 left-6 ">
        <TouchableOpacity className=" bg-slate-900 p-4 rounded-full ">
          <Icon name="arrow-left" iconStyle="solid" color={'white'} size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  map: {
    width: deviceWidth,
    height: 300,
  },
});

export default DeliveryDetailScreen;
