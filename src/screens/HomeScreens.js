import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export function HomeScreens({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello Rakesh</Text>

      <Button title="go to list" onPress={() => navigation.navigate("List")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    marginTop: 2,
  },
});
export default HomeScreens;
