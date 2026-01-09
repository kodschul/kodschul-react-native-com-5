import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { ScreenProps, Screens } from '../navigation';

const DeliveryDetailScreen = ({
  navigation,
}: ScreenProps<Screens.DELIVERY_DETAIL>) => {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>

      <Button
        title="Go to Splash"
        onPress={() => navigation.navigate(Screens.SPLASH)}
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

export default DeliveryDetailScreen;
