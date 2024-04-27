import { ITodo } from "@/types/types";
import axios from "axios";
import { create } from "zustand";

interface TodoStore {
  todos: ITodo[];
  filteredTodos: ITodo[];
  selectedFilter: "TODO" | "COMPLETED" | "IN-PROGRESS" | "ALL";
  analytics: {
    allAmount: number;
    allPercent: number;
    completedAmount: number;
    completedPercent: number;
    inProgressAmount: number;
    inProgressPercent: number;
    tododAmount: number;
    tododPercent: number;
  };
  isLoading: boolean;
  setTodos: (todos: ITodo[]) => void;
  fetchTodos: () => void;
  calculateAnalytics: () => void;
  addTodo: (todo: ITodo) => void;
  updateTodo: (id: string, todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  filterByStatus: (done: "TODO" | "COMPLETED" | "IN-PROGRESS" | "ALL") => void;
  searchTodos: (query: string, selectedFilter: string) => void;
}

function calculateAnalytics(todos: ITodo[]) {
  return {
    allAmount: todos.length,
    allPercent: todos.length === 0 ? 0 : 100,
    completedAmount: todos.filter((todo) => todo.done === "COMPLETED").length,
    completedPercent:
      todos.length === 0
        ? 0
        : Math.ceil(
            (todos.filter((todo) => todo.done === "COMPLETED").length /
              todos.length) *
              100
          ),
    inProgressAmount: todos.filter((todo) => todo.done === "IN-PROGRESS")
      .length,
    inProgressPercent:
      todos.length === 0
        ? 0
        : Math.ceil(
            (todos.filter((todo) => todo.done === "IN-PROGRESS").length /
              todos.length) *
              100
          ),
    tododAmount: todos.filter((todo) => todo.done === "TODO").length,
    tododPercent:
      todos.length === 0
        ? 0
        : Math.floor(
            (todos.filter((todo) => todo.done === "TODO").length /
              todos.length) *
              100
          ),
  };
}

export const useTodos = create<TodoStore>((set, get) => ({
  todos: [],
  filteredTodos: [],
  selectedFilter: "ALL",
  isLoading: false,
  analytics: {
    allAmount: 0,
    allPercent: 0,
    completedAmount: 0,
    completedPercent: 0,
    inProgressAmount: 0,
    inProgressPercent: 0,
    tododAmount: 0,
    tododPercent: 0,
  },
  setTodos: (todos) => set({ todos }),

  filterByStatus: (done) => {
    const filtered =
      done === "ALL"
        ? get().todos
        : get().todos.filter((todo) => todo.done === done);
    set({ filteredTodos: filtered, selectedFilter: done });
  },
  searchTodos: (query, selectedFilter) => {
    console.log(query, selectedFilter);
    if (!query && selectedFilter) {
      if (selectedFilter === "ALL") {
        set({ filteredTodos: get().todos });
        return;
      }
      const filtered = get().todos.filter(
        (todo) => todo.done === selectedFilter
      );
      set({ filteredTodos: filtered });
      return;
    }

    if (!selectedFilter || selectedFilter === "ALL") {
      const filtered = get().todos.filter((todo) =>
        todo.title.toLowerCase().includes(query.toLowerCase())
      );
      set({ filteredTodos: filtered });
      return;
    }

    if (selectedFilter) {
      const filtered = get().todos.filter(
        (todo) =>
          todo.title.toLowerCase().includes(query.toLowerCase()) &&
          todo.done === selectedFilter
      );
      set({ filteredTodos: filtered });
      return;
    }
  },
  fetchTodos: async () => {
    try {
      set({ isLoading: true });
      const result = await axios(`/api/todos`, {
        method: "GET",
      });
      set({
        todos: result.data,
        filteredTodos: result.data,
        isLoading: false,
      });
      set((state) => ({
        analytics: calculateAnalytics(state.todos),
      }));
    } catch (e) {
      console.log("error during GET", e);
      set({
        isLoading: false,
        analytics: calculateAnalytics(get().todos),
      });
    }
  },
  addTodo: async (todo) => {
    try {
      set({ isLoading: true });
      const result = await axios(`/api/todos`, {
        method: "POST",
        data: todo,
      });
      set((state) => ({
        todos: [...state.todos, todo],
        filteredTodos:
          state.selectedFilter === "ALL" || state.selectedFilter === "TODO"
            ? [...state.todos, todo]
            : state.todos,
        isLoading: false,
      }));
      set((state) => ({
        analytics: calculateAnalytics(state.todos),
      }));
    } catch (e) {
      console.log("error during POST", e);
      set({
        isLoading: false,
        analytics: calculateAnalytics(get().todos),
      });
    }
  },
  updateTodo: async (id, updatedTodo) => {
    try {
      set({ isLoading: true });
      const result = await axios(`/api/todos`, {
        method: "PUT",
        data: { id, updatedTodo },
      });
      set((state) => ({
        todos: state.todos.map((todo) =>
          todo._id === id ? { ...todo, ...updatedTodo } : todo
        ),
        isLoading: false,
        filteredTodos: state.filteredTodos.map((todo) =>
          todo._id === id ? { ...todo, ...updatedTodo } : todo
        ),
      }));
      set((state) => ({
        analytics: calculateAnalytics(state.todos),
      }));
    } catch (e) {
      console.log("error during PUT", e);
      set({
        isLoading: false,
        analytics: calculateAnalytics(get().todos),
      });
    }
  },
  deleteTodo: async (id) => {
    try {
      set({ isLoading: true });
      const result = await axios(`/api/todos`, {
        method: "DELETE",
        data: { id },
      });
      set((state) => ({
        todos: state.todos.filter((todo) => todo._id !== id),
        filteredTodos: state.filteredTodos.filter((todo) => todo._id !== id),
        isLoading: false,
      }));
      set((state) => ({
        analytics: calculateAnalytics(state.todos),
      }));
    } catch (e) {
      console.log("error during DELETE", e);
      set({
        isLoading: false,
        analytics: calculateAnalytics(get().todos),
      });
    }
  },
  calculateAnalytics: () => {
    set({ analytics: calculateAnalytics(get().todos) });
  },
}));
