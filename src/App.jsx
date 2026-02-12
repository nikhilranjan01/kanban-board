import { useState } from "react";
import Login from "./pages/Login";
import Board from "./pages/Board";

export default function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return user ? (
    <Board logout={() => {
      localStorage.removeItem("user");
      setUser(null);
    }} />
  ) : (
    <Login onLogin={(u) => {
      localStorage.setItem("user", u);
      setUser(u);
    }} /> 
  );
}
