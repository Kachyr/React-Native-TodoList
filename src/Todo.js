import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export const Todo = ({ todo, onRemove }) => {

    

  return (
    <TouchableOpacity
      activeOpacity={0.5}

      onPress={() => console.log(`Pressed ${todo.id}`)}
      onLongPress={() => onRemove(todo.id)}
      delayLongPress={1000}
    >
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "#4949ab",
    borderRadius: 5,
    marginTop: 2,
  },
});
