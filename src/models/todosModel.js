import { Schema, model } from "mongoose";

const todosModel = new Schema({
  title: {
    type: String,
    required: true,
    minlength: 5,
  },
  complated: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default model("Todos", todosModel);
