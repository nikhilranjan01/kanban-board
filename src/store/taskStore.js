import { create } from "zustand";
import { fakeApi } from "../api/mockApi";

export const useTaskStore = create((set, get) => ({
  tasks: {
    todo: [],
    progress: [],
    done: [],
  },

  addTask: async (text) => {
    const prev = JSON.parse(JSON.stringify(get().tasks));
    const newTask = { id: Date.now(), text };

    set(state => ({
      tasks: { ...state.tasks, todo: [...state.tasks.todo, newTask] }
    }));

    try {
      await fakeApi();
    } catch {
      set({ tasks: prev });
      throw new Error("Add Failed");
    }
  },

  deleteTask: async (col, id) => {
    const prev = JSON.parse(JSON.stringify(get().tasks));

    set(state => ({
      tasks: {
        ...state.tasks,
        [col]: state.tasks[col].filter(t => t.id !== id)
      }
    }));

    try {
      await fakeApi();
    } catch {
      set({ tasks: prev });
      throw new Error("Delete Failed");
    }
  },

  moveTask: async (from, to, task) => {
    const prev = JSON.parse(JSON.stringify(get().tasks));

    set(state => ({
      tasks: {
        ...state.tasks,
        [from]: state.tasks[from].filter(t => t.id !== task.id),
        [to]: [...state.tasks[to], task]
      }
    }));

    try {
      await fakeApi();
    } catch {
      set({ tasks: prev });
      throw new Error("Move Failed");
    }
  }
}));
