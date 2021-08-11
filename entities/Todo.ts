export interface InsertTodo {
  title: string;
  deadline: Date;
  startTime: Date;
  endTime: Date;
  remind?: any;
  repeat?: any;
}

export interface Todo extends InsertTodo {
  id: string;
  completed: boolean;
}

export interface Todos {
  completed: Todo[];
  pending: Todo[];
}

export interface TodoService {
  getAll(): Promise<Todos>;
  add(toDo: InsertTodo): Promise<Todo>;
  update(id: string, dataToUpdate: Partial<InsertTodo>): Promise<Todo>;
}

export type Remind =
  | "10 minutes"
  | "30 minutes"
  | "1 hour"
  | "3 hour"
  | "12 hour"
  | "1 day";

export type Repeat = "Weekly" | "Workdays" | "Weekend";
