import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import { useForm } from "react-hook-form";

export const ToDoAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ title: string }>();

  const onSubmit = (data: { title: string }) => {
    onAdd(data.title);
    reset();
  };

  const context = useContext(ToDoContext);
  const onAdd = context!.onAdd;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-3 mb-6"
    >
      <input
        type="text"
        {...register("title")}
        placeholder="What needs to be done?"
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <button
        type="submit"
        className="px-5 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition"
      >
        add
      </button>
    </form>
  );
};