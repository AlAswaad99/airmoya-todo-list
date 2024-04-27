"use client";
import { useTodos } from "@/hooks/use-todos";
import { Check, ClipboardList, List, Timer } from "lucide-react";
import { CardsStats } from "./status-card";

export default function TodoStatusCards() {
  const { todos, isLoading, fetchTodos, analytics } = useTodos();

//   useEffect(() => {
//     fetchTodos();
//   }, [fetchTodos]);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <CardsStats
        amount={analytics.allAmount}
        percent={analytics.allPercent}
        status="All"
        icon={<ClipboardList />}
      />
      <CardsStats
        amount={analytics.completedAmount}
        percent={analytics.completedPercent}
        status="Completed"
        icon={<Check />}
      />
      <CardsStats
        amount={analytics.inProgressAmount}
        percent={analytics.inProgressPercent}
        status="In-Progress"
        icon={<Timer />}
      />
      <CardsStats
        amount={analytics.tododAmount}
        percent={analytics.tododPercent}
        status="Todo"
        icon={<List />}
      />
    </div>
  );
}
