import { useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReactionTimeApp = () => {
  const [countDown, setCountDown] = useState(-1);
  const [isWaitingForReaction, setWaitingForReaction] = useState(false);

  const isCountDownActive = countDown > 0;

  const [reactionStartTime, setReactionStartTime] = useState(0);
  const [reactionEndTime, setReactionEndTime] = useState(0);

  const reactionTime = reactionEndTime - reactionStartTime;

  useEffect(() => {
    let timerId: any = null;

    if (isCountDownActive) {
      timerId = setInterval(() => {
        setCountDown(prev => prev - 1);
      }, 900);
    }

    return () => {
      if (isCountDownActive && timerId) {
        setWaitingForReaction(true);
        setReactionStartTime(new Date().getTime());
      }

      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    };
  }, [isCountDownActive]);

  const startReactionGame = () => {
    const duration = Math.floor(Math.random() * 4) + 2;

    setCountDown(duration); // 3-6 seconds
  };

  const stopReactionGame = () => {
    console.log('real_reaction_time', new Date().getTime() - reactionStartTime);
    setReactionEndTime(new Date().getTime());
    setWaitingForReaction(false);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: isCountDownActive ? 'darkblue' : 'green',
        alignItems: 'center',
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>
          Count Down
        </Text>
      </View>

      {!isCountDownActive && !isWaitingForReaction && (
        <>
          <Pressable style={styles.btn} onPress={startReactionGame}>
            <Text>Start</Text>
          </Pressable>
        </>
      )}

      <Pressable
        style={[styles.btn, { padding: 100 }]}
        onPress={stopReactionGame}
      >
        <Text style={{ fontSize: 40 }}>React</Text>
      </Pressable>

      {isWaitingForReaction && <Text>CLick me</Text>}
      {reactionTime > 0 && (
        <Text style={{ color: 'white', fontSize: 20 }}>
          Reaction Time: {reactionTime} ms
        </Text>
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

export default ReactionTimeApp;
