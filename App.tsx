import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Link } from "react-router-native";
import { Home, AddTask } from "@/screens";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View>
          <Link to="/" underlayColor="#f0f4f7">
            <Text>Home</Text>
          </Link>
          <Link to="/add-task" underlayColor="#f0f4f7">
            <Text>Add Task</Text>
          </Link>
        </View>

        <Route exact path="/" component={Home} />
        <Route path="/add-task" component={AddTask} />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
