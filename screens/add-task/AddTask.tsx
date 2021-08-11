import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";
import { Form } from "./Form";
import React from "react";

type AddTaskScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddTask"
>;

type Props = {
  navigation: AddTaskScreenNavigationProp;
};

export const AddTask = ({ navigation }: Props) => {
  const onCreated = () => {
    navigation.navigate("Home");
  };
  return (
    <>
      <Form onCreated={onCreated} />
    </>
  );
};
