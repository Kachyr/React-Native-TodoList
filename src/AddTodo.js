import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHendler = () => {
    if (value.trim() !== "") {
      onSubmit(value);
      setValue("");
    } else {
        //error must be
        Alert.alert('You must input your business name!')
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={"Input name of your business"}
        autoCorrect={false}
      />
      <Button style={styles.button} title={"Add"} onPress={pressHendler} />
    </View>
  );
};

//STYLES

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 3,
    borderBottomColor: "#4949ab",
  },
  button: {
    borderRadius: 0,
  },
});
