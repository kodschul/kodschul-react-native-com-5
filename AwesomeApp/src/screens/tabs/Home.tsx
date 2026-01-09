import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { TabProps, Screens } from '../../navigation';
import { FontAwesome6 as Icon } from '@react-native-vector-icons/fontawesome6';
import authService from '../../config/authService';

const deviceWidth = Dimensions.get('window').width;

const HomeScreen = ({ navigation }: TabProps<Screens.HOME_TAB>) => {
  const signedInUserName = authService.getSignedInUser()?.username || '';

  return (
    <View className="flex-1 center">
      <View className=" w-full ">
        <Image
          source={{
            height: 300,
            width: deviceWidth,
            uri: 'https://www.activtrades.eu/storage/posts/2024/07/1719910988-1719910951-02.07.2024-2.webp',
          }}
        />
      </View>

      <View>
        <Text className="text-3xl font-bold mt-4 mx-4">
          Welcome Back! {signedInUserName}
        </Text>
      </View>

      <View className="flex-1 bg-gray-100 p-4">
        <View className="flex-1 gap-4">
          {/* First Row */}
          <View className="flex-row gap-4 flex-1">
            {/* Country Deliveries */}
            <TouchableOpacity
              // @ts-ignore
              onPress={() => navigation.navigate(Screens.DELIVERY_DETAIL)}
              className="flex-1 bg-orange-500 rounded-2xl p-6 justify-center"
            >
              <Icon
                name="earth-americas"
                iconStyle={'solid'}
                size={40}
                color="white"
              />
              <Text className="text-white text-xl font-semibold mt-4">
                Country{'\n'}Deliveries
              </Text>
            </TouchableOpacity>

            {/* My Deliveries */}
            <TouchableOpacity className="flex-1 bg-orange-500 rounded-2xl p-6 justify-center">
              <Icon name="grip" iconStyle={'solid'} size={40} color="white" />
              <Text className="text-white text-xl font-semibold mt-4">
                My{'\n'}Deliveries
              </Text>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View className="flex-row gap-4 flex-1">
            {/* Delayed Deliveries */}
            <TouchableOpacity className="flex-1 bg-orange-500 rounded-2xl p-6 justify-center">
              <Icon
                name="clock"
                iconStyle={'regular'}
                size={40}
                color="white"
              />
              <Text className="text-white text-xl font-semibold mt-4">
                Delayed{'\n'}Deliveries
              </Text>
            </TouchableOpacity>

            {/* Any Deliveries */}
            <TouchableOpacity className="flex-1 bg-orange-500 rounded-2xl p-6 justify-center">
              <Icon name="box" iconStyle={'solid'} size={40} color="white" />
              <Text className="text-white text-xl font-semibold mt-4">
                Any{'\n'}Deliveries
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
