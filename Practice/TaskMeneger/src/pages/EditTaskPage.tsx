import { useForm } from "react-hook-form";
import type { Priority } from "../types/TaskTypes";
import { TaskContext } from "../context/TaskContext";
import { patchTask } from "../services/TaskService";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

type FormData = {
  title: string;
  description: string;
  priority: Priority;
};

export const EditTaskPage = () => {
  const { id } = useParams();
  if(!id) throw new Error('Can not find task');
  const navigate = useNavigate();
  const context = useContext(TaskContext);
  if (!context) throw new Error("Context not found");

  const task = context.tasks.find((task) => task.id === id);
  if (!task) throw new Error("Task not found");

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description,
        priority: task.priority,
      });
    }
  }, [task, reset]);

  const onSubmit = (data: FormData): void => {
    const edited = {
      ...data,
      id: task.id,
      completed: task.completed,
    };

    patchTask(id, edited)
      .then(() => {
        context.dispatch({ type: "EDIT_TASK", payload: edited });
        navigate("/tasks");
      })
      .catch((err) => {
        console.log({ error: err });
      });
  };

  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Edit Task</h1>
          <p className="mt-2 text-gray-500">
            Edit a task and set its priority.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-2xl bg-white p-8 shadow-sm"
        >
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Title
              </label>

              <input
                id="title"
                {...register("title", {
                  required: "Title is required",
                })}
                placeholder="Enter task title"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Description
              </label>

              <textarea
                id="description"
                {...register("description", {
                  required: "Description is rqeuired",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                placeholder="Enter task description"
                rows={5}
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
              {errors.description && <p>{errors.description.message}</p>}
            </div>

            {/* Priority */}
            <div>
              <label
                htmlFor="priority"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Priority
              </label>

              <select
                id="priority"
                {...register("priority", {
                  required: "Priority is required",
                })}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option value="HIGH">High</option>
                <option value="MEDIUM">Medium</option>
                <option value="LOW">Low</option>
              </select>
              {errors.priority && <p>{errors.priority.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
            >
              Edit Task
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
