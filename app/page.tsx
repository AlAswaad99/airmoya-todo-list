import TodoStatusCards from "@/components/dashboard/todo-status-app"
import { TodoApp } from "@/components/todos/todo-app"

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto my-6 py-6 px-4">
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <TodoStatusCards />
          <TodoApp />
        </div>
      </div>
    </div>
  )
}
