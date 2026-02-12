import Column from "../components/Column";
import { Toaster } from "react-hot-toast";

export default function Board({ logout }) {
  const user = localStorage.getItem("user");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">

      <Toaster />

      {/* HEADER */}
      <div className="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-600">
          Kanban Board
        </h1>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            Welcome, <span className="font-semibold">{user}</span>
          </p>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition text-sm"
          >
            Logout
          </button>
        </div>
      </div>

      {/* BOARD AREA */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Column title="To Do" col="todo" />
          <Column title="In Progress" col="progress" />
          <Column title="Done" col="done" />
        </div>
      </div>

    </div>
  );
}

