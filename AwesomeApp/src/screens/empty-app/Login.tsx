import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps, Screens } from '../navigation';

const LoginScreen = ({ navigation }: ScreenProps<Screens.LOGIN>) => {
  // useEffect(() => {
  //   (async () => {
  //     await new Promise(r => setTimeout(r, 2000));
  //     navigation.replace(Screens.TABS);
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
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
});

export default LoginScreen;
