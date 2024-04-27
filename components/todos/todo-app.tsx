"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { useSelectedTodo } from "@/hooks/use-selected-todo";
import { useTodos } from "@/hooks/use-todos";
import { useEffect } from "react";
import { AddTodoForm } from "./add-todo-form";
import { TodoClient } from "./client";
import { TodoList } from "./todo-list";

export const TodoApp = () => {
  const selectedTodo = useSelectedTodo((state) => state.todo);
  const { todos, isLoading, fetchTodos } = useTodos();
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-7">
        <CardHeader>
          <CardTitle>Todo List</CardTitle>
          <CardDescription>A list of all your todos</CardDescription>
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
  );
};
