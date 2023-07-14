import Todos from "../models/todosModel.js";

// CRUD
// Get all todos

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.find();
    res.status(200).json({
      message: "success",
      todos,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Get one todo

const getOneTodo = async (req, res) => {
  try {
    const todo = await Todos.findById(req.params.id);

    if (!Todos) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "success",
      todo,
    });
  } catch (error) {
    console.log(error.message);
  }
};

// Post one todo

const postOneTodo = async (req, res) => {
  try {
    const { title, date } = req.body;

    const newTodo = await Todos.create({
      title,
      date,
    });
    res.status(201).json({
      message: "success",
      newTodo,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const putOneTodo = async (req, res) => {
  try {
    const { title, date } = req.body;
    const updatedTodos = await Todos.findByIdAndUpdate(req.params.id, {
      title,
      date,
    });
    res.status(200).json({
      message: "success",
      updatedTodos,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteOneTodo = async (req, res) => {
  try {
    await Todos.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.send(error);
  }
};

export{
  getAllTodos,
  getOneTodo,
  postOneTodo,
  putOneTodo,
  deleteOneTodo
};
