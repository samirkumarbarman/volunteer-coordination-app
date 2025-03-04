import Task from "../models/taskModel.js";


export const createTask = async ({title, description, asssignTo, createdBy, dueDate}) => {
    return await Task.create({title, description, asssignTo, createdBy, dueDate});
};

export const assignTask = async (taskId, assignTo) => {
    return await Task.findByIdAndUpdate(taskId, {assignTo}, { new: true} );
};

export const updateTaskStatus = async (taskId, status) =>{
    return await Task.findByIdAndUpdate(taskId, { status }, { new: true } );
};

export const getTaskByUser = async (userId) => {
    return await Task.find({ assignTo: userId}).populate("assigned to createdBy");
};

export const getTask = async () =>{
    return await Task.find().populate("assignedTo");
};

export const deleteTask = async (taskId) => {
    return await Task.findByIdAndDelete(taskId);
};