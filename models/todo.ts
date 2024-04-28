// models/todo.js

import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  done: { type: String, enum: ['TODO', 'COMPLETED', 'IN-PROGRESS'], required: true }
});

const TodoModel = mongoose.models.Todo || mongoose.model('Todo', todoSchema);

export default TodoModel;
