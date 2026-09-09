import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { TaskList } from "../components/TaskList";

export const TasksPage = () => {
  const context = useContext(TaskContext);
  console.log(context);
  return <TaskList tasks={context?.tasks ?? []} />;
};
