import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const FlexboxApp = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // alignItems: 'center',
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
          //   margin: 10,
          backgroundColor: 'red',
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          //   margin: 10,
          backgroundColor: 'blue',
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          //   margin: 10,
          backgroundColor: 'blue',
        }}
      />
    </SafeAreaView>
  );
};

const StandardFlexboxApp = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ width: 50, height: 50, margin: 10, backgroundColor: 'red' }}
      />
      <View
        style={{ width: 50, height: 50, margin: 10, backgroundColor: 'blue' }}
      />
    </SafeAreaView>
  );
};

export default FlexboxApp;
