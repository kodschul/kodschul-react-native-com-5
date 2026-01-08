import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TodoInput from './TodoInput';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    'Learn React Native',
    'Build Awesome Apps',
    'Share with the world',
  ]);

  const addTodo = (todoText: string) => {
    setTodos([todoText, ...todos]);
  };

  const removeTodo = (todoText: string) => {
    setTodos(todos.filter(todo => todo !== todoText));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#15a1f2',
      }}
    >
      <View style={{ paddingTop: 20 }}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          TodoApp
        </Text>
      </View>

      <TodoInput onSubmitTodo={addTodo} />

      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={removeTodo} />
        )}
        keyExtractor={item => item}
      />
    </SafeAreaView>
  );
};

export default TodoApp;
