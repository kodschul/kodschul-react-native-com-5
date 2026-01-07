import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = [
  'red',
  'green',
  'blue',
  'orange',
  'purple',
  'yellow',
  'pink',
  'brown',
];

let x = colors.map(color => 'COLOR_' + color.toUpperCase());

const ListItemsApp = () => {
  const [items, setItems] = useState<any[]>([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let newItems: any[] = [];
    for (let i = 1; i <= 1000; i++) {
      newItems.push({
        i: i,
        text: `Item number ${i}`,
        color: colors[i % colors.length],
      });
    }

    setItems(newItems);
  }, []);

  const renderItem = item => {
    ///
    return (
      <View style={{ backgroundColor: item.color, height: 200, width: 400 }}>
        <Text> {item.text} </Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Text
        onPress={() => setItems(items.filter((x, i) => i !== 0))}
        style={{ alignSelf: 'center', fontSize: 20, paddingVertical: 10 }}
      >
        List Items App
      </Text>
      {/* <ScrollView horizontal={true}>{items.map(renderItem)}</ScrollView> */}

      <ScrollView>
        {items.map(renderItem)}

        {/* {items.map(item => (
          <View style={{ backgroundColor: item.color }}>
            <Text> {item.text} </Text>
          </View>
        ))} */}
      </ScrollView>
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

export default ListItemsApp;
