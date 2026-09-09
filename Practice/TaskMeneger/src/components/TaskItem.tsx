import { Link } from "react-router-dom";
import type { Task } from "../types/TaskTypes";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { deleteTask } from "../services/TaskService";

type Props = {
  task: Task;
};

export const TaskItem = ({ task }: Props) => {
  const context = useContext(TaskContext);

  return (
    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      
      {/* Header */}
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-gray-900">
          {task.title}
        </h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            task.priority === "HIGH"
              ? "bg-red-100 text-red-700"
              : task.priority === "MEDIUM"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {task.priority}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6 flex-1">
        <p className="text-sm leading-6 text-gray-600">
          {task.description}
        </p>
      </div>

      {/* Status */}
      <div className="mb-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-sm font-medium ${
            task.completed
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {task.completed ? "✓ Completed" : "○ Not completed"}
        </span>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-4">
        <Link
          to={`/tasks/${task.id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Details
        </Link>

        <Link
          to={`/tasks/${task.id}/edit`}
          className="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-300"
        >
          Edit
        </Link>

        <button
          onClick={() => {
            deleteTask(task.id)
              .then(() => {
                context?.dispatch({
                  type: "DELETE_TASK",
                  payload: task.id,
                });
              })
              .catch((err) => console.log(err));
          }}
          className="rounded-lg bg-red-100 px-4 py-2 text-sm font-medium text-red-600 transition hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
};