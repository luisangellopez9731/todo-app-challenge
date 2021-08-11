import React, { useState, FC } from "react";
import { View } from "react-native";
import { todoService } from "@/services";
import { useEffect } from "react";
import { InsertTodo, Todo as TodoEntity, Todos } from "@/entities";
import { CheckBox, Text } from "@ui-kitten/components";

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
      onChange={(value) => onChange(value)}
    >
      {() => (
        <Text category="h6" style={{ marginLeft: 8 }}>
          {title}
        </Text>
      )}
    </CheckBox>
  );
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todos>({ completed: [], pending: [] });
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const todos = await todoService.getAll();
    // console.warn(todos)
    setTodos(todos);
  };
  useEffect(() => {
    loadData().then(() => {
      setLoading(false);
    });
  }, []);

  const todoChanged = () => {
    loadData();
  };

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
          <Text category="h3" style={{ marginBottom: 16, fontWeight: "bold" }}>
            Completed Tasks
          </Text>
          {todos.completed.length ? (
            todos.completed.map((todo) => (
              <Todo key={todo.id} {...todo} onChanged={todoChanged} />
            ))
          ) : (
            <Text>No Completed task</Text>
          )}
        </View>
        <View style={{ flex: 1, flexGrow: 2 }}>
          <Text category="h3" style={{ marginBottom: 16, fontWeight: "bold" }}>
            Pending Tasks
          </Text>
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
