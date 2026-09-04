import { ToDoList } from "./components/ToDoList";
import { ToDoProvider } from "./context/ToDoProvider";

export default function App() {
  return (
    <ToDoProvider>
      <ToDoList />
    </ToDoProvider>
  );
}
