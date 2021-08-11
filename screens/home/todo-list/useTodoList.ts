import { Todos } from "@/entities";
import { todoService } from "@/services";
import { useState, useEffect } from "react";

export const useTodoList = () => {
  const [todos, setTodos] = useState<Todos>({ completed: [], pending: [] });
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    const todos = await todoService.getAll();
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

  return {
    todos,
    loading,
    todoChanged,
  };
};
