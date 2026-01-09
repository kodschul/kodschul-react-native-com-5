import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import { TabProps, Screens } from '../../navigation';
import authService from '../../config/authService';

const ProfileScreen = ({ navigation }: TabProps<Screens.PROFILE_TAB>) => {
  const signOut = () => {
    authService.signOut();
    navigation.replace(Screens.LOGIN);
  };

  return (
    <View style={styles.container}>
      <Text>Profile</Text>

      <Button title="Sign out" onPress={signOut} />
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

export default ProfileScreen;
