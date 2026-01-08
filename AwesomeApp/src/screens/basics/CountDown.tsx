import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScreenProps, Screens } from '../../navigation';

const CountDownScreen = ({ route }: ScreenProps<Screens.COUNTDOWN>) => {
  const [duration, setDuration] = useState(route.params.initialValue);
  const [countDown, setCountDown] = useState(-1);

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    let timerId = null;

    if (isActive) {
      timerId = setInterval(() => {
        setCountDown(prev => prev - 1);
      }, 1000);
    }

    return () => {
      timerId && clearInterval(timerId);
    };
  }, [isActive]);

  useEffect(() => {
    if (countDown === 0 && isActive) {
      setActive(false);
    }
  }, [countDown, isActive]);

  const startCountDown = () => {
    setCountDown(duration);
    setActive(true);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: countDown == 0 ? 'red' : 'darkblue',
        alignItems: 'center',
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
          Count Down
        </Text>
      </View>

      {!isActive && (
        <>
          <TextInput
            value={duration.toString()}
            keyboardType="numeric"
            onChangeText={value => setDuration(parseInt(value) || 0)}
            style={styles.input}
            returnKeyType="next"
          />

          <Pressable style={styles.btn} onPress={startCountDown}>
            <Text>Start</Text>
          </Pressable>
        </>
      )}

      {countDown >= 0 && (
        <Text
          style={{
            flex: 1,
            color: 'white',
            justifyContent: 'center',
            fontSize: 200,
            fontWeight: 'bold',
          }}
        >
          {countDown}
        </Text>
      )}

      {isActive && (
        <Pressable style={styles.btn} onPress={() => setActive(false)}>
          <Text>Stop</Text>
        </Pressable>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    marginVertical: 20,
    fontSize: 30,
    color: 'white',
  },

  btn: {
    backgroundColor: 'white',
    padding: 5,
    paddingHorizontal: 20,
  },

  btnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default CountDownScreen;
