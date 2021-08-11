import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/App";
import { Form } from "./Form";
import React from "react";

type AddTaskScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "AddTask"
>;

const useAddTask = (navigation: any) => {
  const onCreated = () => {
    navigation.navigate("Home");
  };

  return {
    onCreated,
  };
};

type Props = {
  navigation: AddTaskScreenNavigationProp;
};

export const AddTask = ({ navigation }: Props) => {
  const { onCreated } = useAddTask(navigation);
  return (
    <>
      <Form onCreated={onCreated} />
    </>
  );
};
