import { createRoot } from "react-dom/client";
import "./index.css";
import { TaskProvider } from "./context/TaskProvider.tsx";
// import App from "./App.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <TaskProvider>
    <RouterProvider router={router} />
  </TaskProvider>,
);
