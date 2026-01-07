import { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const deviceWidth = Dimensions.get('window').width;

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

const ListFlatItemsApp = () => {
  const [items, setItems] = useState<any[]>([]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    let newItems: any[] = [];
    for (let i = 1; i < 1000; i++) {
      newItems.push({
        i: i,
        text: `Item number ${i}`,
        color: colors[i % colors.length],
      });
    }

    setItems(newItems);
  }, []);

  const renderItem = ({ item }) => {
    console.log(item.i);
    return (
      <View style={{ backgroundColor: 'frenchgrey', margin: 10 }}>
        <Image
          source={{
            uri: `https://randomuser.me/api/portraits/${
              item.i % 2 === 0 ? 'men' : 'women'
            }/${item.i}.jpg`,

            // width: 10,
            // height: 10,
          }}
          style={{ width: deviceWidth / 3 - 20, height: 100 }}
        />
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

      <FlatList
        data={items}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={item => item.i}
        initialNumToRender={20}
      />

      {/* <ScrollView>{items.map(renderItemScrollView)}</ScrollView> */}
    </SafeAreaView>
  );
};

export default ListFlatItemsApp;
