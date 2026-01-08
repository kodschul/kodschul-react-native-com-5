import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { TabProps, Screens } from '../../navigation';

const ProfileScreen = ({ navigation }: TabProps<Screens.PROFILE_TAB>) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
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
