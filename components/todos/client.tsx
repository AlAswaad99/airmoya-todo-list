"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTodoModal } from "@/hooks/use-todo-modal";
import { useTodos } from "@/hooks/use-todos";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const TodoClient = () => {
  const todoModal = useTodoModal();
  const { filterByStatus, searchTodos, selectedFilter } = useTodos();
  const [queryString, setQueryString] = useState("");

  function isTodoStatus(
    value: string
  ): value is "ALL" | "TODO" | "COMPLETED" | "IN-PROGRESS" {
    return ["ALL", "TODO", "COMPLETED", "IN-PROGRESS"].includes(value);
  }
  const handleFilterSelected = (value: string) => {
    if (isTodoStatus(value)) {
      filterByStatus(value);
      setQueryString("");
    }
  };

  const handleSearch = (e: any) => {
    setQueryString(e.target.value);
    searchTodos(e.target.value, selectedFilter);
  };
  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
      <div className="bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <form className="flex">
          <div className="relative w-full md:mr-2 md:w-1/3">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="pl-8"
              onChange={handleSearch}
              value={queryString}
            />
          </div>
          <div>
            <Select onValueChange={handleFilterSelected}>
              <SelectTrigger className="hidden md:flex">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ALL">All</SelectItem>
                <SelectItem value="COMPLETED">Completed</SelectItem>
                <SelectItem value="IN-PROGRESS">In-Progress</SelectItem>
                <SelectItem value="TODO">Todo</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </form>
      </div>
      <Button
        onClick={() => {
          todoModal.onOpen();
        }}
        className="md:w-auto w-full"
      >
        Add Todo
      </Button>
    </div>
  );
};
