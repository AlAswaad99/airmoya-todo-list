"use client"
import { useTodoModal } from "@/hooks/use-todo-modal"
import { Button } from "../ui/button"
import { Search } from "lucide-react"
import { Input } from "../ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



export const TodoClient = () => {
  const todoModal = useTodoModal()
  return (
    <div className="flex flex-col md:flex-row justify-start items-center md:justify-between">
      <div className="bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
        <form className="flex">
          <div className="relative w-full md:mr-2 md:w-1/3">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-8" />
          </div>
          <div>
            <Select>
              <SelectTrigger className="hidden md:flex">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Completed">Completed</SelectItem>
                <SelectItem value="In-Progress">In-Progress</SelectItem>
                <SelectItem value="Todo">Todo</SelectItem>
              </SelectContent>
            </Select>
          </div>


        </form>
      </div>
      <Button
        onClick={() => {
          todoModal.onOpen()
        }}
        className="md:w-auto w-full"
      >
        Add Todo
      </Button>
    </div>
  )
}
