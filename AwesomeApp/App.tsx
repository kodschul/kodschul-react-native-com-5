/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NewAppScreen } from '@react-native/new-app-screen';

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import CounterApp from './src/basics/CounterApp';
import CountDownApp from './src/basics/CountDownApp';
import ReactionTimeApp from './src/basics/ReactionTimeApp';
import ListItemsApp from './src/basics/ListItemsApp';
import ListFlatItemsApp from './src/basics/ListFlatItemsApp';
import GalleryApp from './src/basics/GalleryApp';
import TodoApp from './src/basics/todo-app/TodoApp';
import FlexboxApp from './src/basics/styling/FlexboxApp';
import CharactersScreen from './src/screens/Characters';

import MainApp from './src/App';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <CharactersScreen />
    </SafeAreaProvider>
  );
}

export default App;
