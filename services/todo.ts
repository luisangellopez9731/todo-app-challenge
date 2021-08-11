import { Todo, InsertTodo, TodoService } from "@/entities";
import { getItemAsync, setItemAsync } from "expo-secure-store";
import uuid from "react-native-uuid";

// setItemAsync("todos", JSON.stringify([]));

async function getTodos(): Promise<Todo[]> {
  let todos = await getItemAsync("todos");
  return JSON.parse(todos ?? "[]");
}

export class TodoServiceImpl implements TodoService {
  getAll = async () => {
    const todos = await getTodos();
    const completed = [];
    const pending = [];
    todos.forEach((todo) =>
      ((todo.completed ? completed : pending) as Todo[]).push(todo)
    );
    return { completed, pending };
  };

  add = async (todoData: InsertTodo) => {
    const id = uuid.v4();
    const todo = { ...todoData, id } as Todo;
    const todos = await getTodos();
    const todoAdded = [...todos, todo];
    await setItemAsync("todos", JSON.stringify(todoAdded));
    return todo;
  };

  update = async (id: string, data: Partial<InsertTodo>) => {
    const todos = await getTodos();
    let index;
    const todoToUpdate = todos.find((todo, i) => {
      if (todo.id === id) {
        index = i;
        return true;
      }
    });
    const updatedTodo = { ...todoToUpdate, ...data } as Todo;
    todos[index] = updatedTodo;
    await setItemAsync("todos", JSON.stringify(todos));
    return updatedTodo;
  };
}
