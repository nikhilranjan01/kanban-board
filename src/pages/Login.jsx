import { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!name.trim()) {
      setError("Username or Email required");
      return;
    }
    setError("");
    onLogin(name);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="bg-white w-[350px] p-8 rounded-2xl shadow-xl">
        
        <h1 className="text-2xl font-bold text-center mb-2">
          Kanban Board
        </h1>
        <p className="text-gray-500 text-center mb-6 text-sm">
          Simple Project Manager
        </p>

        <input
          type="text"
          placeholder="Enter Username or Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {error && (
          <p className="text-red-500 text-sm mt-2">{error}</p>
        )}

        <button
          onClick={handleLogin}
          className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition"
        >
          Login
        </button>

        <p className="text-xs text-gray-400 text-center mt-4">
          No real authentication. Demo only.
        </p>

      </div>
    </div>
  );
}
