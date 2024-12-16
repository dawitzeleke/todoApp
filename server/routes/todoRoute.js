import express from "express";
import { createTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todoController.js";
const router = express.Router();

router.route("/tasks").get(getTodos);
router.route("/tasks").post(createTodo);
router.route("/tasks/:id").put( updateTodo);
router.route("/tasks/:id").delete( deleteTodo);


export default router;