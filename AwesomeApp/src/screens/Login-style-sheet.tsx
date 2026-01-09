import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
} from 'react-native';
import React from 'react';
import { ScreenProps, Screens } from '../navigation';

const LoginScreen = ({ navigation }: ScreenProps<Screens.LOGIN>) => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          width: '100%',
          height: 300,
          uri: 'https://www.activtrades.eu/storage/posts/2024/07/1719910988-1719910951-02.07.2024-2.webp',
        }}
      />
      <View
        style={{
          flex: 1,
          marginTop: -20,
          paddingHorizontal: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
        }}
      >
        <Text style={{ marginTop: 20, fontSize: 32, fontWeight: 'bold' }}>
          Sign In
        </Text>

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
        />

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
        />

        <Text style={styles.forgotPassword}>Forgot Password</Text>

        <View style={{ marginTop: 40 }}>
          <Pressable
            style={pressed => ({
              opacity: pressed ? 0.6 : 1,
              backgroundColor: '#018a86',
              paddingVertical: 15,
              borderRadius: 12,
              alignItems: 'center',
            })}
          >
            <Text>Sign In</Text>
          </Pressable>
        </View>
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
  inputLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2A2C33',
    borderRadius: 12,
    color: '#CBCACE',
    paddingHorizontal: 10,
    fontWeight: '500',
    paddingVertical: 15,
  },

  forgotPassword: {
    marginTop: 16,
    fontSize: 18,
    color: '#018a86',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
});

export default LoginScreen;
