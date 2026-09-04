import { useContext } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoContext } from "../context/ToDoContext";

export const List = () => {
  const context = useContext(ToDoContext);

  const filtered =
    context?.filter === "all"
      ? context?.todos
      : context!.filter === "active"
        ? context?.todos.filter((el) => !el.completed)
        : context?.todos.filter((el) => el.completed);

  return (
    <div className="flex flex-col gap-3">
      {filtered!.map((todo) => {
        return <ToDoItem key={todo.id} todoItem={todo} />;
      })}
    </div>
  );
};