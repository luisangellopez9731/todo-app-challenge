import React from "react";
import { View } from "react-native";
import * as eva from "@eva-design/eva";
import { Home, AddTask } from "@/screens";
import { ApplicationProvider } from "@ui-kitten/components";
import { NavigationContainer } from "@react-navigation/native";
import { OverflowMenuProvider } from "react-navigation-header-buttons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
