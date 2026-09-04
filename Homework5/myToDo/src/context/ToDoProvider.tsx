import { useState, type ReactNode } from "react";
import type { FilterType, ItemType } from "../types/ToDoTypes";
import { ToDoContext } from "./ToDoContext";

type Child = {
  children: ReactNode;
};

export const ToDoProvider = ({ children }: Child) => {
  const [todos, setTodos] = useState<ItemType[]>([
    { id: 100, title: "To love", completed: true },
    { id: 101, title: "To find a job", completed: false },
    { id: 102, title: "To married", completed: false },
    { id: 103, title: "To get children", completed: false },
    { id: 104, title: "To travel with wife", completed: false },
  ]);

  const [filter, setFilter] = useState<FilterType>('all');

  const onAdd = (title: string) => {
    setTodos((prevTodos) => {
      const added = [
        ...prevTodos,
        {
          id: prevTodos[prevTodos.length - 1].id + 1,
          title: title,
          completed: false,
        },
      ];
      return added;
    });
  };

  const onRemove = (id: number) => {
    setTodos((prevTodos) => {
      const removed = prevTodos.filter((todo) => todo.id !== id);
      return removed;
    });
  };

  const onComplete = (id: number) => {
    setTodos((prevTodos) => {
      const completed = prevTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: true,
          };
        } else return todo;
      });
      return completed;
    });
  };

  const values = {
    todos,
    onAdd,
    onComplete,
    onRemove,
    filter,
    setFilter
  };

  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};
