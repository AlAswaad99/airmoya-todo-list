import { useTodos } from "@/hooks/use-todos";
import { TodoItem } from "./todo-item";

export const TodoList = () => {
  const { filteredTodos, isLoading, fetchTodos } = useTodos();


  return (
    <div className="flex flex-col gap-4">
      {(!filteredTodos || (filteredTodos && filteredTodos.length === 0)) && (
        <div className="flex justify-center my-12">No Todos</div>
      )}
      {filteredTodos && filteredTodos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </div>
  );
};
