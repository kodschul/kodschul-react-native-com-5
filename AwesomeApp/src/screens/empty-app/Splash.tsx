import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
import React, { useEffect } from 'react';
import { ScreenProps, Screens } from '../navigation';

const SplashScreen = ({ navigation }: ScreenProps<Screens.SPLASH>) => {
  // useEffect(() => {
  //   (async () => {
  //     await new Promise(r => setTimeout(r, 2000));
  //     navigation.replace(Screens.LOGIN);
  //   })();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Awesome App</Text>

      <Button
        title="Go to Login"
        onPress={() => navigation.navigate(Screens.LOGIN)}
      />
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

export default SplashScreen;
