import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-gray-800">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-700">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          to="/tasks"
          className="inline-block mt-8 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Tasks
        </Link>
      </div>
    </div>
  );
};