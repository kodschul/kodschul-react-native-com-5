import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const TodoItem = ({ todo, onDelete }: TodoItemProps) => {
  const [isDone, setDone] = useState(false);

  const deleteTodo = () => onDelete(todo);
  return (
    <TouchableOpacity
      onPress={isDone ? deleteTodo : () => setDone(true)}
      onLongPress={deleteTodo}
      style={{ marginHorizontal: 20, marginTop: 30 }}
    >
      <Text
        style={[
          {
            fontSize: 30,
            color: '#fff',
          },
          isDone && { opacity: 0.5, textDecorationLine: 'line-through' },
        ]}
      >
        {todo}
      </Text>
    </TouchableOpacity>
  );
};

type TodoItemProps = {
  todo: string;
  onDelete: (todoText: string) => void;
};

export default TodoItem;
