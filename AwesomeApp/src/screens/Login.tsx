import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import { ScreenProps, Screens } from '../navigation';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const LoginScreen = ({ navigation }: ScreenProps<Screens.LOGIN>) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <View className="flex-1">
      <Image
        source={{
          width: '100%',
          height: 300,
          uri: 'https://www.activtrades.eu/storage/posts/2024/07/1719910988-1719910951-02.07.2024-2.webp',
        }}
      />
      <KeyboardAwareScrollView
        className="flex-1 px-5 rounded-t-xl bg-white "
        style={{ flex: 1, marginTop: -20 }}
        contentContainerStyle={{ flex: 1, backgroundColor: 'yellow' }}
      >
        <View className="flex-1 pt-12 ">
          <Text className="text-3xl mt-5 font-bold ">Sign In</Text>

          <Text className="text-xl font-bold mt-5 mb-2 ">Email</Text>
          <TextInput
            className="border rounded-2xl border-gray-500 px-3 py-4 color-slate-700 font-medium text-lg  "
            placeholder="Enter your email address"
          />

          <Text className="text-xl font-bold mt-5 mb-2 ">Password</Text>
          <TextInput
            className="border rounded-2xl border-gray-500 px-3 py-4 color-slate-700 font-medium text-lg  "
            placeholder="Enter your password"
            secureTextEntry
          />

          <Text className=" mt-4 text-teal-600 text-lg font-bold  self-end  ">
            Forgot Password
          </Text>

          <View
            className="flex-1 justify-end"
            style={{ paddingBottom: bottom + 100 }}
          >
            <View className="mt-10 ">
              <Pressable
                className="bg-orange-700   rounded-2xl py-4 items-center"
                style={pressed => ({
                  opacity: pressed ? 0.6 : 1,
                  backgroundColor: '#018a86',
                  paddingVertical: 15,
                  borderRadius: 12,
                  alignItems: 'center',
                })}
              >
                <Text className="text-white text-xl font-medium">Sign In</Text>
              </Pressable>

              <View>
                <Text className="text-center mt-6 text-lg ">
                  Don't have an account?{' '}
                  <Text
                    className="text-orange-700 font-bold underline"
                    onPress={() => navigation.navigate(Screens.SIGNUP)}
                  >
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default LoginScreen;
