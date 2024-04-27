import { TodoApp } from "../todos/todo-app";
import { CardsStats } from "./status-card";

export default function TodoStatusCards() {
    // return (
    //     <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
    //         <CardsStats amount={12} percent={33} status="Completed" />
    //         <CardsStats amount={12} percent={33} status="In-Progress" />
    //         <CardsStats amount={12} percent={33} status="Not-Started" />
    //     </div>
    // )

    return (

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <CardsStats amount={12} percent={33} status="All" />
            <CardsStats amount={12} percent={33} status="Completed" />
            <CardsStats amount={12} percent={33} status="In-Progress" />
            <CardsStats amount={12} percent={33} status="Not-Started" />
        </div>



    )
}

