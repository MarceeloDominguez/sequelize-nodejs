import { Router } from "express";
import { taskController } from "../controllers/task.controllers.js";

const router = Router();

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updatedTask);
router.delete("/:id", taskController.deleteTask);
router.get("/:id", taskController.getTask);

router.get("/:id/subtasks", taskController.getTaskSubtasks);

export default router;
