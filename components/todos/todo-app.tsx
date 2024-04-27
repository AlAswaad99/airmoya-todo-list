"use client"

import { AddTodoForm } from "./add-todo-form"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TodoList } from "./todo-list"
import { useSelectedTodo } from "@/hooks/use-selected-todo"
import { TodoClient } from "./client";

export const TodoApp = () => {
  const selectedTodo = useSelectedTodo((state) => state.todo)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>
            You made 265 sales this month.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <TodoClient />
            <AddTodoForm initialData={selectedTodo} />
            <TodoList />
          </div>
        </CardContent>
      </Card>
    </div>


  )
}
