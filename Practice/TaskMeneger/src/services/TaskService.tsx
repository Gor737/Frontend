import axios from "axios";
import type { Task } from "../types/TaskTypes";

export const getTasks = () => {
  return axios.get<Task[]>("http://localhost:3000/tasks").then((res) => {
    const data = res.data.map(task =>  {
      return {
        id: task.id,
        title: task.title,
        description: task.description,
        completed: task.completed,
        priority: task.priority
      }
    })
    return data;
  });
};

export const postTasks = (newTasks: Omit<Task, "id">) => {
  return axios
    .post<Task>("http://localhost:3000/tasks", newTasks).then(res => res.data);
};

export const patchTask = (id:string, task:Task) => {
  return axios
  .patch<void>(`http://localhost:3000/tasks/${id}`, task);
}

export const putTask = (id: string, task:Task) => {
  return axios
    .put<void>(`http://localhost:3000/tasks/${id}`, task);
};

export const deleteTask = (id: string) => {
  return axios
    .delete<void>(`http://localhost:3000/tasks/${id}`);
};
