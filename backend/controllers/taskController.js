import { createTask, assignTask, updateTaskStatus, getTask, getTaskByUser, deleteTask } from "../services/taskServices.js";

export const createNewTask = async (req, res) => {
    try {
        const task = await createTask(req.body);
        res.status(200).json({message: "Task created successsfully", task});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

export const assignNewTask = async (req, res) => {
    try {
        const task = await assignTask(req.params.taskId, req.params.userId);
        res.status(200).json({message :"Task assigned successfully", task});
    } catch (error) {
        res.status(400).json({message:error.message});
    }
};

export const updateTask = async (req, res) =>{
    try {
        const task = await updateTaskStatus(req.params.taskId, req.params.status);
        res.status(200).json({message:"Task updated", task});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const getAllTask = async (req, res) =>{
    try {
        const task = await getTask();
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};

export const removeTask = async (req, res) =>{
    try {
        const task = await deleteTask(req.params.taskId);
        res.status(200).json({message:"task deleted successfully", task});
    } catch (error) {
        res.status(500).json({message:error.message});
    }
};