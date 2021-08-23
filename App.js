import { StatusBar } from "expo-status-bar";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";

import HomeScreens from "./src/screens/HomeScreens";

const Friends = [
  { name: "Avinash", place: "Varanasi" },
  { name: "Suraj", place: "Bangalore" },
  { name: "Shekhar", place: "Haridwar" },
  { name: "Vikash", place: "Hyderabad" },
  { name: "Nandu", place: "Delhi" },
  { name: "Abdul", place: "Chennai" },
];

export function List() {
  return (
    <View style={styles.container}>
      <FlatList
        data={Friends}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text>Place: {item.place}</Text>
          </View>
        )}
      />
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

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="List" component={List} />
        {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
