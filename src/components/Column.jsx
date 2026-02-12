import { useTaskStore } from "../store/taskStore";
import TaskCard from "./TaskCard";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Column({ title, col }) {
  const { tasks, addTask } = useTaskStore();
  const list = tasks[col];
  const [text, setText] = useState("");

  const handleAdd = async () => {
    if (!text.trim()) return;
    try {
      await addTask(text);
      setText("");
    } catch {
      toast.error("Add Failed");
    }
  };

  return (
    <div className="bg-gray-100 p-3 rounded min-h-[400px]">
      <h2 className="font-bold mb-2">{title}</h2>

      {/* INPUT ONLY FOR TODO */}
      {col === "todo" && (
        <div className="flex gap-2 mb-3">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="New Task..."
            className="border p-2 flex-1 rounded"
          />
          <button
            onClick={handleAdd}
            className="bg-green-500 text-white px-3 rounded"
          >
            Add
          </button>
        </div>
      )}

      {list.map(t => (
        <TaskCard key={t.id} task={t} col={col} />
      ))}
    </div>
  );
}
