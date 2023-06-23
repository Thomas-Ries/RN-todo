import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/header';
import AddTodo from './components/addTodo';
import TodoItem from './components/todoItem';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Acheter du café',      id: '1' },
    { text: 'Acheter du lait',      id: '2' },
    { text: 'Acheter de l\'eau',    id: '3' },
    { text: 'Acheter des légumes',  id: '4' },
    { text: 'Acheter du Picon',     id: '5' },
    { text: 'Acheter de la bière',  id: '6' },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.id != id);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: text, id: Math.random().toString() },
          ...prevTodos
        ];
      })
    } else {
      Alert.alert('OOPS!', 'Une Todos doit faire plus de 3 caractères 🙂', [
        { text: 'Ajouter une Todo', onPress: () => console.log('alert closed') }
      ]);
    }
  }


  return (

    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
            keyExtractor={(item) => item.id}
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    flex: 1,
    padding: 40,
  },

  list: {
    flex: 1,
    marginTop: 50,
  }
});
