import { Router } from "express";
import { subtaskController } from "../controllers/subtask.controllers.js";

const router = Router();

router.get("/", subtaskController.getAllSubTasks);
router.post("/", subtaskController.createSubTasks);
router.put("/:id", subtaskController.updatedSubTasks);
router.delete("/:id", subtaskController.deleteSubTasks);
router.get("/:id", subtaskController.getSubTask);

export default router;
