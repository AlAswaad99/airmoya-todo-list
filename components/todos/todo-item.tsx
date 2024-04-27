"use client"
import { Todo } from "@/types"
import { Button } from "../ui/button"
import { Check, Pencil, Timer, Trash } from "lucide-react"
import { useState } from "react"
import { useTodos } from "@/hooks/use-todos"
import { AlertModal } from "./alert-modal"
import { useSelectedTodo } from "@/hooks/use-selected-todo"
import { useTodoModal } from "@/hooks/use-todo-modal"
import { cn } from "@/lib/utils"
import toast from "react-hot-toast"

interface TodoItemProps {
  todo: Todo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const todos = useTodos((state) => state.todos)
  const setTodos = useTodos((state) => state.setTodos)
  const [done, setDone] = useState(false)

  const setTodo = useSelectedTodo((state) => state.setTodo)
  const todoModal = useTodoModal()

  const onDeleteTodo = async (todoId: number) => {
    try {
      setLoading(true)
      setTodos(todos.filter((todo) => todo.id !== todoId))
      toast.success("Todo Deleted")
    } catch (error) {
      toast.error("Something Went Wrong")
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  const handleChange = (newTodo: Todo, status: "COMPLETED" | "IN-PROGRESS" | "TODO") => {
    setDone((prev) => !prev)
    // if (todo.done === "") {
    //   toast.success("Todo undone")
    // } else {
    toast.success("Update Todo")
    // }
    setTodos(
      todos.map((todo) =>
        todo.id === newTodo.id ? { ...todo, done: status } : todo
      )
    )
  }
  return (
    <>
      <AlertModal
        open={open}
        onClose={() => setOpen(false)}
        disabled={loading}
        onConfirm={() => onDeleteTodo(todo.id)}
      />
      <div
        className={cn(
          "flex  gap-2 bg-white p-4 rounded-md border",
          todo.done === "COMPLETED" && "bg-teal-50",
          todo.done === "IN-PROGRESS" && "bg-yellow-50"
        )}
      >

        <div>
          <div className="flex items-center">
            <h4
              className={cn(
                "font-medium tracking-tight",
                todo.done === "COMPLETED" && "line-through"
              )}
            >
              {todo.title}
            </h4>
            <Button
              onClick={() => {
                setTodo(todo)
                todoModal.onOpen()
              }}
              variant="ghost"
              size="sm"
              className="bg-transparent hover:bg-transparent"
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{todo.description}</p>
        </div>

        <div className="flex flex-row-reverse gap-2 ml-auto">
          <Button
            onClick={() => setOpen(true)}
            variant="outline"
            size="icon"
          >
            <Trash className="w-4 h-4" />
          </Button>

          <Button
            onClick={() => handleChange(todo, "IN-PROGRESS")}
            variant="outline"
            size="icon"
            className={cn(
              todo.done === "IN-PROGRESS" &&
              "bg-yellow-500 text-white hover:bg-yellow-600 hover:text-white"
            )}
          >
            <Timer className="w-4 h-4" />
          </Button>
          <Button
            onClick={() => handleChange(todo, "COMPLETED")}
            size="icon"
            variant="outline"
            className={cn(
              todo.done === "COMPLETED" &&
              "bg-teal-500 text-white hover:bg-teal-600 hover:text-white"
            )}
          >
            <Check className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </>
  )
}
