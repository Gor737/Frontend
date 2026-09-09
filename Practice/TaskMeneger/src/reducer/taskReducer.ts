import type { Action, Task } from "../types/TaskTypes";

export const taskReducer = (state: Task[], action: Action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "COMPLETE_TASK":
      const updated = state.map(task => task.id === action.payload ? {...task, completed: true} : task);
      return updated;
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "EDIT_TASK":
      const edited = state.map(task => task.id === action.payload.id ? action.payload : task);
      return edited;
    default:
      return state;
  }
};
