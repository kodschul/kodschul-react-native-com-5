import { View, Text, FlatList, TextInput, ScrollView } from 'react-native';
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
  const [todoText, setTodoText] = useState('');

  useEffect(() => {
    let items: any[] = [];

    for (let index = 0; index < 1000; index++) {
      items.push('Todo: ', index);
    }

    setTodos(items);
  }, []);

  const addTodo = (todoText: string) => {
    setTodos([todoText, ...todos]);
  };

  const removeTodo = (todoText: string) => {
    setTodos(todos.filter(todo => todo !== todoText));
  };

  console.log('APP_RENDERED');

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

      <TextInput
        value={todoText}
        onChangeText={setTodoText}
        style={{
          marginVertical: 20,
          fontSize: 30,
          color: 'white',
          borderBottomWidth: 2,
          borderBottomColor: 'white',
        }}
        returnKeyType="done"
        onSubmitEditing={() => addTodo(todoText)}
      />

      <ScrollView>
        {todos.map(todo => (
          <TodoItem todo={todo} onDelete={removeTodo} />
        ))}
      </ScrollView>

      {/* <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} onDelete={removeTodo} />
        )}
        keyExtractor={item => item}
      /> */}
    </SafeAreaView>
  );
};

export default TodoApp;
