export interface Todo {
  id: number
  title: string
  description: string
  done: "TODO" | "COMPLETED" | "IN-PROGRESS"
}
