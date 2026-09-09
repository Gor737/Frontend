export type Priority = "HIGH" | "MEDIUM" | "LOW";

export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
};

export type Action =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "DELETE_TASK"; payload: string }
  | { type: "COMPLETE_TASK"; payload: string }
  | { type: "EDIT_TASK"; payload: Task };

export type ContextType = {
  tasks: Task[];
  dispatch: (action:Action) => void;
}