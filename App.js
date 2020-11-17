import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { AddTodo } from "./src/AddTodo.js";
import { Navbar } from "./src/Navbar.js";
import { Todo } from "./src/Todo.js";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    // const newTodo ={
    //   id: Date.now().toString(),
    //   title:title,

    // }
    // setTodos(todos.concat([newTodo]))
    //   setTodos((prevTodos)=>{
    //     return[
    //       ...prevTodos,newTodo
    //     ]
    //   })
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <View>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />
        <FlatList
          keyExtractor={(item) => item.id}
          data={todos}
          renderItem={({ item }) => <Todo onRemove={removeTodo} todo={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
