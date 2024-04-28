import TodoModel from "@/models/todo";
import { connectToDatabase } from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
// import FormData from "form-data";
type ResponseData = {
  data: any;
  status: number;
};

export async function GET(req: NextRequest) {
  try {
    const db = await connectToDatabase();
    const todos = await TodoModel.find({});
    return NextResponse.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json({ message: "Internal Server Error" });

    // res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const { title, description, done } = body;
    const db = await connectToDatabase();
    const todo = await TodoModel.create({ title, description, done });
    return NextResponse.json(todo);

    // res.status(201).json(todo);
  } catch (error) {
    console.error("Error creating todo:", error);
    return NextResponse.json({ message: "Internal Server Error" });

    // res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function PUT(req: NextRequest) {
  const body = await req.json();
  try {
    const { id, updatedTodo } = body;
    const { title, description, done } = updatedTodo;
    const db = await connectToDatabase();
    const todo = await TodoModel.findByIdAndUpdate(
      id,
      { title, description, done },
      { new: true }
    );
    return NextResponse.json(todo);

    // res.status(201).json(todo);
  } catch (error) {
    console.error("Error updating todo:", error);
    return NextResponse.json({ message: "Internal Server Error" });

    // res.status(500).json({ message: "Internal Server Error" });
  }
}


export async function DELETE(req: NextRequest) {
  const body = await req.json();
  try {
    const { id } = body;
    const db = await connectToDatabase();
    await TodoModel.findByIdAndDelete(id);
    return NextResponse.json("todo deleted successfully");

    // res.status(201).json(todo);
  } catch (error) {
    console.error("Error deleteing todo:", error);
    return NextResponse.json({ message: "Internal Server Error" });

    // res.status(500).json({ message: "Internal Server Error" });
  }

}

