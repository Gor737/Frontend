import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

export const FilterToDo = () => {
  const filters = ["all", "active", "completed"];
  const context = useContext(ToDoContext);

  return (
    <div className="flex justify-center my-6">
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl">
        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition"
          onClick={() => context?.setFilter("all")}
        >
          {filters[0]}
        </button>

        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition"
          onClick={() => context?.setFilter("active")}
        >
          {filters[1]}
        </button>

        <button
          className="px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-white hover:text-gray-900 transition"
          onClick={() => context?.setFilter("completed")}
        >
          {filters[2]}
        </button>
      </div>
    </div>
  );
};