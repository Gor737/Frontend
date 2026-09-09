import { createBrowserRouter } from "react-router-dom";
import { TasksPage } from "../pages/TasksPage";
import { TaskDetailsPage } from "../pages/TaskDetailsPage";
import { EditTaskPage } from "../pages/EditTaskPage";
import { AddTaskPage } from "../pages/AddTaskPage";
import { TasksLayout } from "../pages/TasksLayout";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/tasks",
    element: <TasksLayout />,
    children: [
      { index: true, element: <TasksPage /> },
      { path: "add", element: <AddTaskPage /> },
      { path: ":id", element: <TaskDetailsPage /> },
      { path: ":id/edit", element: <EditTaskPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
