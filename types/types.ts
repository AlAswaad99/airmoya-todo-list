export interface ITodo {
  _id?: string
  title: string
  description: string
  done: "TODO" | "COMPLETED" | "IN-PROGRESS"
}
