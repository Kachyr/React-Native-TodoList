import React from "react";
import { Text, View, StyleSheet } from "react-native";

export const Navbar = (props) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>Todo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#4949ab",
    paddingBottom: 10,
  },
  text: { color: "white", fontSize: 20 },
});
