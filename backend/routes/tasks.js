import express from "express";
import { createTask, getAllTask } from "../controllers/tasks.js";

const router = express.Router();

router.get("/", getAllTask);
router.post('/create_task', createTask);


export default router;