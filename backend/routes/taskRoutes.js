import express from "express";
import { 
    createNewTask,
    assignNewTask,
    updateTask,
    getTaskById,
    getAllTask,
    removeTask
} from "../controllers/taskController.js"
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/', protect, createNewTask);

router.put('/:taskId/assign', protect, assignNewTask);

router.put('/:taskId/status', protect, updateTask);

router.get('/', protect, getAllTask);

router.get('/:taskId', protect, getTaskById);

router.delete('/:taskId', protect, removeTask);

export default router;