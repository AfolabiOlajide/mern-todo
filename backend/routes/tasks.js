import express from "express";
import { createTask, deleteTask, getAllTask, getCurrentUserTasks, updateTask } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getAllTask);
router.post('/createTask', createTask);
router.get("/myTasks", getCurrentUserTasks);
router.put('/:taskId', updateTask);
router.delete("/:taskId", deleteTask)


export default router;