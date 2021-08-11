import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { Home, AddTask } from "@/screens";
import { View } from "react-native";
import { OverflowMenuProvider } from "react-navigation-header-buttons";

export type RootStackParamList = {
  Home: undefined;
  AddTask: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={{ height: "100%" }}>
        <NavigationContainer>
          <OverflowMenuProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "To-Do App" }}
              />
              <Stack.Screen
                name="AddTask"
                component={AddTask}
                options={{ title: "Add Task" }}
              />
            </Stack.Navigator>
          </OverflowMenuProvider>
        </NavigationContainer>
      </View>
    </ApplicationProvider>
  );
}
