import React, { FC } from "react";
import { View } from "react-native";
import { Header } from "@/components";
import { todoService } from "@/services";
import { useTodoList } from "./useTodoList";
import { CheckBox, Text } from "@ui-kitten/components";
import { InsertTodo, Todo as TodoEntity } from "@/entities";

const CheckboxText: FC = ({ children }) => {
  return (
    <Text category="h6" style={{ marginLeft: 8 }}>
      {children as string}
    </Text>
  );
};

export interface TodoProps extends TodoEntity {
  onChanged: () => void;
}

export const Todo: FC<TodoProps> = ({ id, title, completed, onChanged }) => {
  const onChange = async (value: boolean) => {
    await todoService.update(id, { completed: value } as Partial<InsertTodo>);
    onChanged();
  };

  return (
    <CheckBox
      style={{ marginBottom: 16 }}
      checked={completed}
      onChange={onChange}
    >
      <CheckboxText>{title}</CheckboxText>
    </CheckBox>
  );
};

export const TodoList = () => {
  const { loading, todoChanged, todos } = useTodoList();
  if (loading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <View
        style={{
          height: "100%",
          flex: 1,
          paddingHorizontal: 20,
          marginVertical: 8,
        }}
      >
        <View style={{ flexGrow: 0, marginBottom: 20 }}>
          <Header>Completed Tasks</Header>
          {todos.completed.length ? (
            todos.completed.map((todo) => (
              <Todo key={todo.id} {...todo} onChanged={todoChanged} />
            ))
          ) : (
            <Text>No Completed task</Text>
          )}
        </View>
        <View style={{ flex: 1, flexGrow: 2 }}>
          <Header>Pending Tasks</Header>
          {todos.pending.length ? (
            todos.pending.map((todo) => (
              <Todo key={todo.id} {...todo} onChanged={todoChanged} />
            ))
          ) : (
            <Text>No Pending Tasks</Text>
          )}
        </View>
      </View>
    );
  }
};
