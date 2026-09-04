import { useContext } from "react";
import type { ItemType } from "../types/ToDoTypes";
import { ToDoContext } from "../context/ToDoContext";

type Props = {
  todoItem: ItemType;
};

export const ToDoItem = ({ todoItem }: Props) => {
  const context = useContext(ToDoContext);
  const onRemove = context!.onRemove;
  const onComplete = context!.onComplete;

  return (
    <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm">
      <div className="w-8 text-sm text-gray-400">
        {todoItem.id}
      </div>

      <div className="flex-1">
        <div
          className={`font-medium ${
            todoItem.completed
              ? "text-gray-400 line-through"
              : "text-gray-800"
          }`}
        >
          {todoItem.title}
        </div>

        <div className="text-sm text-gray-500 mt-1">
          {todoItem.completed ? "Completed" : "Active"}
        </div>
      </div>

      <button
        onClick={() => onComplete(todoItem.id)}
        className="px-3 py-2 text-sm font-medium text-green-600 border border-green-300 rounded-lg hover:bg-green-50 transition"
      >
        Complete
      </button>

      <button
        onClick={() => onRemove(todoItem.id)}
        className="px-3 py-2 text-sm font-medium text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition"
      >
        Remove
      </button>
    </div>
  );
};