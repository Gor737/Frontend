import { TaskContext } from "./TaskContext";
import { getTasks } from "../services/TaskService";
import { useEffect, useReducer, type ReactNode } from "react";
import { taskReducer } from "../reducer/taskReducer";

type Prop = {
  children: ReactNode;
};

export const TaskProvider = ({ children }: Prop) => {
  const [state, dispatch] = useReducer(taskReducer, []);
  useEffect(() => {
    getTasks().then((tasks) => {
      dispatch({type: "SET_TASKS", payload: tasks});
    });
  }, []);

  return (
    <TaskContext.Provider value={{ tasks: state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};
