import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-900 px-8 py-4">
      <h1 className="text-2xl font-bold text-white">
        Task Manager
      </h1>

      <div className="flex gap-6">
        <Link
          to="/tasks"
          className="text-gray-300 hover:text-white"
        >
          Tasks
        </Link>

        <Link
          to="/tasks/add"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add Task
        </Link>
      </div>
    </nav>
  );
};