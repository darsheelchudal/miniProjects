import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Must provide name"],
    maxlength: [20, "Name must not be more than 20"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Task = mongoose.model("Task", TaskSchema);
