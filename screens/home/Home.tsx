import { Button } from "@/components";
import { TodoList } from "./todo-list";
import { HeaderItems, IoniconsHeaderButton } from "./HeaderItems";
import React, { FC, useState } from "react";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { HeaderButtons, HeaderButton } from "react-navigation-header-buttons";

export const Home: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const [isFocused, setIsFocused] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerRight: () => <HeaderItems />,
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
