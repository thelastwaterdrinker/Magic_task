import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title: String,
});

const TaskModel = mongoose.model("Card", TaskSchema);

export default TaskModel;
