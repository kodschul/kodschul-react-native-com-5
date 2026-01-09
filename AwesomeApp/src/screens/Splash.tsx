import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps, Screens } from '../navigation';
import { storage } from '../config/storage';
import authService from '../config/authService';

const SplashScreen = ({ navigation }: ScreenProps<Screens.SPLASH>) => {
  const checkUser = () => {
    const user = authService.getSignedInUser();
    if (user) {
      navigation.replace(Screens.TABS);
    } else {
      navigation.replace(Screens.LOGIN);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Awesome App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#efe',
  },
});

export default SplashScreen;
