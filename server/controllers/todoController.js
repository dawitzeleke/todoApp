import { Todo } from "../models/todoModel.js";

export const getTodos = async (req, res) => {
  try {
    const Todos = await Todo.find();
    res.status(200).json({ success: true, data: Todos });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const createTodo = async (req, res) => {
  try {
    console.log("Request body 1:", req.body);

    const { todoTitle, todoDescription, status } = req.body;
    console.log("Request todoTitle :", todoTitle);
    console.log("Request todoDescription :", todoDescription);
    console.log("Request status:", status);

    if (!todoTitle || !todoDescription) {
      return res.status(400).json({ success: false, message: "todoTitle and todoDescription are required." });
    }
    console.log("Request body 2:", req.body);


    const newTodo = await Todo.create({ todoTitle, todoDescription, status });
    console.log("Request body 3:", req.body);

    res.status(201).json({ success: true, data: newTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { todoTitle, todoDescription, status } = req.body;

    const existingTodo = await Todo.findById(id);
    if (!existingTodo) {
      return res.status(404).json({ success: false, message: "Todo not found." });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { todoTitle, todoDescription, status },
      { new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: updatedTodo });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ success: false, message: "Todo not found." });
    }

    res.status(200).json({ success: true, message: "Todo deleted successfully." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error", error });
  }
};
