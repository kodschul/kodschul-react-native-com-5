import { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ScreenProps, Screens } from '../navigation';

const deviceWidth = Dimensions.get('window').width;

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 1000,
});

type ICharacter = {
  id: string;
  name: string;
  image: string;
};

const CharactersScreen = ({ navigation }: ScreenProps<Screens.CHARACTERS>) => {
  const [page, setPage] = useState(1);
  const { data: characters, error } = useQuery<ICharacter[]>({
    queryKey: [`characters${page}`],
    queryFn: () => fetchCharacters(page),
    // staleTime: 3000,
    // refetchInterval: 3000,
  });
  const fetchCharacters = async (currentPage: number) => {
    console.log('Fetching page:', currentPage);
    return (await api.get(`/character?page=${currentPage}`))?.data?.results;
  };

  const renderCharacter = ({ item }: { item: ICharacter }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(Screens.CHARACTER, {
            characterId: Number(item.id),
            character: item,
          })
        }
        style={{ backgroundColor: 'frenchgrey', margin: 10 }}
      >
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
      </TouchableOpacity>
    );
  };

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error occured: {error.message} </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button title="Back" onPress={() => setPage(page - 1 || 1)} />
        <Button title="Next" onPress={() => setPage(page + 1)} />
      </View>

      <FlatList
        data={characters}
        renderItem={renderCharacter}
        numColumns={2}
        keyExtractor={item => item.id}
        initialNumToRender={20}
        // onEndReached={() => setPage(page + 1)}
      />
    </SafeAreaView>
  );
};

export default CharactersScreen;
