import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const deviceWidth = Dimensions.get('window').width;

type ICharacter = {
  id: string;
  name: string;
  image: string;
};

const CharactersScreen = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const fetchCharacters = async (currentPage: number) => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`,
      );
      const data = await response.json();
      setCharacters([...characters, ...data.results]);
    } catch (e) {
      //
    }
  };

  useEffect(() => {
    fetchCharacters(page);
  }, [page]);

  const renderCharacter = ({ item }: { item: ICharacter }) => {
    return (
      <View style={{ backgroundColor: 'frenchgrey', margin: 10 }}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{ width: deviceWidth / 2 - 20, height: 100 }}
        />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{ fontWeight: 'bold', marginTop: 5 }}
        >
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{ alignSelf: 'center', fontSize: 20, paddingVertical: 10 }}>
        Avatars
      </Text>

      <FlatList
        data={characters}
        renderItem={renderCharacter}
        numColumns={2}
        keyExtractor={item => item.id}
        initialNumToRender={20}
        onEndReached={() => setPage(page + 1)}
      />
    </SafeAreaView>
  );
};

export default CharactersScreen;
