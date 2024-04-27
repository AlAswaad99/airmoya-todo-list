import { create } from "zustand"
import { Todo } from "@/types"

interface TodoStore {
  todos: Todo[]
  setTodos: (todos: Todo[]) => void
}

export const useTodos = create<TodoStore>((set) => ({
  todos: [
    {
      id: 1,
      title: "string",
      description: "string adfads fadsf ads fads fsadf dsafadsfasdf sadfasdf dsa fads fadsfasdf sadf",
      done: "TODO"
    }
  ],
  setTodos: (todos) => set({ todos }),
}))
