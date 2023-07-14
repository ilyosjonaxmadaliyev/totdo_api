import { Router } from "express";
const router = Router();
import {
  getAllTodos,
  getOneTodo,
  postOneTodo,
  putOneTodo,
  deleteOneTodo,
} from "../controller/todosControl.js";

router.get("/all", getAllTodos);
router.get("/:id", getOneTodo);
router.post("/add", postOneTodo);
router.put("/:id", putOneTodo);
router.delete("/:id", deleteOneTodo);

export default router