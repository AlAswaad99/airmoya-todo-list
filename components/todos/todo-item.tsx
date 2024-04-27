"use client"
import { useSelectedTodo } from "@/hooks/use-selected-todo"
import { useTodoModal } from "@/hooks/use-todo-modal"
import { useTodos } from "@/hooks/use-todos"
import { cn } from "@/lib/utils"
import { ITodo } from "@/types/types"
import { Check, MoreVertical, Pencil, Timer, Trash } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { Button } from "../ui/button"
import { AlertModal } from "./alert-modal"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"


interface TodoItemProps {
  todo: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const { todos, isLoading, fetchTodos, addTodo, deleteTodo, updateTodo } = useTodos();

  const setTodo = useSelectedTodo((state) => state.setTodo)
  const todoModal = useTodoModal()

  const onDeleteTodo = async (todoId: string) => {
    try {
      setLoading(true)
      // setTodos(todos.filter((todo) => todo._id !== todoId))
      deleteTodo(todoId);
      toast("Todo Deleted")
    } catch (error) {
      toast.error("Something Went Wrong")
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }

  const handleChange = (newTodo: ITodo, status: "COMPLETED" | "IN-PROGRESS" | "TODO") => {
    setDone((prev) => !prev)
    // if (todo.done === "") {
    //  toast("Todo undone")
    // } else {
    toast("Update Todo")
    // }
    updateTodo(newTodo._id!, { ...newTodo, done: todo.done === status ? "TODO" : status })
    // setTodos(
    //   todos.map((todo) =>
    //     todo._id === newTodo._id ? { ...todo, done: todo.done === status ? "TODO" : status } : todo
    //   )
    // )
  }
  return (
    <>
      <AlertModal
        open={open}
        onClose={() => setOpen(false)}
        disabled={loading}
        onConfirm={() => onDeleteTodo(todo._id!)}
      />
      <div
        className={cn(
          "flex items-center gap-2 bg-white py-2 px-4 rounded-md border",
          todo.done === "COMPLETED" && "bg-teal-50",
          todo.done === "IN-PROGRESS" && "bg-yellow-50"
        )}
      >

        <div className="w-full">
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
              className="hidden md:flex bg-transparent hover:bg-transparent"
            >
              <Pencil className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{todo.description}</p>
        </div>

        <div className="hidden md:flex flex-row-reverse gap-2 ml-auto">
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
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => handleChange(todo, "COMPLETED")}>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <p>{todo.done !== "COMPLETED" ? "Mark as Completed" : "Unmark as Todo"}</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleChange(todo, "IN-PROGRESS")}>
                <div className="flex items-center gap-2">
                  <Timer className="w-4 h-4" />
                  <p>{todo.done !== "IN-PROGRESS" ? "Mark as In-Progress" : "Unmark as Todo"}</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setTodo(todo)
                  todoModal.onOpen()
                }}>
                <div className="flex items-center gap-2">
                  <Pencil className="w-4 h-4" />
                  <p>Edit</p>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setOpen(true)}>
                <div className="flex items-center gap-2">
                  <Trash className="w-4 h-4" />
                  <p>Remove</p>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  )
}
