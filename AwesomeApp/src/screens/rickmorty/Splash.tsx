import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { ScreenProps, Screens } from '../../navigation';

const SplashScreen = ({ navigation }: ScreenProps<Screens.SPLASH>) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate(Screens.CHARACTERS)}
      >
        <Text style={styles.btnText}>RickMorty Characters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate(Screens.COUNTDOWN, {
            initialValue: 10,
          });
        }}
      >
        <Text style={styles.btnText}>Countdown</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#007AFF',
    // justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  btn: {
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default SplashScreen;
