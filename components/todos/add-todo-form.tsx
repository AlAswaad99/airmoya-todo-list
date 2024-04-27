"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { useTodoModal } from "@/hooks/use-todo-modal"
import { useTodos } from "@/hooks/use-todos"
import { ITodo } from "@/types/types"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Modal } from "@/components/ui/modal"
import { useSelectedTodo } from "@/hooks/use-selected-todo"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

let nextId = 0

const formSchema = z.object({
  title: z.string().min(1, "Title is Required"),
  description: z.string().min(1, "Description is Required"),
})

interface AddTodoFormProps {
  initialData: ITodo | null
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ initialData }) => {
  const { todos, isLoading, fetchTodos, addTodo, deleteTodo, updateTodo } = useTodos();
  const todoModal = useTodoModal()
  // const setTodos = useTodos((state) => state.setTodos)
  // const todos = useTodos((state) => state.todos)
  const setTodo = useSelectedTodo((state) => state.setTodo)
  const selectedTodo = useSelectedTodo((state) => state.todo)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
    },
  })

  const { isSubmitting, isValid } = form.formState

  const title = initialData ? "Update Todo" : "Create Todo"
  const description = initialData
    ? "update todo with form"
    : "Create todo with form"
  const toastMessage = initialData ? "Todo Updated" : "Todo Created"
  const action = initialData ? "Update" : "Create"

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (initialData) {
      // const updatedTodos = todos.map((todo) =>
      //   todo.id === initialData.id ? { ...todo, ...values } : todo
      // )

      // setTodos(updatedTodos)
      updateTodo(initialData._id!, {...initialData, ...values});
      todoModal.onClose()
      setTodo(null)
    } else {
      const newTodo:ITodo = {
        ...values,
        done: "TODO",
      }

      // setTodos([...todos, newTodo])
      addTodo(newTodo)
      form.reset()
      todoModal.onClose()
    }
   toast(toastMessage)
  }

  useEffect(() => {
    if (selectedTodo === null) {
      form.setValue("title", "")
      form.setValue("description", "")
    } else if (initialData !== null) {
      form.setValue("title", initialData?.title)
      form.setValue("description", initialData?.description)
    }
  }, [selectedTodo, form, initialData])

  return (
    <Modal
      isOpen={todoModal.isOpen}
      title={title}
      description={description}
      onClose={todoModal.onClose}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <Label>Title</Label>
                <FormControl>
                  <Input placeholder="Todo Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <Label>Description</Label>
                <FormControl>
                  <Input required={false} placeholder="Todo Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full justify-end flex gap-x-2">
            <Button
              type="button"
              variant="outline"
              disabled={isSubmitting}
              onClick={todoModal.onClose}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {action}
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  )
}

export { AddTodoForm }
