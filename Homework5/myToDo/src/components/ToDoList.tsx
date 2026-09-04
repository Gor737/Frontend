import { useContext } from "react";
import { FilterToDo } from "./FilterToDo";
import { List } from "./List";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoContext } from "../context/ToDoContext";

export const ToDoList = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-12 px-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo List
        </h1>

        <ToDoAdd />

        <FilterToDo />

        <List />
      </div>
    </div>
  );
};