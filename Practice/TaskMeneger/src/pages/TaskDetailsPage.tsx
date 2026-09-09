import { useContext } from "react";
import { useParams } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { patchTask } from "../services/TaskService";

export const TaskDetailsPage = () => {
  const { id } = useParams();
  if (!id) throw new Error("Id repaired");
  const context = useContext(TaskContext);
  if (!context) throw new Error("context cannot found!");
  const task = context.tasks.find((task) => task.id === id);
  if (!task) throw new Error("Cannot found task");

  console.log(
    context?.tasks.map((task) => ({
      id: task.id,
      type: typeof task.id,
    })),
  );

  const onCompleted = (id: string): void => {
    const completed = { ...task, completed: true };
    patchTask(id, completed).then(() => {
      context.dispatch({ type: "COMPLETE_TASK", payload: id });
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      {task ? (
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-gray-800">
            Task Details
          </h1>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Title</p>
              <p className="text-xl font-semibold text-gray-800">
                {task.title}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Description</p>
              <p className="text-gray-700">{task.description}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Priority</p>
              <p className="font-semibold text-gray-800">{task.priority}</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="font-semibold text-gray-800">
                {task.completed ? "Completed" : "Not completed"}
              </p>
              {!task.completed ? (
                <button
                  onClick={() => onCompleted(id)}
                  className="mt-4 rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white shadow-sm transition hover:bg-green-700 active:scale-95"
                >
                  Complete
                </button>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-xl font-semibold text-red-500">
          Task Not Found
        </div>
      )}
    </div>
  );
};
