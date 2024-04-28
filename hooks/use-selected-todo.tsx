import { ITodo } from "@/types/types"
import { create } from "zustand"

interface useSelectedTodoProps {
  todo: ITodo | null
  setTodo: (todo: ITodo | null) => void
}

export const useSelectedTodo = create<useSelectedTodoProps>((set) => ({
  todo: null,
  setTodo: (todo: ITodo | null) => set({ todo }),
}))
