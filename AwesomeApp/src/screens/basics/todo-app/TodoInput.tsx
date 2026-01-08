import { View, TextInput } from 'react-native';
import React, { useState } from 'react';

const TodoInput = ({ onSubmitTodo }: TodoInputProps) => {
  const [todoText, setTodoText] = useState('');

  const addNewToDoItem = () => {
    onSubmitTodo(todoText);
    setTodoText('');
  };

  console.log('INPUT_RENDERED');

  return (
    <View style={{ marginTop: 10, marginHorizontal: 20 }}>
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
        onSubmitEditing={addNewToDoItem}
      />
    </View>
  );
};

type TodoInputProps = {
  onSubmitTodo: (todoText: string) => void;
};

export default TodoInput;
