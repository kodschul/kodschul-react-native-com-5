import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CounterApp = () => {
  const [countValue, setCountValue] = useState(10);

  const countUp = () => {
    // countValue += 1;
    setCountValue(countValue + 1);
  };

  const countDown = () => {
    // countValue -= 1;
    setCountValue(countValue - 1);
    // console.log({ countValue });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: countValue % 2 == 0 ? 'darkblue' : 'brown',
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
          CounterApp
        </Text>
      </View>

      <Pressable style={styles.btn} onPress={countUp}>
        <Text style={styles.btnText}>+</Text>
      </Pressable>

      <Text style={{ marginVertical: 25 }}> {countValue} </Text>

      <Pressable style={styles.btn} onPress={countDown}>
        <Text style={styles.btnText}>-</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default CounterApp;
