import { Backpack, Check, Clipboard, ClipboardCheck, ClipboardList, Cross, List, LucideClipboardPlus, Timer } from "lucide-react";
import { TodoApp } from "../todos/todo-app";
import { CardsStats } from "./status-card";

export default function TodoStatusCards() {
    return (

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardsStats amount={12} percent={33} status="All" icon={<ClipboardList />} />
            <CardsStats amount={12} percent={33} status="Completed" icon={<Check />} />
            <CardsStats amount={12} percent={33} status="In-Progress" icon={<Timer />} />
            <CardsStats amount={12} percent={33} status="Todo" icon={<List />} />
        </div>
    )
}

