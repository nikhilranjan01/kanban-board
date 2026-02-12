import { useTaskStore } from "../store/taskStore";
import toast from "react-hot-toast";

export default function TaskCard({ task, col }) {
  const { deleteTask, moveTask } = useTaskStore();

  const next =
    col === "todo" ? "progress" :
    col === "progress" ? "done" : null;

  return (
    <div className="bg-white p-2 rounded shadow mb-2">
      <p>{task.text}</p>

      <div className="flex gap-2 mt-2">
        {next && (
          <button
            className="bg-blue-500 text-white px-2 rounded"
            onClick={async () => {
              try { await moveTask(col, next, task); }
              catch { toast.error("Move Failed"); }
            }}
          >
            Move
          </button>
        )}

        <button
          className="bg-red-500 text-white px-2 rounded"
          onClick={async () => {
            try { await deleteTask(col, task.id); }
            catch { toast.error("Delete Failed"); }
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
