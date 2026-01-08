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

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
  timeout: 1000,
});

type ICharacter = {
  id: string;
  name: string;
  image: string;
};

const CharacterScreen = ({
  route,
  navigation,
}: ScreenProps<Screens.CHARACTER>) => {
  const characterId = route.params.characterId;
  const characterPlaceHolder = route.params?.character;
  const { data: character, error } = useQuery<ICharacter>({
    queryKey: [`character${characterId}`],
    queryFn: () => fetchCharacter(),
    placeholderData: undefined,
    // staleTime: 3000,
    // refetchInterval: 3000,
  });
  const fetchCharacter = async () => {
    await new Promise(r => setTimeout(r, 3000)); // Simulate network delay
    return (await api.get(`/character/${characterId}`))?.data;
  };

  useEffect(() => {
    navigation.setOptions({
      title: characterPlaceHolder?.name || 'Character Details',
    });
  }, [characterPlaceHolder?.name]);

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error occured: {error.message} </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ backgroundColor: 'frenchgrey', margin: 10 }}>
        <Image
          source={{
            uri: character?.image,
          }}
          style={{ width: '80%', height: 100 }}
        />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={{ fontWeight: 'bold', marginTop: 5 }}
        >
          {character?.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default CharacterScreen;
