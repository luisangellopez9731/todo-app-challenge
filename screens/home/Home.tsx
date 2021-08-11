import React, { FC, useState } from "react";
// import { Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useFocusEffect } from "@react-navigation/native";
import { TodoList, Button } from "@/components";
import styled from "styled-components/native";
// import { Button } from "@ui-kitten/components";

import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

const IoniconsHeaderButton = (props) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

export const Home: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item
              title="search"
              iconName="ios-search"
              onPress={() => alert("search")}
            />
            <Item
              title="Notifications"
              iconName="notifications-outline"
              onPress={() => alert("Notifications")}
            />
            <Item
              title="Menu"
              iconName="menu-outline"
              onPress={() => alert("Menu")}
            />
          </HeaderButtons>
        ),
      });
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, [])
  );

  return (
    <>
      <View>
        {isFocused && <TodoList />}
        <Button onPress={() => navigation.navigate("AddTask")}>
          Add a Task
        </Button>
      </View>
    </>
  );
};

const View = styled.View`
  height: 100%;
  padding: 10px;
  background-color: white;
`;
