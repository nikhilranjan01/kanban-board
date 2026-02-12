import { useTaskStore } from "../store/taskStore";
import toast from "react-hot-toast";

export default function TaskCard({ task, col }) {
  const { deleteTask, moveTask } = useTaskStore();

  let moveForward = null;
  let moveBackward = null;

  // Decide directions
  if (col === "todo") {
    moveForward = "progress";
  }

  if (col === "progress") {
    moveBackward = "todo";
    moveForward = "done";
  }

  if (col === "done") {
    moveBackward = "progress";
  }

  return (
    <div className="bg-white p-3 rounded shadow mb-3">
      <p>{task.text}</p>

      <div className="flex gap-2 mt-3">

        {/* BACK BUTTON */}
        {moveBackward && (
          <button
            className="bg-gray-500 text-white px-2 py-1 rounded text-xs"
            onClick={async () => {
              try {
                await moveTask(col, moveBackward, task);
              } catch {
                toast.error("Move Failed");
              }
            }}
          >
            ← Back
          </button>
        )}

        {/* FORWARD BUTTON */}
        {moveForward && (
          <button
            className="bg-blue-500 text-white px-2 py-1 rounded text-xs"
            onClick={async () => {
              try {
                await moveTask(col, moveForward, task);
              } catch {
                toast.error("Move Failed");
              }
            }}
          >
            Next →
          </button>
        )}

        {/* DELETE BUTTON */}
        <button
          className="bg-red-500 text-white px-2 py-1 rounded text-xs"
          onClick={async () => {
            try {
              await deleteTask(col, task.id);
            } catch {
              toast.error("Delete Failed");
            }
          }}
        >
          Delete
        </button>

      </div>
    </div>
  );
}
