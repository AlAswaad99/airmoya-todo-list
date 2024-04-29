import TodoStatusCards from "@/components/dashboard/todo-status-app"
import { TodoApp } from "@/components/todos/todo-app"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="max-w-[1300px] mx-auto my-6 py-6 px-4">
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="space-y-2">
            <h4 className="font-semibold text-3xl">Dashboard</h4>
            <TodoStatusCards />
          </div>
          <TodoApp />
        </div>
      </div>
      <div className="flex flex-col md:hidden">
        <Tabs defaultValue="todos">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="todos">Todos</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          </TabsList>
          <TabsContent value="todos"><TodoApp /></TabsContent>
          <TabsContent value="dashboard">
            <div className="space-y-2">
              <h4 className="font-semibold text-3xl">Dashboard</h4>
              <TodoStatusCards />
            </div>
          </TabsContent>
        </Tabs>


      </div>
    </div>
  )
}
